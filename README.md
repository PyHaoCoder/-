# WebPack自动导出模块工具

将WebPack打包所调用的模块一键导出，返回简化后的WebPack代码

GitHub：https://github.com/PyHaoCoder/webpack-export-tool

## 简介

这是我自己开源的一个WebPack自动导出模块工具，通过AST进行节点修改，最终实现模块自导功能

## 使用方式

* 安装 nodejs
* 将加载器代码存放于 `loader.js`，模块代码存放于 `modules.js`，调用模块的代码存放到 `executor.js`
* 运行脚本

```shell
node main.js
```

详细使用教程:

* 控制台运行时可自行选择加载器、模块、执行代码的路径
* 运行结果成功后将会生成 `result.js` 来存放完整的代码
* 加载器函数名和执行器中调用加载器的函数名需要保持一致，需要在`main.js`中将 `execFuncName` 参数设置为 执行器中调用加载器的函数名

## 声明

本项目不针对任何加密做破解等处理，只为学习AST技术。

本项目仅作学习研究之用，下载学习后请于24小时内删除，不可用于破解（本身也不包含破解功能），如使用本工具造成任何法律后果，由使用者承担。


---
**个人微信：PyHaoCoder**
