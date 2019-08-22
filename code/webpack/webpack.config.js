let path = require('path');
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
            template : 'client/src/html/index.html'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns:['html','js']
        })
    ],
    mode : "production",  // production || development ||  none
}