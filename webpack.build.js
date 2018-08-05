var HtmlWebpackPlugin = require('html-webpack-plugin');//自动生成html文件的插件
const ExtractTextPlugin = require('extract-text-webpack-plugin');//
const CleanWebpackPlugin = require('clean-webpack-plugin');//用来清除旧生产文件的插件
const CopyWebpackPlugin = require('copy-webpack-plugin');//用来拷贝文件

const path = require('path');
const pxtorem = require('postcss-pxtorem');

module.exports = {
	entry: {
		'app': path.join(__dirname,'./src/app.js')
	},
	output: {
		filename: '[name].[hash].js',
		path: path.join(__dirname,'./dist'),
		// publicPath: './' // 静态资源文件引用时的路径，加在静态资源的前面
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new CopyWebpackPlugin([{//编译生产环境时把静态资源拷贝
            from: __dirname + '/src/static/js',
            to: __dirname + '/dist/static/js'
		}]),
		new CopyWebpackPlugin([{//编译生产环境时把静态资源拷贝
            from: __dirname + '/src/static/img',
            to: __dirname + '/dist/static/img'
        }]),
		new HtmlWebpackPlugin({
		template: './src/index.html',//以这个文件为模板，生成html文件,这个文件里会导入上面输出的js文件
		filename: 'index.html',
		minify: {
			collapseWhitespace: false//文件最小化，去掉html文件里的空格
		},
		hash: true//文件名加上哈希吗，防止浏览器缓存
		}),
		// new ExtractTextPlugin('app.css')
		new ExtractTextPlugin({
			filename: '[name].[hash].css',
			disable: false
		})
	],
	module: {
		rules: [
			{//module模块加载规则，如果以.css结尾的文件则用下面这两个插件去加载
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					//resolve-url-loader may be chained before sass-loader if necessary
					use: ['css-loader']
				})
			},
			{
				test: /\.scss/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					//resolve-url-loader may be chained before sass-loader if necessary
					use: [
					{
						loader: 'css-loader',
						options: {
							minimize: true,
						}
					},
					{
						loader: 'postcss-loader',
						options: {
						  ident: 'postcss',
						  plugins: [
							  require('autoprefixer')({broswer: ['Android >= 4.0','iOS 7']}),
									pxtorem({
									  rootValue: 75,
									  propWhiteList: [],
									})
						  ]
						}
					},
					'sass-loader',
				]
				})
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
							outputPath: './static/img'
						}
					}
				]
			},
			{ 	
				test: /\.woff2?$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: '[name].[ext]',
							outputPath: './static/fonts'
						}
					}
				]
			},
			{ 	
				test: /\.(ttf|eot)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: './static/fonts'
						}
					}
				]
			},
		]
	}
}

// {
// 	test: /\.(jpe?g|png|gif|svg)$/i,
// 	use: [
// 		{
// 			loader: 'file-loader',
// 			options: {
// 				name: '[name].[ext]',
// 				outputPath: './static/'
// 			}
// 		}
// 	]
// },
// { test: /\.woff2?$/, loader: 'url-loader?limit=10000&name=[name].[ext]&outputPath=fonts/' },
// { test: /\.(ttf|eot)$/, loader: 'file-loader?name=[name].[ext]&outputPath=fonts/' },