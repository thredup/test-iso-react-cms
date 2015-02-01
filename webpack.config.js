var webpack = require('webpack');

var definePlugin = new webpack.DefinePlugin({
  IS_CLIENT: "true"
});

config = {
    entry: [
        "./client.js"
    ],
    output: {
        path: __dirname + "/build/",
        filename: "bundle.js",
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'jsx-loader?insertPragma=React.DOM&harmony', exclude: /node_modules/ }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};

module.exports = config