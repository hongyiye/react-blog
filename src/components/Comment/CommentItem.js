import React from 'react';
import ReplayItem from './ReplayItem';

class CommentItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div className='CommentItem'>
                <div className="item-left">
                    <div className="user-head">
                        <img src={this.props.rowData.image} className="head-img"/>
                    </div>
                </div>
                <div className="item-right">
                    <div className="right-top">
                        <div className="user-name">{this.props.rowData.nickName}</div>
                        <div className="operation">
                            <div className="praise">赞{this.props.rowData.praiseCount}</div>
                            <div className="more">...</div>
                        </div>
                    </div>
                    <div className="right-middle">{this.props.rowData.pubDate_} 320楼</div>
                    <div className="commnet-content">{this.props.rowData.content_}</div>
                    <div className="replay-wrap">
                    {this.props.rowData.commentList.map(function(replayData){
                        return <ReplayItem key={replayData.commentId} replayData={replayData}></ReplayItem>;
                    })}
                        
                    </div>
                </div>
              </div>
        );
    }
}

export default CommentItem;