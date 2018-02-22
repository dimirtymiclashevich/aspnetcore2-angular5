var path = require('path');
var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin'); 

module.exports = {
    entry: {
        'polyfills': './Client/polyfills.ts',
        'app': './Client/main.ts'
    },
    output: {
        path: path.resolve(__dirname, './wwwroot/dist'),     
        publicPath: '/dist/',
        filename: "[name].js"      
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [   
            {
                test: /\.ts$/, 
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: { configFileName: path.resolve(__dirname, 'tsconfig.json') }
                    },
                    'angular2-template-loader'
                ]
            }, {
                test: /\.html$/,
                loader: 'html-loader'
            }, {
                test: /\.css$/,
                include: path.resolve(__dirname, 'Client/app'),
                loader: 'raw-loader'
            }
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core/,
            path.resolve(__dirname, 'Client'), 
            {} 
        ),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'polyfills']
        }),
        new UglifyJSPlugin()
    ]
}