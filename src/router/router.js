//路由
import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';//BrowserRouter

import { Home, Article, Mycard } from '../containers/index.js';

export default class RouterMap extends React.Component{
    render(){
        return (
            <Router>
                <Switch>{/*BrowserRouter规定只有一个子节点，所以加上这个div*/}
                    {/*功能页面*/}
                    <Route exact path="/" component={Mycard}/>{/*给主页路径添加exact属性 若不添加则会匹配所有子路径导致所有的跳转都跳转到子路径去*/}
                    <Route exact path="/Home" component={Home}/>
                    <Route exact path="/Article" component={Article}/>
                    <Route exact path="/Mycard" component={Mycard}/>
                </Switch>
            </Router>
        );
    }
};

