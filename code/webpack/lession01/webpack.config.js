let path = require('path');

module.exports = {
    entry : {
        main : './client/src/test/index.js'
    },
    output : {
        filename : 'bundle.js',
        path : path.join(__dirname,'./client/dist')
    },
    module : {
        rules : [{
            test : /\.(jpg|jpeg|png|gif|bmp)$/,
            use : {
                loader : 'file-loader'
            }
        }]
    },
    mode : "production",  // production || development ||  none
}