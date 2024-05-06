/*******************************************************
 * 模块名称：main.js
 * 作者：阿浩Python
 * 日期：2024-04-28
 *
 * 描述：
 * 本脚本用于自动化生成webpack打包所需的模块导出。它运用Babel工具集对源代码进行解析与转换。
 *
 * 免责声明：
 * 本脚本仅限于AST技术学习，严禁非法使用，违者承担一切后果。
 *******************************************************/

const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const generator = require('@babel/generator').default
const types = require('@babel/types')
const fs = require('fs')


process.argv.length > 2 ? loaderFile = process.argv[2] : loaderFile = __dirname + '/main/loader.js'
process.argv.length > 3 ? modulesFile = process.argv[3] : modulesFile = __dirname + '/main/modules.js'
process.argv.length > 4 ? executorFile = process.argv[4] : executorFile = __dirname + '/main/executor.js'

// 读取输入文件（加载器、模块、执行器）或使用默认路径
loaderCode = fs.readFileSync(loaderFile, {encoding: 'utf-8'})
modulesCode = fs.readFileSync(modulesFile, {encoding: 'utf-8'})
executorCode = fs.readFileSync(executorFile, {encoding: 'utf-8'})

console.time("处理完毕，耗时");

// 初始化模块代码
if (modulesCode[0] === '{') {
    modulesCode = '(' + modulesCode + ')'
}

// 解析JavaScript代码到抽象语法树（AST）进行转换
var loaderAst = parser.parse(loaderCode)
var modulesAst = parser.parse(modulesCode)
var executorAst = parser.parse(executorCode)

// 定位加载器自执行函数体和参数节点
let loaderBody, loaderArguments;
if (loaderAst.program.body[0].expression.type === 'UnaryExpression') {
    loaderBody = loaderAst.program.body[0].expression.argument.callee.body.body
    loaderArguments = loaderAst.program.body[0].expression.argument.arguments
} else {
    loaderBody = loaderAst.program.body[0].expression.callee.body.body
    loaderArguments = loaderAst.program.body[0].expression.arguments
}

// 遍历和删除自执行函数体中调用方法的节点
for (body of loaderBody) {
    if (!types.isExpressionStatement(body) || !types.isCallExpression(body.expression)) {
        continue
    }
    // 删除调用方法的节点
    loaderBody.splice(loaderBody.indexOf(body), 1)
}

// 定位加载器函数节点
let exportName = null;
traverse(loaderAst, {
    FunctionDeclaration(path) {
        if (!path.toString().includes('exports:')) {
            return
        }
        let {id, body} = path.node
        let length = body.body.length

        // 获取 ReturnStatement 类型节点的子节点，object.name 代表对象名称，property.name 代表下标名称
        let {object, property} = body.body[length - 1].argument.expressions[0].callee.object

        // 创建存储函数对象的赋值节点
        let assignmentNode = types.expressionStatement(
            types.assignmentExpression('=',
                types.memberExpression(
                    types.identifier('exec_funcs'),
                    types.identifier(property.name),
                    true
                ),
                types.memberExpression(
                    types.identifier(object.name),
                    types.identifier(property.name),
                    true
                ),
            )
        )
        types.addComment(assignmentNode, 'leading', '将调用的模块存储到全局对象中') // 添加注释
        body.body.splice(length - 1, 0, assignmentNode)  // 添加节点到加载器函数体内

        // 获取加载器的函数名称
        exportName = id.name

        // 既然已经找到所需节点，可以停止遍历
        // path.stop();
    },
    MemberExpression(path) {
        let {object} = path.node
        if (object.name === 'self') {
            object.name = 'window'
        }
    }
})

// 判断是否找到加载器函数
if (!exportName) {
    throw "加载器函数定位失败"
}

// 变量声明方法
function createGlobalVariableAssigment(varName, value) {
    return types.expressionStatement(
        types.assignmentExpression(
            '=',
            types.identifier(varName),
            types.identifier(value)
        )
    );
}

// 添加全局变量window和navigator
loaderAst.program.body.unshift(
    createGlobalVariableAssigment('window', 'global'),
    createGlobalVariableAssigment('navigator', '{}')
);

// 导出加载器函数和存储函数对象
loaderBody.push(
    createGlobalVariableAssigment('export_func', exportName),
    createGlobalVariableAssigment('exec_funcs', '{}')
)

// 替换执行器中调用加载器的节点
traverse(executorAst, {
    "CallExpression|NewExpression"(path) {
        let {callee, arguments} = path.node
        if (types.isIdentifier(callee)) {
            // 判断是否为加载器名称
            if (callee.name !== exportName && callee.name !=='n') {
                return
            }
            // 判断传递的参数是否符合条件
            if (arguments.length !== 1 || (!types.isNumericLiteral(arguments[0]) && !types.isStringLiteral(arguments[0]))) {
                return
            }
            callee.name = 'export_func'

        } else if (types.isMemberExpression(callee)) {
            let {object, property} = callee
            // 判断是否为加载器名称
            if ((object.name !== exportName && object.name !=='n') || property.name !== 'n') {
                return
            }
            // 判断传递的参数是否符合条件
            if (arguments.length !== 1 || !types.isIdentifier(arguments[0])) {
                return
            }
            object.name = 'export_func'
        }
    }
})
executorCode = generator(executorAst).code


// 将所有模块添加到数组中
let modulesNode = [], properties;
properties = modulesAst.program.body[0].expression.type === "ObjectExpression" ? modulesAst.program.body[0].expression.properties : modulesAst.program.body[0].expression.arguments[0].elements[1].properties
properties.forEach(function (obj) {
    modulesNode.push(obj)
})
// 将所有模块添加到加载器自执行函数中
if (loaderArguments.length>0 && loaderArguments[0].type === "ObjectExpression") {
    let combinedArray = loaderArguments[0].properties.concat(modulesNode); // 和加载器中已有的模块合并
    loaderArguments.splice(0, 1, types.objectExpression(combinedArray))
} else {
    loaderArguments.splice(0, 1, types.objectExpression(modulesNode))
}


// 将加载器自执行函数加载到环境中
eval(generator(loaderAst).code)

// 通过加载器执行代码
eval(executorCode)
console.log()

// 查看加载器中被调用的模块
// console.log(exec_funcs)

// 返回对象的字符串形式
function objectToString(obj) {
    let objString = '({\n';
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            if (typeof obj[prop] === 'function') {
                objString += `  "${prop}": ${obj[prop].toString()},\n`;
            } else {
                objString += `  "${prop}": ${JSON.stringify(obj[prop])},\n`;
            }
        }
    }
    objString += '})';
    return objString;
}

// 将执行函数存储的对象转换为字符串形式
let objString = objectToString(exec_funcs);

// 将转换后的字符串重新解析为AST
funcsAst = parser.parse(objString)

// 将原本的模块替换成被调用的模块
let funcsNode = []
funcsAst.program.body[0].expression.properties.forEach(function (obj) {
    funcsNode.push(obj)
})
loaderArguments.splice(0, 1, types.objectExpression(funcsNode))

console.timeEnd("处理完毕，耗时");

// 返回最终的结果
let result = generator(loaderAst).code + '\n\n// 执行代码\n' + executorCode

// 写入最终的结果到文件
// 生成JS代码并写入 result.js 文件
fs.writeFile(__dirname + '/result.js', result, (err) => {
    if (err) {
        return console.error(`写入文件出错: ${err.message}`);
    }
    console.log('结果文件已成功生成：result.js');
});