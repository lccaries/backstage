import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import logo from './logo.png'
import './Frame.less'
import { withRouter } from 'react-router-dom'
const SubMenu =Menu.SubMenu;
const { Header, Content, Sider } = Layout;
@withRouter
class Frame extends Component {
    onMenuItem = (item) => {
        this.props.history.push(item.key)
    }
    render() {
        return (
            <Layout style={{minHeight: '100%'}}>
                <Header className="header lw-header">
                    <div className="lw-logo" >
                      <img src={logo} alt="LWLCC"/>
                    </div>
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        selectedKeys={[this.props.location.pathname]}
                        defaultOpenKeys={['sub1']}
                        onClick={this.onMenuItem}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        {
                            this.props.menus.adminRoutes.map((item) => { 
                               if(item.pathname==='food'){
                                   return (
                                       <SubMenu
                                       key={item.pathname}
                                       title={
                                           <span>
                                               <Icon type={item.icon} theme="twoTone"/>
                                               {item.title} 
                                           </span>
                                       }
                                       >
                                        {
                                            item.children.map(route => {
                                                return (<Menu.Item 
                                                    key={route.pathname}
                                                    >
                                                    <Icon type={route.icon} theme="twoTone"/>
                                                    {route.title}
                                                    </Menu.Item>)
                                            })
                                        } 
                                       </SubMenu>
                                   )
                               }
                               if(item.pathname==='form'){
                                return (
                                    <SubMenu 
                                    key={item.pathname}
                                    title={
                                        <span>
                                            <Icon type={item.icon} theme="twoTone"/>
                                            {item.title} 
                                        </span>
                                    }
                                    >
                                        {
                                            item.children.map(route => {
                                                return (<Menu.Item 
                                                    key={route.pathname}
                                                    >
                                                    <Icon type={route.icon} theme="twoTone"/>
                                                    {route.title}
                                                    </Menu.Item>)
                                            })
                                        }
                                    </SubMenu>
                                )
                            }
                            return (
                                <Menu.Item
                                key={item.pathname}
                                >
                                <Icon type={item.icon} theme="twoTone"/>
                                {item.title}
                                </Menu.Item>
                            )
                            })
                        }             
                    </Menu>
                    </Sider>
                    <Layout style={{ padding: '16px' }}>
                    <Content 
                        style={{
                        background: '#fff',
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                        }}
                    >
                        {this.props.children}
                    </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}
export default Frame