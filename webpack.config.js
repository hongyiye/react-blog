var HtmlWebpackPlugin = require('html-webpack-plugin');//自动生成html文件的插件

const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		'app': path.join(__dirname,'./src/app.js')
	},
	output: {
		filename: '[name].[hash].js',
		path: path.join(__dirname,'./dist'),
		//publicPath: './' // 静态资源文件引用时的路径，加在静态资源的前面
	},
	plugins: [
		new HtmlWebpackPlugin({
		template: './src/index.html',//以这个文件为模板，生成html文件,这个文件里会导入上面输出的js文件
		filename: 'index.html',
		minify: {
			collapseWhitespace: false//文件最小化，去掉html文件里的空格
		},
		hash: true//文件名加上哈希吗，防止浏览器缓存
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		rules: [
			{//module模块加载规则，如果以.css结尾的文件则用下面这两个插件去加载
				test: /\.css$/,
				use: ['style-loader','css-loader?sourceMap']
			},
			{
				test: /\.scss/,
				use: ['style-loader','css-loader?sourceMap', 'sass-loader?sourceMap']

			},
			{//对js和jsx文件使用babel转换语法
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_models/
			},
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				exclude: /node_models/
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'img/'
						}
					}
				]
			},
			{ test: /\.woff2?$/, loader: 'url-loader?limit=10000&name=[name].[ext]&outputPath=fonts/' },
			{ test: /\.(ttf|eot)$/, loader: 'file-loader?name=[name].[ext]&outputPath=fonts/' },
		]
	},
	devtool: 'inline-source-map',//热加载模式
    devServer: {
        contentBase: './',
        inline: true,
        port: 9000,
        open: false
    }
}
