# 微信小程序UI开发模板说明 

为了让编码(HTML+CSS)的MM更快的进行项目开发(不含JS的开发)，特写了此开发模板

## 1.安装NPM包

- 第一次执行需要进行安装

```
npm install 
```

- 模块更新

```
npm run update
```

## 2.进行开发

在开发的时候同时监测文件的变化，实时更新可以使用

```
npm run watch 
```

如果只想编译一下将源文件src目录编译到dist目录下

```
npm start
```

## 3.配置文件six006.config.json

- 可配置copy信息,支持多任务

单任务配置
```
    "copy": [
        {
            "srcRoot": "src",
            "distRoot": "dist",
            "src": [
                "src/assets/**/*"
            ],
            "dist": "dist",
            "base": "src"
        }
    ],
```

多任务配置
```
    "copy": [
        {
            "srcRoot": "src",
            "distRoot": "dist",
            "src": [
                "src/assets/**/*"
            ],
            "dist": "dist",
            "base": "src"
        },
         {
            "srcRoot": "src2",
            "distRoot": "dist2",
            "src": [
                "src2/assets/**/*"
            ],
            "dist": "dist2",
            "base": "src2"
        }
    ],
```

- 可配置ts信息,支持多任务
- 可配置html信息,支持多任务
- 可配置sass信息,支持多任务
- 可配置json信息,支持多任务

请注意，不要修改six006.config.json中结点的名称(如copy,ts,sass,html,json等)，因为它是同任务相关联的，修改之后会出现不能编译的问题

## 4.启动Web服务

为了解决微信小程序中无法处理本地图片的问题,可以启用web服务，以http的方式进行访问，可将相关的图片存放到`server`文件夹`images`目录下，
访问时，只需要通过 `http://xxx.xxx.xxx.xxx:port/images/xxx.png`即可访问

```
<image src="http://localhost:2018/images/case/1.jpg" />
```

```
npm run server
```

## 5.打开微信小程序开发工具

- 修改`src`目录下`project.config.json`中`appid`改成您实际拥有的appid值
- 将微信小程序项目目录设置成`dist`
- 若项目重新编译，微信小程序开发工具需要重新打开


## 6.常见问题

暂未列出，若您在使用过程中遇到一些困难或者意见欢迎咨询我QQ：974353437