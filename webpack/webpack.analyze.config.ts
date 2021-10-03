import webpack from "webpack";
import webpackMerge from "webpack-merge";
import BundleAnalyzerPlugin from "webpack-bundle-analyzer";

import prodConf from "./webpack.prod.config";

const analyzeWebpackConfig: webpack.Configuration = webpackMerge(prodConf, {
    plugins: [
        new BundleAnalyzerPlugin.BundleAnalyzerPlugin(),
        ...prodConf.plugins,
    ]
} as webpack.Configuration);

export default analyzeWebpackConfig;