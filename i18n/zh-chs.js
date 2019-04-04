const e=require("chalk"),a=require("figures"),r={desc:`Description:\n${e.blueBright("bruce-cli")} 一个零配置开箱即用的React应用自动化构建脚手架\n文档详情可查看 ${e.yellowBright("https://github.com/JowayYoung/bruce-cli")}`,judgeModules:`${a.cross} 请执行${e.blueBright("npm install")}或${e.blueBright("yarn install")}安装依赖`,judgePackage:`${a.cross} 请执行${e.blueBright("npm init")}或${e.blueBright("yarn init")}初始${e.blueBright("package.json")}`,judgeSrc:`${a.cross} 请执行${e.blueBright("bruce init")}或${e.blueBright("bruce i")}初始项目`,judgeType:`${a.cross} 为了保证项目的规范性，JS文件后缀名只能使用(js/jsx)或(ts/tsx)任意一种，且${e.blueBright("package.json")}必须设置useTs(使用ts/tsx则设置为true，否则为false)`},t={build:"构建项目",config:"配置项目",dll:"构建动态链接库",init:"初始项目",lang:"切换语言",new:"创建组件",newProps:"使用参数校验",remove:"删除依赖"},s={analyze:"分析打包结果",compress:"深度压缩文件",env:{1:"开发环境",2:"测试环境",3:"生产环境"},hash:"哈希文件名称",mode:"运行环境",output:"输出ES6代码",polyfill:"动态导入垫片",project:"构建项目",timed:"时间化根目录",upload:"上传到服务器"},u={compName:`${a.radioOn} 组件名称: `,compPath:`${a.radioOn} 组件路径: `,compProp:`${a.radioOn} 参数校验: `,depInstalled:`${a.tick} 依赖安装成功`,depInstalling:`${a.hamburger} 依赖正在安装中......`,initSucceed:`${a.tick} 项目初始成功`,newSucceed:`${a.tick} 组件创建成功`,ptInstalled:`${a.tick} ${e.blueBright("prop-types")}安装成功`,ptInstalling:`${a.hamburger} ${e.blueBright("prop-types")}正在安装中......`},c={buildFail:`${a.cross} 项目构建失败`,buildSucceed:`${a.tick} 项目构建成功`,judgeDll:`${a.cross} 请执行${e.blueBright("bruce dll")}或${e.blueBright("bruce d")}构建动态链接库`,judgeEntry:`${a.cross} 入口文件配置错误，SPA入口文件必须为${e.blueBright("src/index.js|ts|jsx|tsx")}，MPA入口文件必须为${e.blueBright("src/pages/pageName/index.js|ts|jsx|tsx")}`,judgeExist:r=>`${a.cross} 调试端口${e.blueBright(r)}已被占用`,judgeModules:r.judgeModules,judgePackage:r.judgePackage,judgePort:`${a.cross} 调试端口必须为正整数`,judgeSrc:r.judgeSrc,judgeTsconfig:`${a.cross} 请初始${e.blueBright("tsconfig.json")}`,judgeType:r.judgeType,listening:`监听开发环境 ${a.pointer}${a.pointer}`,listLocalhost:`${a.radioOn} 本地网: `,listNetwork:`${a.radioOn} 局域网: `,mode:["开发环境","测试环境","生产环境"],modeMap:{"开发环境":1,"测试环境":2,"生产环境":3},qaAnalyze:"请确认是否分析打包结果",qaCompress:"请确认是否深度压缩文件",qaCsslint:"请确认是否校验CSS",qaHash:"请确认是否哈希文件名称",qaJslint:"请确认是否校验JS",qaMode:"请选择构建环境",qaOpen:"请确认是否打开浏览器",qaOutput:"请确认是否输出ES6代码",qaPolyfill:"请确认是否动态导入垫片",qaPort:"请输入调试端口",qaTimed:"请确认是否时间化根目录",qaUpload:"请确认是否上传到服务器",uploadFail:`${a.cross} 项目上传失败`,uploading:`${a.hamburger} 项目正在上传中......`,uploadSucceed:`${a.tick} 项目上传成功`},i={configSucceed:`${a.tick} 项目配置成功`,judgeExist:`${a.cross} 配置文件已存在`},l={dllFail:`${a.cross} 动态链接库构建失败`,dllSucceed:`${a.tick} 动态链接库构建成功`,judgeModules:r.judgeModules,judgePackage:r.judgePackage,judgeSrc:r.judgeSrc,judgeVendor:`${a.cross} 项目依赖不能为空`,qaVendor:"请选择构建依赖"},d={dependencies:["antd 蚂蚁金服桌面端UI框架","antd-mobile 蚂蚁金服移动端UI框架","react-amap 高德地图组件","react-beautiful-dnd 元素拖拽组件","react-fastclick 触摸点透组件","react-hold 骨架屏组件","react-lazyload 懒加载组件","react-loadable 动态加载组件","react-pdf PDF组件","react-placeholder 占位符组件","react-select 下拉选择组件","react-virtualized 列表优化组件"],installed:`${a.tick} 依赖安装成功`,installing:`${a.hamburger} 依赖正在安装中......`,judgeExist:`${a.cross} 项目已存在，请使用其他名称创建项目`,judgeName:`${a.cross} 名称只能由数字、字母、中划线组成，且首位字符只能为字母`,obtained:`${a.warning} 请执行${e.blueBright("npm install")}或${e.blueBright("yarn install")}安装依赖`,obtaining:`${a.hamburger} 依赖正在获取中......`,qaDependence:"请选择应用依赖",qaInstall:"请确认是否自动安装依赖",qaName:"请输入项目名称",qaProps:"请确认是否使用参数校验",qaRouter:"请确认是否使用页面路由",qaState:"请确认是否使用状态管理",qaTs:"请确认是否使用TypeScript",qaType:"请选择应用类型"},g={langSucceed:`${a.tick} 语言切换成功`,qaLanguage:"请选择国际语言"},o={judgeExist:`${a.cross} 组件已存在，请使用其他名称创建组件`,judgeModules:r.judgeModules,judgeName:`${a.cross} 名称只能由数字、小写字母、中划线组成，且首位字符只能为小写字母`,judgePackage:r.judgePackage,judgeReact:`${a.cross} 当前应用不是React应用，无法使用此命令`,judgeSrc:r.judgeSrc,judgeType:r.judgeType},n={removeSucceed:`${a.tick} 依赖删除成功`,removing:`${a.hamburger} 依赖正在删除中......`},$=e=>e?"是":"否";module.exports={ACTION_TEXT:t,BUILD_TEXT:c,CONFIG_TEXT:i,DLL_TEXT:l,GLOB_TEXT:r,INFO_TEXT:s,INIT_TEXT:d,LANG_TEXT:g,NEW_TEXT:o,REMOVE_TEXT:n,TEMPLATE_TEXT:u,FormatBool:$};