import React from 'react'
import { HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import { render } from 'react-dom' 
import './index.less'
import App from './App'
import { mainRoutes } from './routes'
render(
    <Router>
        <Switch>
          <Route 
           path="/admin"
           render={(routerprops)=>{
               return <App {...routerprops}/>
           }}
          />
            {
                mainRoutes.map(item => {
                    return <Route path={item.pathname} key={item.pathname} component={item.component}/>
                })
            }
            <Redirect to="/admin" from='/' exact />
            <Redirect to='/404'/>
        </Switch>
    </Router>,
    document.querySelector("#root")
)