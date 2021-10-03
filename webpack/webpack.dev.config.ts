import webpack from "webpack";
import address from "address";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpackMerge from "webpack-merge";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

import conf from "./webpack.base.config";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const devWebpackConfig: webpack.Configuration = webpackMerge(conf, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        //TODO ref+.env variable
        contentBase: "./build",
        port: process.argv.find(el => el.includes("-p="))?.slice(3) ?? 3000,
        host: "0.0.0.0",
        hot: true,
        progress: false,
        clientLogLevel: "none",
        noInfo: true,
        onListening: (server: any) => {
            const port = server.listeningApp.address().port;
            //TODO chalk
            console.log(`Local http://localhost:${port}`);
            console.log(`On Your Network http://${address.ip()}:${port}`)
        },
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)?$/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
            {
              test: /\.(ttf|woff|woff2|eot)$/,
              loader: "file-loader",
              options: {
                  name: "fonts/[name][contenthash].[ext]"
              }
            },
            {
              test: /\.(png|jpe?g|gif)$/i,
              loader: "file-loader",
              options: {
                  name: "images/[name][contenthash].[ext]"
              }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "assets/index.html",
        }),
        new MiniCssExtractPlugin({ filename: "[name].css" }),
        new ReactRefreshWebpackPlugin()
    ]
} as webpack.Configuration);

export default devWebpackConfig