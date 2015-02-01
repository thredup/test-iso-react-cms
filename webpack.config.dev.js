var webpack = require('webpack');

var definePlugin = new webpack.DefinePlugin({
  IS_CLIENT: "true"
});

config = {
    entry: [
        'webpack-dev-server/client?http://localhost:3001',
        'webpack/hot/dev-server',
        "./client.js"
    ],
    output: {
        path: __dirname + "/build/",
        filename: "bundle.js",
        publicPath: 'http://localhost:3001/build/'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'react-hot!jsx-loader?insertPragma=React.DOM&harmony', exclude: /node_modules/ }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};

if (process.env.NODE_ENV === "development") {
  config.devtool = 'eval' // This is not as dirty as it looks. It just generates source maps without being crazy slow.
}

module.exports = config