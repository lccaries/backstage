import React, { Component } from 'react'
import { Button } from 'antd'
import { adminRoutes } from './routes'
import { Route,Switch,Redirect } from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <div>
        APP<Button type='primary'>dadad</Button>
        <Switch>
          {
            adminRoutes.map(item => {
              return (
              <Route 
                path={item.pathname} 
                key={item.pathname}
                exact={item.exact}
                render={(routerprops)=>{
                  return <item.component {...routerprops} />
                }}
              />)
            })
          }
          <Redirect to={adminRoutes[0].pathname} from="/admin" exact/>
          <Redirect to="/404"/>
        </Switch>
      </div>
    )
  }
}
