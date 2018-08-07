import React from 'react';
import { NavBar, Icon, Popover } from 'antd-mobile';

//导航图标数据
const Item = Popover.Item;

const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;

class Head extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'Head',
            title: '紅一葉の小站'
        }
    }
    render(){
        return(
            <NavBar
            mode="light"
            onLeftClick={() => this.props.history.goBack()}
            icon={<Icon type="left"/>}
            rightContent={[
                <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                <Popover key="3"
                    mask
                    overlayClassName="fortest"
                    overlayStyle={{color: 'currentColor'}}
                    visible={false}
                    overlay={[
                        (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-send="logId">Scan</Item>),
                        (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>My Qrcode</Item>),
                        (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                            <span style={{ marginRight: 5 }}>Help</span>
                        </Item>),
                    ]}
                    align={{
                        overflow: { adjustY: 0, adjustX: 0 },
                        offset: [-10, 0],
                      }}
                >
                <div style={{
                height: '100%',
                padding: '0 15px',
                marginRight: '-15px',
                display: 'flex',
                alignItems: 'center',
                }}
                >
                <Icon key="1" type="icon-menu" />
                </div>
                </Popover>
            ]}
            >{this.props.title}</NavBar>
        );
    }
}

export default Head;