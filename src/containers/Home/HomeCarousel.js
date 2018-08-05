import React from 'react';
import { Carousel } from 'antd-mobile';

class HomeCarousel extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Carousel
                autoplay={true}
                infinite
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}
            >
                <div>
                    <img src="./static/img/banner01.jpg" className="item-img"/>
                    <h3 className="banner-text">个人博客，属于我的小世界！</h3>
                </div>
                <div>
                    <img src="./static/img/banner02.jpg" className="item-img"/>
                    <h3 className="banner-text">个人博客，属于我的小世界！</h3>
                </div>
                <div>
                    <img src="./static/img/banner03.jpg" className="item-img"/>
                    <h3 className="banner-text">个人博客，属于我的小世界！</h3>
                </div>
            </Carousel>
        );
    }
}

export default HomeCarousel;