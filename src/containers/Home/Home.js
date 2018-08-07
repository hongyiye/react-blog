import React from 'react';
import { HomeCarousel, HomePullToRefresh } from '../index.js';
import { Head } from '../../components/index';
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'Home',
        }
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