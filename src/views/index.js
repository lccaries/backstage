import Loadable from 'react-loadable';
import { Loading } from '../components';
// import Home from './Home'
// import Login from './Login'
// import NotFound from './NotFound'
// import Promotion from './Promotion'
// import { Archives,Category } from './Delicious-food'
// import { Business,Cashi } from './Report-form'
// console.log(Loading)
const Home = Loadable({
    loader: () => import('./Home'),
    loading: Loading
  })
const Login = Loadable({
    loader: () => import('./Login'),
    loading: Loading
})
const NotFound = Loadable({
    loader: () => import('./NotFound'),
    loading: Loading
})
const Promotion = Loadable({
    loader: () => import('./Promotion'),
    loading: Loading
})
const Category = Loadable({
    loader: () => import('./Delicious-food/Category'),
    loading: Loading
})
const Archives = Loadable({
    loader: () => import('./Delicious-food/Archives'),
    loading: Loading
})
const Business = Loadable({
    loader: () => import('./Report-form/Business'),
    loading: Loading
})
const Cashi = Loadable({
    loader: () => import('./Report-form/Cashi'),
    loading: Loading
})
const Settings = Loadable({
    loader: () => import('./Settings'),
    loading: Loading
})
export {
    Home,
    Login,
    Cashi,
    Settings,
    Business,
    Category,
    NotFound,
    Archives,
    Promotion
}