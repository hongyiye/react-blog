import React from 'react';

class Mycard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'Mycard'
        }
    }

    gotoBlog(){//跳转到博客主页
        this.props.history.push('/Home');
    }
    gotoArticle(){//跳转文章详情页
        this.props.history.push('/Article');
    }

    render(){
        return(
            <div className="Mycard">
                <div className="menu-icon-wrap">
                    <svg className="menu-icon">
                        <use xlinkHref="#icon-menu"></use>
                    </svg>
                </div>
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

export default Mycard;