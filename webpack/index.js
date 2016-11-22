var text = require('./hello');
console.log(text);
//无配置文件时写法
//require('style!css!./index.css');
//有配置文件写法
require('./index.css');
document.body.appendChild(document.createElement('div'));