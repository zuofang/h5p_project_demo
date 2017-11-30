// 入口页配置文件
const path=require('path');
const publicPath=path.resolve(__dirname,'../app/js/page');

module.exports={
    login:path.resolve(publicPath,'./login.js')
};