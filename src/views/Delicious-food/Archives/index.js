import React, { Component } from 'react'
import { Card,Button,Table,Tag } from 'antd'
import { getArchives } from '../../../requests'
import Item from 'antd/lib/list/Item';
const dataSources = {
    id: '产品编号',
    number: 'id',
    price: '价格/元',
    name: '产品名',
    category: '类别'
}
  
export default class Archives extends Component {
    constructor() {
        super()
        this.state={
            dataSource: [],
            columns: [],
            total:0
        }
    }
    createColumn = (column) => {
        return column.map(item => {
            if(item==="price"){
                return ({
                    title: dataSources[item],
                    key: item,
                    render: (text) => {
                        return (<Tag color={text.price>500 ? "#f50" : "#87d068"}>{text.price}</Tag>)
                    }
                })
            }
            return {
                title: dataSources[item],
                dataIndex: item,
                key: item
            }
        })
    }
    getData = () =>{
        getArchives()
        .then(resp => {
            const column = Object.keys(resp.list[0])
            const columns = this.createColumn(column)
           
            this.setState({
                total: resp.total,
                dataSource: resp.list,
                columns
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
            pagination={{
                total: this.state.total,
                showQuickJumper: true
            }}
            />
            </Card>
        )
    }
}
