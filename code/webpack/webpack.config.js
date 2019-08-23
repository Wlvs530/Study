let path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry : {
        main : './client/src/js/test/index.js'
    },
    output : {
        filename : 'js/bundle.js',
        path : path.join(__dirname,'./client/dist')
    },
    mode : 'development',  // production || development ||  none
    devtool : 'cheap-module-eval-source-map',
    devServer : {
        contentBase : './client',
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
        }]
    },
    plugins : [
        new HtmlWebpackPlugin({
            title : 'WebApp',
            filename : 'index.html',
            template : path.join(__dirname,'client/src','index.html'),
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns:['*']
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}