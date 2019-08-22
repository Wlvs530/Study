let path = require('path');

module.exports = {
    entry : {
        main : './client/src/js/test/index.js'
    },
    output : {
        filename : 'bundle.js',
        path : path.join(__dirname,'./client/dist/js')
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
    mode : "production",  // production || development ||  none
}