import React from 'react';
import { PullToRefresh } from 'antd-mobile';
import { HomeCarousel } from '../index.js';
//下拉刷新数据
function genData() {
    const dataArr = [];
    for (let i = 0; i < 20; i++) {
      dataArr.push(i);
    }
    return dataArr;
}

class HomePullToRefresh extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'HomePullToRefresh',
            refreshing: false,
            down: false,
            height: document.documentElement.clientHeight,
            data: [],
        }
    }
    componentDidMount() {
        // const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
        const hei = this.state.height;
        setTimeout(() => this.setState({
          height: hei,
          data: genData(),
        }), 0);
    }    
    render(){
        return(
            <PullToRefresh
                 damping={60}
                 ref={el => this.ptr = el}
                 style={{
                   height: this.state.height,
                   overflow: 'auto',
                 }}
                 indicator={this.state.down ? {} : { deactivate: '下拉可以刷新' }}
                 direction={this.state.down ? 'down' : 'up'}
                 refreshing={this.state.refreshing}
                 onRefresh={() => {
                   this.setState({ refreshing: true });
                   setTimeout(() => {
                     this.setState({ refreshing: false });
                   }, 1000);
                 }}
            >
                <HomeCarousel></HomeCarousel>
                {this.state.data.map(i => (
                    <div  key={i} className="blog-item">
                        <div className="blog-title">别让这些闹心的套路，毁了你的网页设计!</div>
                        <div className="blog-pics">
                            <img className="pic-item" src="./static/img/toppic01.jpg"/>
                        </div>
                        <div className="blogtext">
                            如图，要实现上图效果，我采用如下方法：1、首先在数据库模型，增加字段，分别是图片2，图片3。2、增加标签模板，用if，else if 来判断，输出。思路已打开，样式调用就可以多样化啦！... 
                        </div>
                        <div className="bloginfo">
                            <div className="bloginfo-item">
                                <svg className="svg-icon">
                                    <use xlinkHref="#icon-time-circle"></use>
                                </svg>
                                2018-7-31
                            </div>
                            <div className="bloginfo-item">
                                <svg className="svg-icon">
                                    <use xlinkHref="#icon-eye-fill"></use>
                                </svg>
                                34567已阅读
                            </div>
                            <div className="bloginfo-item">
                                <svg className="svg-icon">
                                    <use xlinkHref="#icon-heart-fill"></use>
                                </svg>
                                9999
                            </div>
                        </div>
                    </div>
                ))}
            </PullToRefresh>
        );
    }
}

export default HomePullToRefresh;