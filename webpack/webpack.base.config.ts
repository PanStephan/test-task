import webpack from "webpack";
import path from "path";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";

delete process.env.TS_NODE_PROJECT

const config: webpack.Configuration = {
    context: path.resolve(__dirname, "../src"),
    watchOptions: {
        ignored: /node_modules/
    },
    target: "web",
    entry: "./index.tsx",
    output: {
        path: path.resolve(__dirname, "../build"),
        filename: "bundle.[contenthash].js"
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json"],
        fallback: { "util": false },
        plugins: [new TsconfigPathsPlugin() as never]
    }
};

export default config;