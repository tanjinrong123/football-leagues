const htmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
//const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
const webpack = require('webpack')
//压缩混淆
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: {
    main: './src/main.js',
    vendors: ['vue', 'vue-router', 'axios', 'vue-preview']
  },
  output: {
    // filename: 'build.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/', //按目录划分打包会导致文件找不到，所以设置这个
    filename: 'js/[name].[hash].js'

  },
  module: {
    rules: [
      {//处理ES6的js
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,

      },
      {
        test: /\.css$/,
        //loader:'style-loader!css-loader',
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })

      },
      {
        test: /\.(jpg|svg|png|gif)$/,
        loader: 'url-loader',
        //loader:'url-loader?limit=4096&name=[hash:8]-[name].[ext]',
        //图片会被解析成base64编码的二进制数据，设置限制。小图片编码，大图片还是按原格式加载
        //顺序是反过来的2!1
        //[name].[ext]内置提供的，原文件名.原格式,aa.img而不是默认转成hash值的img
        //   hash值是32位，为了不被后面的重名文件替换，在文件名前面加上hash值
        options: {
          limit: 4096,
          name: 'assets/[name].[ext]'
        }
      },
      {
        test: /\.(ttf|svg|eot|woffs|woff)$/, //处理字体图标
        loader: 'url-loader'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader!'
      },

      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  //mode:"development",
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    proxy:{
      '/api':{
        target:'http://localhost:5000',
        secure:false,
        changeOrigin:true
      }
    }
  },
  // mode:'none',
  plugins: [
    //配置所有插件，插件的执行顺序是依次执行的
    new htmlWebpackPlugin({    //新生成一个html页面的插件
      template: './src/index.html',   //指定模板文件路径，旧页面
      filename: 'index.html'  //指定内存中生成的新页面
    }),                //将src下的template属性描述的文件根据当前配置的output.path，将文件移动到该目录

    new ExtractTextPlugin('css/style.[contenthash:6].css'),
    //提取公共模块
    new webpack.optimize.CommonsChunkPlugin({
      //mainfest清单，记录使用者和第三方包的依赖关系
      names: ['vendors', 'mainfest']
    }),
    new UglifyJsPlugin(), //压缩代码
    //去除游览器页面的警告
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })

  ],
  resolve: {
    alias: { //修改vue导入时的包的路径
      'vue$': 'vue/dist/vue.js'
    }
  }

}
