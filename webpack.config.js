module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
     loaders: [{
       test: /.jsx?$/,
       loader: 'babel-loader',
       exclude: /node_modules/
     }, {
       test: /\.css$/,
       loader: "style-loader!css-loader"
     }, {
       test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
       loader: 'url-loader?limit=100000' }]
   },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
