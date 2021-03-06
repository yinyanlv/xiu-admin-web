## webstorm eslint 报错：ESLint: TypeError: this.cliEngine is not a constructor
**原因：** ide和eslint版本不兼容，当前webstorm版本2019.1

**解决方案：** 升级webstorm

## 支持sass
安装node-sass

## 按组件加载antd组件样式并定制主题样式
安装babel-plugin-import, react-app-rewired, customize-cra, less, less-loader

## 需要安装types文件的常用包
react-redux
react-router-dom
lodash
react-transition-group

## 针对ts文件定义路径别名
步骤一：项目根目录下添加.env文件， 添加配置项NODE_PATH=./（用于node编译时定位）

步骤二：项目根目录下添加tsconfig.paths.json，定义路径别名，并在tsconfig.json中继承配置项（用于node+ide，不能直接在tsconfig.json中定义，会被cra重写，只能通过继承配置项的方式定义路径别名）

## 配置webstorm按根路径查找scss文件
右键项目根目录 -> Mark Directory as -> Resource Root（也可以定义webpack.config.js，但是对于webstorm似乎无效）

## tsconfig.json新增配置项
```
{
    "compilerOptions": {
        "suppressImplicitAnyIndexErrors": true,  // 允许obj['abc']
        "typeRoots": [  // 定义类型查找目录
          "./node_modules/@types",
          "./types"  // 扩展windows等
        ]
    }
}
```

## 允许隐式any，tsconfig.json新增配置项
```
"noImplicitAny": false
```

## history.js，安装react-router-dom时会同时安装history，不需要另外安装history
```
https://juejin.im/entry/598868126fb9a03c38109805
https://github.com/brickspert/blog/issues/3
```

## redux-saga
sagaMiddleware.run(...)必须在createStore之后调用，否则会报找不到sagaMiddleware错误
