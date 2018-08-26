import './static/sass/app.scss';
import './static/js/iconfont.js';//图标

import axios from 'axios';
import qs from 'qs';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RouterMap from './router/router.js';

//设置请求的初始值
axios.defaults.baseURL = 'http://120.86.70.43:9090/cmapi/';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.timeout = 50000;

axios.interceptors.request.use((cfg) => {

  
	const config = cfg;

	if (config.method === 'post') {
	config.data = qs.stringify(config.data);
	}
	
	return config;
  }, (error) => {
	Toast.info('参数格式错误', 1);
	return Promise.reject(error);
  });


const blogReducer = (state,action) => {
	if(!state){
		return {
			menuOpen: false
		}
	}

	switch (action.type){
		case 'MENU_OPEN_CHANGE':
			return {...state, menuOpen: action.menuOpen}
		default:
			return state
	}
}

const store = createStore(blogReducer);

ReactDOM.render(//render方法将模板语言转换为HTML语言，并插入指定的dom//Provider组件吧传入的props.store设为context,从而所有的子组件都能获取到context即store
	<Provider store={store}>
		<RouterMap/>
	</Provider>,
	document.getElementById('root')
);