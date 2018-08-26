import React from 'react';
import { Menu } from '../../components/index';
import { connect } from 'react-redux';

class Mycard extends React.Component{
    constructor(props){
        super(props);
        this.name = 'Mycard';
        this.state = {
            name: 'Mycard'
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

    gotoBlog(){//跳转到博客主页
        this.props.history.push('/Home');
    }
    gotoArticle(){//跳转文章详情页
        this.props.history.push('/Article');
    }

    menuIconClick(){
        this.props.onMenuOpenCHange(!this.props.menuOpen);
        console.log('this.props.menuOpen:' + this.props.menuOpen);
    }

    render(){
        return(
            <div className="Mycard">
                <a className="menu-icon-wrap" onClick={() => this.menuIconClick()}>
                    <svg className="menu-icon">
                        <use xlinkHref="#icon-menu"></use>
                    </svg>
                </a>
                <Menu></Menu>
                <div className="section-wrap">
                    <div className="section section1">
                        <div className="my-card">
                            <h1 className="name">紅一葉</h1>
                            <div className="brief">风に揺らいで ひらり舞い散る <br/>君の肩ごしに紅一葉</div>
                            <div className="enter-blog" onClick={() => this.gotoBlog()}>Enter Blog</div>
                        </div>
                        <div className="section-next">
                            <svg className="next-icon">
                                <use xlinkHref="#icon-down"></use>
                            </svg>
                        </div>
                    </div>
                    <div className="section section2">
                        <div className="title-wrap">
                            <div className="title">热门文章</div>
                        </div>
                        <p className="title-tip">
                        很想给你写封信,告诉你这里的天气.<br/>昨夜的那场电影,还有我的心情.
                        </p>
                        <div className="article-list">
                            <div className="article-item" onClick={() => this.gotoArticle()}>
                                <div className="article-head">
                                    <img className="article-img" src="./static/img/article-img-01.jpg"/>
                                </div>
                                <div className="article-content">
                                    <div className="article-title">逆水寒</div>
                                    <div className="article-date">2018年06月06日</div>
                                    <div className="article-brief">都是充话费送的天空，为什么逆水寒的就能这么厉害?emmmmmmmmmm</div>
                                    <div className="article-more" onClick={() => this.gotoArticle()}>阅读更多</div>
                                </div>
                            </div>
                            <div className="article-item" onClick={() => this.gotoArticle()}>
                                <div className="article-head">
                                    <img className="article-img" src="./static/img/article-img-01.jpg"/>
                                </div>
                                <div className="article-content">
                                    <div className="article-title">逆水寒</div>
                                    <div className="article-date">2018年06月06日</div>
                                    <div className="article-brief">都是充话费送的天空，为什么逆水寒的就能这么厉害?emmmmmmmmmm</div>
                                    <div className="article-more" onClick={() => this.gotoArticle()}>阅读更多</div>
                                </div>
                            </div>
                            <div className="article-item" onClick={() => this.gotoArticle()}>
                                <div className="article-head">
                                    <img className="article-img" src="./static/img/article-img-01.jpg"/>
                                </div>
                                <div className="article-content">
                                    <div className="article-title">逆水寒</div>
                                    <div className="article-date">2018年06月06日</div>
                                    <div className="article-brief">都是充话费送的天空，为什么逆水寒的就能这么厉害?emmmmmmmmmm</div>
                                    <div className="article-more" onClick={() => this.gotoArticle()}>阅读更多</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section section3">
                        <div className="about-wrap">
                            <div className="about-item">关于</div>
                            <div className="about-item">+友情链接</div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        menuOpen: state.menuOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onMenuOpenCHange: (menuOpen) => {
            dispatch({type: 'MENU_OPEN_CHANGE',menuOpen: menuOpen});
        }
    }
}

Mycard = connect(mapStateToProps,mapDispatchToProps)(Mycard);

export default Mycard;