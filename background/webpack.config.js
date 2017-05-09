let path = require('path');
let webpack = require('webpack');

module.exports={
    entry:'./src/index.ts',
    output:{
        filename:'[name].js',
        path:__dirname + '/dist'
    },
    devtool:'source-map',
    resolve:{
        extensions:['.ts','.js']
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                loader:'ts-loader'
            },
            {
                enforce:'pre',
                test:/\.js$/,
                loader:'source-map-loader'
            }
        ]
    }
}