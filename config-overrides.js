/* 
*@file config-overrides.js
*@author lcc (1278502327@qq.com)
*基于customzie和react-app-rewired的定制化配置文件
*/
//从customize-cra引入一些相关的方法
const { override,addLessLoader,fixBabelImports,addDecoratorsLegacy } =require('customize-cra')

module.exports = override(
    addLessLoader({
        javascriptEnabled: true
    }),
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        //英文要加载原生的less文件所以需要改为true
        style: true
      }),
    addDecoratorsLegacy()
)