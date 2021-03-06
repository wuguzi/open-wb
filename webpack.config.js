// webpack.config.js
var path = require("path");
var webpack = require('webpack');
var Clean = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
});
var CopyWebpackPlugin = require('copy-webpack-plugin');
var SwigWebpackPlugin = require('swig-webpack-plugin');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        fansGroup: './app/js/jsx/fansGroup.jsx',
        user: './app/js/jsx/user.jsx',
        hotGroup: './app/js/jsx/hotGroup.jsx',
        baseData: './app/js/jsx/baseData.jsx',
        guide: './app/js/jsx/guide.jsx',
        login: './app/js/jsx/login.jsx'
    },
    output: {
        publicPath: "http://127.0.0.1:9090/static/dist/",
        path: path.join(__dirname, 'app/js/'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', 'jsx', '.sass', '.css', '.png', '.jpg', '.woff', '.ttf', '.eot', '.svg'],
        root: __dirname
    },
    // 新添加的module属性
    module: {
        loaders: [
            // {
            //     test: /\.js?$/,
            //     loader: 'babel',
            //     exclude: /(node_modules|bower_components)/,
            //     query: {
            //         presets: ['es2015']
            //     }
            // },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['react', 'es2015']
                }
            },
            //使用link引用
            // {
            //     test: /\.css$/,
            //     loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            // },
            {
                test: /\.(css)$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.woff$/,
                loader: "url?limit=10000&minetype=application/font-woff"
            },
            {
                test: /\.ttf$/,
                loader: "file"
            },
            {
                test: /\.eot$/,
                loader: "file"
            },
            {
                test: /\.svg$/,
                loader: "file"
            }]
    },
    plugins: [
        commonsPlugin,
        //UglifyJsPlugin,
        // new Clean(['./app/js/', './dist/html/']),
        // new HtmlWebpackPlugin(
        //     {
        //         filename: '../html/star_result.html',
        //         template: './app/html/star_result.html', // 原始模块
        //         inject: 'body', // 放在body中  & eq: 'head'  放在head中
        //         chunks: ['common', 'star_result']
        //     }
        // ),
    ]
};



/*
用 webpack --config webpack.relase.js 指定另一个名字的配置文件
这个文件当中可以写不一样配置, 专门用于代码上线时的操作
*/
