import React from 'react';
import axios from 'axios';
import { Button, ListView } from 'antd-mobile';
import CommentItem from './CommentItem';


const NUM_SECTIONS = 5;
const NUM_ROWS_PER_SECTION = 5;
let pageIndex = 0;

const dataBlobs = {};
let sectionIDs = [];
let rowIDs = [];
function genData(pIndex = 0) {
    for (let i = 0; i < NUM_SECTIONS; i++) {//获取数据，这里在页面中写死---NUM_SECTIONS加载多少页
      const ii = (pIndex * NUM_SECTIONS) + i;
      const sectionName = `Section ${ii}`;
      sectionIDs.push(sectionName);//sectionIDs保存所有数据的id
      dataBlobs[sectionName] = sectionName;//给数据源dataBlobs填充值
      rowIDs[ii] = [];
  
      for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {//每一页中的数据个数NUM_ROWS_PER_SECTION
        const rowName = `S${ii}, R${jj}`;//rowName='s1,r2';相当于第一页，第二项
        rowIDs[ii].push(rowName);
        dataBlobs[rowName] = rowName;
      }
    }
    sectionIDs = [...sectionIDs];
    rowIDs = [...rowIDs];
    console.log(dataBlobs);//存放页和项的数据
    console.log(sectionIDs);//存放页相关的数据
    console.log(rowIDs);//存放项相关的数据
}

function genListData(listData,pageNo){
    let listLen = listData.length;
    let sectionName = 'Section ' + pageNo;
    dataBlobs[sectionName] = sectionName;
    sectionIDs.push(sectionName);
    pageNo = +pageNo;
    rowIDs[pageNo] = [];
    for(let i=0; i<listLen; i++){
        dataBlobs[listData[i].viewId] = listData[i];
        rowIDs[pageNo].push(listData[i].viewId);
    }
    sectionIDs = [...sectionIDs];
    rowIDs = [...rowIDs];
    console.log(dataBlobs);//存放页和项的数据
    console.log(sectionIDs);//存放页相关的数据
    console.log(rowIDs);//存放项相关的数据
}

class Comment extends React.Component{
    constructor(props){
        super(props);
        const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];
        const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
        const dataSource = new ListView.DataSource({
            getRowData,
            getSectionHeaderData: getSectionData,
            rowHasChanged: (row1, row2) => row1 !== row2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });
        this.state = {
            height: document.documentElement.clientHeight,
            dataSource: dataSource,
            isLoading: false,
            hasMore: '1'
        }
        this.pageNo = 0;
        this.lastViewId = undefined;
    }

    componentDidMount(){
        // const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
        // const hei = document.documentElement.clientHeight;
        var that = this;
        axios({
            method: 'post',
            url: 'getViewList.json',
            data: {
                accountId: '1000174408',
                token: 'd49478f04b2f24a8ae30d2239e50e9fb4ce0ce7e153cbe00e466da427c62c133d16c3f559054846bb9b7350c630f63026411253dbea244fb9ea02524dcdccedd18bd63d6c86185b8a383638d6629be2d823cde92958bd4bef1396c4073077b87b6eb6494be1fe03f228aa36089d4ad223b57a142db12d603622a2bcf02a9c752e90ac83229f340a524c0c0ca51f073ca',
                articleId: '435',
                timestamp: new Date().getTime(),
                appKey: 'cairenhuiweixin',
                pageNum: this.pageNo,
                pageSize: 10
            }
          }).then(function(result){
            console.log('---------result--------------');
            console.log(result);
            genListData(result.data.viewList,that.pageNo);
            that.lastViewId = result.data.lastViewId;
            that.hasMore = result.data.hasMore;
            that.pageNo = that.pageNo+1;
            that.setState({
                dataSource: that.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs)
            });
        }).catch(error => {
            //超时之后在这里捕抓错误信息.
            if (error.response) {
                console.log('error.response')
                console.log(error.response);
            } else if (error.request) {
                console.log(error.request)
                console.log('error.request')
                if(error.request.readyState == 4 && error.request.status == 0){
                    //我在这里重新请求
                }
            } else {
                console.log('Error', error.message);
            }
            console.log(error.config);
        });

        // genData();
        // this.setState({
        //     dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs)
        // });
        
    }

    onEndReached(){
        console.log('isLoading:' + this.state.isLoading);
        console.log('onEndReached');
        var that = this;
        if(that.state.hasMore === '0'){
            return;
        }
        if(that.state.isLoading){
            return;
        }
        that.state.isLoading = true;
        
        axios({
            method: 'post',
            url: 'getViewList.json',
            data: {
                accountId: '1000174408',
                token: 'd49478f04b2f24a8ae30d2239e50e9fb4ce0ce7e153cbe00e466da427c62c133d16c3f559054846bb9b7350c630f63026411253dbea244fb9ea02524dcdccedd18bd63d6c86185b8a383638d6629be2d823cde92958bd4bef1396c4073077b87b6eb6494be1fe03f228aa36089d4ad223b57a142db12d603622a2bcf02a9c752e90ac83229f340a524c0c0ca51f073ca',
                articleId: '435',
                timestamp: new Date().getTime(),
                appKey: 'cairenhuiweixin',
                pageNum: this.pageNo,
                lastViewId: this.lastViewId,
                pageSize: 10
            }
          }).then(function(result){
            console.log('---------result--------------');
            console.log(result);
            genListData(result.data.viewList,that.pageNo);
            that.lastViewId = result.data.lastViewId;
            that.hasMore = result.data.hasMore;
            that.pageNo = that.pageNo+1;
            that.setState({
                dataSource: that.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs)
            });
            that.state.isLoading = false;
        }).catch(error => {
            //超时之后在这里捕抓错误信息.
            that.state.isLoading = false;
            if (error.response) {
                console.log('error.response')
                console.log(error.response);
            } else if (error.request) {
                console.log(error.request)
                console.log('error.request')
                if(error.request.readyState == 4 && error.request.status == 0){
                    //我在这里重新请求
                }
            } else {
                console.log('Error', error.message);
            }
            console.log(error.config);
        });
    }


    render(){

        const row = (rowData, sectionID, rowID) => {//用来渲染每一列的数据
            return (
                <CommentItem key={rowID} rowData={rowData}></CommentItem>
            );
        };

        return(
            <div className="Comment">
                <ListView
                ref={el => this.lv = el}
                dataSource={this.state.dataSource}
                renderHeader={() => <span>全部评论</span>}
                renderFooter={() => (<div style={{padding: 30,textAlign: 'center'}}>
                    {this.state.isLoading?'正在加载...':'加载完毕'}
                </div>)}
                scrollRenderAheadDistance={500}
                style={{
                    height: this.state.height
                }}
                renderRow={row}
                onEndReached={() => this.onEndReached()}
                >
                </ListView>
            </div>
        );
    }
}

export default Comment;