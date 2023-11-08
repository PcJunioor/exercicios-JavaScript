const modoDev = process.env.NODE_ENV !== 'production' //se for diferente de production mododev = true
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production', // se modoDev for V recebe 'development'
    entry: './src/principal.js', // ponto de entrada do webpack
    output:{
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: "./public",
        port: 9000
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module:{
        rules: [{
            test: /\.s?[ac]ss$/, //expressão que resolve os tipos css, scss e sass
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader', // add CSS na DOM injetando a tag <style> (conflita com o de cima)
                'css-loader', // interpreta @import, url()...
                'sass-loader',
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/, //expressão de grupo que pegar os tipos(png|svg|jpg|gif)
            use: ['file-loader']
        }]
    }
}