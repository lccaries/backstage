import React, { Component } from 'react'
import { adminRoutes } from './routes'
import { Frame } from './components'
import { Route,Switch,Redirect } from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <Frame>
        <Switch >
          {
            adminRoutes.map(item => {
              console.log(item.pathname)
                if(item.pathname==="food"){
                  return item.children.map(route => {
                     console.log(route)
                      return (
                        <Route 
                          path={route.pathname} 
                          key={route.pathname}
                          exact={route.exact}
                          render={(routerprops)=>{
                            
                            return <route.component {...routerprops} /> 
                          }}
                      />)
                   })
                }
                if(item.pathname==="form"){
                  return item.children.map(route => {
                    console.log(route)
                    return (
                      <Route 
                        path={route.pathname} 
                        key={route.pathname}
                        exact={route.exact}
                        render={(routerprops)=>{
                          return <route.component {...routerprops} />
                        }}
                    />)
                 })               
                }
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
          
          <Redirect to={adminRoutes[0].pathname} from="/admin" exact />
          <Redirect to="/404" />
        </Switch>
      </Frame>
    )
  }
}
