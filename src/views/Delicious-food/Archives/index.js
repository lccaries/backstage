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
            loading: false
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
        getArchives()
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
                total: this.state.total,
                showQuickJumper: true
            }}
            />
            </Card>
        )
    }
}
