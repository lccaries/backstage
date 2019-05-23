import {
    Home,
    Login,
    Cashi,
    Business,
    Category,
    NotFound,
    Archives,
    Promotion
 } from '../views'
 
export const mainRoutes = [{
     pathname: '/login',
     component: Login
 },{
    pathname: '/404',
    component: NotFound
}]

export const adminRoutes = [{
    pathname: '/admin/home',
    component: Home
},{
    pathname: '/admin/archives',
    component: Archives
},{
    pathname: '/admin/category',
    component: Category
},{
    pathname: '/admin/promotion',
    component: Promotion
},{
    pathname: '/admin/business',
    component: Business
},{
    pathname: '/admin/cashi',
    component: Cashi
}]