const{browserslist:s}=require("../package"),{AbsPath:e,DataType:t,IsEmptyArray:l,IsEmptyObject:r,IsExist:u}=require("../util/setting"),i=u("brucerc.js")?require(e("brucerc.js")):{};if(t(i,"object")&&Object.keys(i).length)for(const s in i){const e=i[s];(!e||l(e)||r(e))&&delete i[s]}module.exports=Object.assign({alias:{},browserList:s,errorCb:null,eslintIgnores:[],eslintRules:{},frame:"default",openPath:"",proxy:{},publicPathProd:"",publicPathTest:"",style:"scss",stylelintIgnores:[],stylelintRules:{},successCb:null,uploadOpts:null,useAssetsRelPath:!1,useTs:!1},i);