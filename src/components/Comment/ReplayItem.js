import React from 'react';

class ReplayItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className="ReplayItem">
                <span className="replay-username">{this.props.replayData.nickName}：</span>
                <span className="replay-content">
                    {this.props.replayData.content_}
                </span>
            </div>
        );
    }
}

export default ReplayItem;