import {
    Home,
    Login,
    Cashi,
    Business,
    Category,
    Settings,
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
    component: Home,
    title: '首页'
},{
    pathname:'food',
    title: '美食部',
    children:[
        {
            pathname: '/admin/archives',
            component: Archives,
            title: '菜品档案'
        },{
            pathname: '/admin/category',
            component: Category,
            title: '菜品分类'
        }
    ]
},{
    pathname: '/admin/promotion',
    component: Promotion,
    title: '促销'
},{
    pathname: 'form',
    title: '报表',
    children: [{
        pathname: '/admin/business',
        component: Business,
        title: '营业统计'
    },{
        pathname: '/admin/cashi',
        component: Cashi,
        title: '收银流水'
    }]
},{
    pathname: '/admin/Settings',
    component: Settings,
    title: '设置'
}]