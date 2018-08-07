import React from 'react';
import ReactDOM from 'react-dom';
import { Head } from '../../components/index';

class Article extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'Article',
            articleHeight: 500,
            articleDom: null
        }
    }

    componentDidMount(){
        let bodyHeight = document.documentElement.clientHeight;
        const hei = bodyHeight - ReactDOM.findDOMNode(this.articleDom).offsetTop;
        setTimeout(() => {
            this.setState({
                articleHeight: hei
            });
        },0);
    }

    render(){
        return(
            <div className="Article">
                <Head {...this.props} title="文章详情页面"></Head>
                <div className="article-wrap" style={{height: this.state.articleHeight}} ref={(articleDom) => this.articleDom = articleDom }>
                    <div className="article-detail">
                        <h3 className="article-title">作为一个设计师,如果遭到质疑你是否能恪守自己的原则</h3>
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
                        <div className="article-about">简介：曾经有站长找我求助，他说他不知道该怎么办，自己做出来的网站，不仅没有得到大家的认可，反而让大家给他开了一个评判大会。他自己认为已经是做的最好的，却遭受大家无情的</div>
                        <div className="article-content">
                            曾经有站长找我求助，他说他不知道该怎么办，自己做出来的网站，不仅没有得到大家的认可，反而让大家给他开了一个评判大会。他自己认为已经是做的最好的，却遭受大家无情的指责是“垃圾”作品。<br/><br/>
                            有的给他提出了意见，有的没有提意见，直接扔了两个字，“垃圾”。这没有谁对谁错，每个人的审美观点都不一样，我们能做的就是尊重别人。我相信他是认真对待网站的，我仔细看了他的设计，布局，颜色搭配都是他精心的设计。美和丑是没有一个评判标准的。我给他讲了一个关于建筑设计师的故事。<br/><br/>
                            300多年前，建筑设计师克里斯托·莱伊恩受命设计了英国温泽市政府大厅，他运用工程力学的知识，依据自己多年的实践经验，巧妙地设计了只用一根柱子支撑的大厅天花板。但是一年以后，在进行工程验收时，市政府权威人士却对此提出了质疑，并要求莱伊恩一定要再多加几根柱子。莱伊恩对自己的设计很自信，因此他非常苦恼：坚持自己的主张吧，他们肯定会另找人修改设计；不坚持吧，又有悖自己为人的准则。<br/><br/>
                            <img alt="" src="http://www.yangqq.com/d/file/news/life/2018-03-13/f66c3f82660caa444183b310a13c2f22.jpg"/><br/><br/>
                            就拿我自己来说吧，有时候会很矛盾，设计好的作品，不把它分享出来，会觉得待在自己电脑里面实在是没有意义。干脆就发布出去吧。我也害怕收到大家不好的评论，有些评论，可能说者无意，但是对于每一个用心的站长来说，都会受很深的影响，愤怒，恼羞。<br/><br/>
                            心态很重要，再来看莱伊恩，他当时顶着多大的压力呀。同样作为一个前端设计师，哪怕遭到质疑，我们也要像莱伊恩一样恪守自己的原则。<br/><br/>
                            <img alt="" src="http://www.yangqq.com/d/file/news/life/2018-03-13/89a5cb1d573b094ae3cc8afd7c11fffb.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Article;