import React from 'react';
import { Drawer } from 'antd-mobile';
import { connect } from 'react-redux';

class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'Menu',
            open: true
        }
    }

    componentWillMount(){
        //第一次初始化做隐藏
        this.props.onMenuOpenCHange(false);
    }

    onOpenCHange(){
        this.props.onMenuOpenCHange(!this.props.menuOpen);
        console.log('this.props.menuOpen:' + this.props.menuOpen);
    }

    render(){
        const sidebar = (
            <div className="menu-wrap">
                <div className="menu-top">
                    <div className="menu-list">
                        <div className="menu-item"><svg className="menu-icon"><use xlinkHref="#icon-user"></use></svg>首页</div>
                        <div className="menu-item"><svg className="menu-icon"><use xlinkHref="#icon-home-fill"></use></svg>用户入口</div>
                    </div>
                    <div className="menu-list">
                        <div className="menu-item">博客</div>
                        <div className="menu-item">文章</div>
                        <div className="menu-item">个人小站</div>
                        <div className="menu-item">紅葉次元</div>
                    </div>
                </div>
            </div>
        );
        return(
            <div className="Menu" style={{display: (this.props.menuOpen?'block':'none')}}>
                <Drawer
                    sidebar={sidebar}
                    open={this.props.menuOpen}
                    onOpenChange={() => this.onOpenCHange()}
                    position={'right'}
                    contentStyle={{display: 'none' }}
                    >
                    Click upper-left corner
                </Drawer>
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

Menu = connect(mapStateToProps,mapDispatchToProps)(Menu);

export default Menu;