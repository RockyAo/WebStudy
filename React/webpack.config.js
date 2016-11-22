/**
 * Created by RockyAo on 2016/11/22.
 */

var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
//常用路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH,'app');
var BUILD_PATH = path.resolve(ROOT_PATH,'build');

module.exports = {

  entry:{
      app:path.resolve(APP_PATH,'app.jsx')
  },
  output:{
      path:BUILD_PATH,
      filename:'bundle.js'
  },
  //开启dev sourcemap
  devtool:'eval-source-map',
  //开启webpack dev server
  devServer:{
      historyApiFallback:true,
      hot:true,
      inline:true,
      progress:true
  },

  module:{
      //配置preLoaders,将eslint添加进入
      preLoaders:[
          {
             test:/\.jsx?$/,
             loaders:['eslint'],
             include:APP_PATH
          }
      ],
      loaders:[
          {
              test:/\.jsx?$/,
              loaders:['babel'],
              include:APP_PATH
          }
      ]
  },
  plugins:[
      new HtmlwebpackPlugin({
          title:'My first react app'
      })
  ],

  resolve:{
      extensions:['','.js','.jsx']
  },

}


