const e=require("fs"),s=require("webpack"),i=require("webpackbar"),t=require("webpack-build-notifier"),n=require("webpack-bundle-analyzer").BundleAnalyzerPlugin,l=require("clean-webpack-plugin"),r=require("compression-webpack-plugin"),a=require("fork-ts-checker-webpack-plugin"),h=require("friendly-errors-webpack-plugin"),c=require("hard-source-webpack-plugin"),o=require("html-webpack-plugin"),u=require("html-webpack-tags-plugin"),d=require("lodash-webpack-plugin"),p=require("mini-css-extract-plugin"),m=require("webpack-spritesmith"),g=require("stylelint-webpack-plugin"),f=require("vue-loader").VueLoaderPlugin,w=require("uglifyjs-webpack-plugin"),{frame:b,style:y,stylelintIgnores:k,stylelintRules:v,useTs:q}=require("./bruce"),{ACTION_TEXT:E}=require("../i18n"),{AbsPath:S,IsExist:P,ReadEntry:j}=require("../util/setting");module.exports=class{constructor(l){const{MODE:o="dll",USE_ANALYZE:j=!1,USE_COMPRESS:C=!1,USE_CSSLINT:N=!1,USE_HASH:O=!1,USE_JSLINT:T=!1,USE_POLYFILL:x=!1}=l;this.mode=o,this.useCsslint=N,this.useJslint=T,this.usePolyfill=x,this.useHash=O,this.useCompress=C,this.useAnalyze=j,this.define=new s.DefinePlugin({RUN_ENV:JSON.stringify(this.mode)}),this.bar=new i({name:"Webpack Build"}),this.hardSource=new c,this.spritesmith=P("src/assets/icon")&&!!e.readdirSync(S("src/assets/icon")).length&&new m({apiOptions:{cssImageRef:"~sprite.png"},spritesmithOptions:{algorithm:"binary-tree"},src:{cwd:S("src/assets/icon"),glob:"*.png"},target:{css:S("src/assets/css/sprite.css"),image:S("src/assets/img/sprite.png")}}),this.stylelint=this.useCsslint&&new g({cache:!0,cacheLocation:S("node_modules/.cache/stylelint-webpack-plugin/.stylelintcache"),configFile:S(`../temp/configs/stylelintrc-${b}.json`,1),configOverrides:{ignoreFiles:k.map(e=>S(e)),rules:v},context:"src",files:"**/*.{css,sass,scss,less,vue}",fix:!1,syntax:y}),this.vueLoader="vue"===b&&new f,"dll"===this.mode?(this.defineDllEnv=new s.DefinePlugin({"process.env.NODE_ENV":JSON.stringify("dev")}),this.dll=new s.DllPlugin({name:"[name]",path:S("dist/static/[name]-manifest.json")}),this.uglifyjs=new w({cache:!0,parallel:!0})):"dev"===this.mode?(this.dllReference=P("dist/static")&&new s.DllReferencePlugin({manifest:require(S("dist/static/vendor-manifest.json"))}),this.hotModuleReplacement=new s.HotModuleReplacementPlugin,this.forkTsChecker=this.useJslint&&q&&new a({reportFiles:["src/**/*.{ts,tsx,vue}"],tsconfig:S("tsconfig.json"),tslint:P("tslint.json")?S("tslint.json"):S(`../temp/configs/tslint-${b}.json`,1)}),this.friendlyErrors=new h,this.htmlTags=P("dist/static")&&new u({append:!1,publicPath:"/",tags:["static/vendor.dll.js"]})):(this.buildNotifier=new t({suppressSuccess:!0,suppressWarning:!0,title:E.build}),this.bundleAnalyzer=this.useAnalyze&&new n({analyzerPort:9090}),this.compression=this.useCompress&&new r({test:/\.(css|js)$/,threshold:10240}),this.htmlTags=this.usePolyfill&&new u({append:!1,publicPath:!1,tags:["https://cdn.polyfill.io/v2/polyfill.min.js"]}),this.lodash=new d,this.miniCssExtract=new p({filename:`css/[name].bundle${this.useHash?".[contenthash:4]":""}.css`}))}clean(...e){return new l({cleanOnceBeforeBuildPatterns:e.map(e=>S(`dist/${e}`))})}html(){const e=j();return e.map(s=>{const i={chunks:["manifest","vendor","index"],chunksSortMode:"manual",favicon:S("src/assets/img/favicon.ico"),filename:`${s}.html`,minify:"dev"!==this.mode&&{collapseWhitespace:!0,removeComments:!0},template:S(`src${e.length>1?`/pages/${s}`:""}/index.html`)};return e.length>1&&Object.assign(i,{chunks:["manifest","vendor","common",s]}),new o(i)})}getPlugin(){let e=[];return(e="dll"===this.mode?[this.define,this.defineDllEnv,this.dll,this.bar,this.uglifyjs,this.clean("static")]:"dev"===this.mode?[this.define,this.dllReference,this.hotModuleReplacement,this.bar,this.forkTsChecker,this.friendlyErrors,this.spritesmith,this.stylelint,this.vueLoader,...this.html(),this.htmlTags]:[this.define,this.bar,this.buildNotifier,this.bundleAnalyzer,this.compression,this.hardSource,this.lodash,this.miniCssExtract,this.spritesmith,this.stylelint,this.vueLoader,this.clean(this.mode),...this.html(),this.htmlTags]).filter(Boolean)}};