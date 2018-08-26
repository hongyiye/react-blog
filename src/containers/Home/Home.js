import React from 'react';
import { HomeCarousel, HomePullToRefresh } from '../index.js';
import { Head } from '../../components/index';
class Home extends React.Component{
    constructor(props){
        super(props);
        this.name = 'Home';
        this.state = {
            name: 'Home',
        }
    }

    componentWillMount(){
		console.log('调用组件挂载前的生命周期函数componentWillMount:' + this.name);
		console.log(this);
	}
	componentDidMount(){
		console.log('调用组件挂载前的生命周期函数componentDidMount:' + this.name);
	}

	componentWillUpdate(){
		console.log('调用组件挂载前的生命周期函数componentWillUpdate:' + this.name);
	}
	componentDidUpdate(){
		console.log('调用组件挂载前的生命周期函数componentDidUpdate:' + this.name);
	}
	componentWillReceiveProps(){
		console.log('调用组件挂载前的生命周期函数componentWillReceiveProps:' + this.name);
	}
	componentWillUnmount(){
		console.log('调用组件挂载前的生命周期函数componentWillUnmount:' + this.name);
	}

    render(){
        return(
        <div className="home">
            <Head {...this.props} title="紅一葉の小站"></Head>
            <HomePullToRefresh {...this.props}></HomePullToRefresh>
        </div>
        );
    }
}

export default Home;