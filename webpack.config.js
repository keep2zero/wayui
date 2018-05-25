const  webpack = require("webpack");
const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});


module.exports =  {
   entry: ['./src/main.js'],

   output: {
     filename: "[name].js",
     path: path.resolve(__dirname, "./dist")
   },

   module: {
     rules: [
       {
         test: /\.js$/,
         loader: "babel-loader"
       },
       {
         test: /\.vue$/,
         loader: 'vue-loader'
       },
       {
         test: /\.less$/,
         loader: 'less-loader'
       },
       {
            test: /\.(s?)css$/,
            use: ['css-hot-loader'].concat(extractSass.extract({
                use: [

                  {
                    loader: "css-loader",
                    options: {
                      sourceMap: true
                    }
                  },
                  {
                    loader: "resolve-url-loader"
                  },
                  {
                    loader: "sass-loader",
                    options: {
                      sourceMap: true
                    }
                  }
                ],
                // use style-loader in development
                fallback: "style-loader"
            }))
        },

        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          use: [{loader: "file-loader"}]
        }
     ]
   },


   plugins: [
     new HtmlWebpackPlugin({
     title: "恒大Vue UI",
     template: "src/index.html",
     filename: "index.html"
   }),
   new webpack.HotModuleReplacementPlugin(),
   new CleanWebpackPlugin([path.resolve(__dirname, "dist")]),
   extractSass
  ],

   resolve: {
     extensions: [".js", ".vue"],
     alias: {
       "vue$": "vue/dist/vue.esm.js",
       "@": path.resolve(__dirname, "src")
     }
   },

   ////////////////////////
   devServer: {
     contentBase: path.resolve(__dirname, "dist"),
     compress: true,
     host: "0.0.0.0",
     port: 9000,
     hot: true,
     watchContentBase: true
   }
}
