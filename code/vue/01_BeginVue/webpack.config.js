let path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry : {
        main : './src/entry/main.js'
    },
    output : {
        filename : 'js/bundle.js',
        path : path.join(__dirname,'./dist')
    },
    mode : 'development',  // production || development ||  none
    devtool : 'cheap-module-eval-source-map',
    devServer : {
        contentBase : './dist',
        open : true,
        port : 80,
        hot: true,
        hotOnly : true
    },
    module : {
        rules : [{
            test : /\.(jpg|jpeg|png|gif|bmp)$/,
            use : {
                loader : 'url-loader',
                options : {
                    name : '[name].[ext]',
                    outputPath : 'img/',
                    limity : 204800,
                }
            }
        },{
            test : /\.css$/,
            use : [
                'style-loader',
                {
                    loader : 'css-loader',
                    options : {
                        importLoaders : 2,
                        // 指定样式只在模块内生效
                        modules:true,
                    }
                },
                'postcss-loader'
            ]
        },{
            test : /\.vue$/,
            use : ['vue-loader']
        }]
    },
    plugins : [
        new HtmlWebpackPlugin({
            title : 'WebApp',
            filename : 'index.html',
            template : path.join(__dirname,'src','index.html'),
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns:['*']
        }),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin()        
    ]
}