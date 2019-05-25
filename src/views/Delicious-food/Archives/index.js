import React, { Component } from 'react'
import { Card,Button,Table,Tag } from 'antd'
import { getArchives } from '../../../requests'
import moment from 'moment'
const ButtonGroup = Button.Group;
//定义的table里面每一列的标题
const dataSources = {
    id: '产品编号',
    number: 'id',
    price: '价格/元',
    name: '产品名',
    category: '类别',
    createAt: '生产时间'
}
  
export default class Archives extends Component {
    constructor() {
        super()
        this.state={
            //第一行的标题项
            dataSource: [],
            //每行显示的数据
            columns: [],
            //总页码
            total:0, 
            //是否在请求数据 默认为false
            loading: false,
            //每次请求从第多少条开始 默认从0开始
            offset:0,
            //每次请求多少条
            limited: 10
        }
    }
    createColumn = (column) => {
        const columns = column.map(item => {
            if(item==="price"){
                return ({
                    title: dataSources[item],
                    key: item,
                    render: (text) => {
                        return (<Tag color={text.price>500 ? "#f50" : "#87d068"}>{text.price}</Tag>)
                    }
                })
            }
            if(item==="createAt"){
                return ({
                    title: dataSources[item],
                    key: item,
                    render: (text) => {
                        return moment(text.createAt).format('YYYY年MM月DD日 hh:mm:ss')
                    }
                })
            }
            return {
                title: dataSources[item],
                dataIndex: item,
                key: item
            }
        })
        //添加操作栏
        columns.push({
            title: '操作',
            key: "item",
            render: () => {
                return(
                    <ButtonGroup>
                        <Button type="primary">编辑</Button>
                        <Button type="danger">删除</Button>
                    </ButtonGroup>
                )
             }            
        })
        return columns
    }
    getData = () =>{
        //需要请求数据的时候把loading的状态改为true
        this.setState({
            loading: true
        })
        //把要请求的数据要求参数传给后端
        getArchives(this.state.offset,this.state.limited)
        .then(resp => {
            console.log(resp)
            const column = Object.keys(resp.list[0])
            const columns = this.createColumn(column)   
            this.setState({
                total: resp.total,
                dataSource: resp.list,
                columns
            })
        })
        .catch(err => {
            //处理错误
        })
        .finally(() =>{
            //请求数据结束之后改回loading的状态
            this.setState({
                loading: false
            })            
        })
    }
    //更改页数触发的事件
    onPageChange = (page,pagesize) => {
        this.setState({
            offset: pagesize*(page-1),
            limited:pagesize
            //当每次更改完页数之后数据要重新请求
        },() => {
            this.getData()
        })
    }
    //改变每页多少条触发的事件
    onSizeChange = (current,size) => {
        //在这里要和产品沟通的时候必须仔细核对需求 究竟回到首页还是当前页  如果是在当前页那么用户可能缺失了中间差值的页面
        this.setState({
            offset: 0,
            limited: size
            //当每次更改完页数之后数据要重新请求
        },() => {
            this.getData()
        })         
    }
    componentDidMount() {
        this.getData()
    } 
    render() {
        return (
            <Card 
            border='false'
            title="美食档案部"
             extra={<Button>导出Excel</Button>}>
            <Table
            rowKey= {(record)=> {
                return record.id
            }}
            dataSource={this.state.dataSource} 
            columns={this.state.columns} 
            loading={this.state.loading}
            pagination={{
                current: this.state.offset/this.state.limited+1,
                showSizeChanger:true,
                pageSizeOptions:['10', '15', '20'],
                total: this.state.total,
                showQuickJumper: true,
                onChange: this.onPageChange,
                onShowSizeChange: this.onSizeChange
            }}
            />
            </Card>
        )
    }
}
