const path = require('path');

module.exports = {
    entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 3333
    },
    module: {
        rules: [
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true,
                      disable: true,
                    },
                  },
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}
