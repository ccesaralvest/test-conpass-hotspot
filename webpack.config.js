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
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}
