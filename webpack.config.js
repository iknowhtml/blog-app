module.exports = {
  entry: './src/index.jsx',

  output: {
    path: __dirname,
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  resolveLoader: {
    moduleExtensions: ['-loader'],
  },

  devServer: {
    contentBase: './',
    historyApiFallback: true,
    port: 8080,
  },
};
