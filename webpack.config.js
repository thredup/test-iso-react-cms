module.exports = {
    entry: [
        "./client.js"
    ],
    output: {
        path: __dirname,
        filename: "public/javascripts/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'jsx-loader?insertPragma=React.DOM&harmony' }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};