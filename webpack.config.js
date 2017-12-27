let path = require("path");

let config = {
    entry: path.resolve(__dirname, "src/app"),
    output: {
        path: path.resolve(__dirname, "src/app/dist"),
        filename:"bundle.js"
    },

    module: {
        loaders: [{
            test: /\.js?/,
            include: path.resolve(__dirname, "src/app"),
            loader: "babel-loader"
        }]
    }
}

module.exports = config;