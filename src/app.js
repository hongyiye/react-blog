import './static/sass/app.scss';
import './static/js/iconfont.js';//图标

import React from 'react';
import ReactDOM from 'react-dom';
import RouterMap from './router/router.js';


ReactDOM.render(//render方法将模板语言转换为HTML语言，并插入指定的dom//Provider组件吧传入的props.store设为context,从而所有的子组件都能获取到context即store
	<RouterMap/>,
	document.getElementById('root')
);