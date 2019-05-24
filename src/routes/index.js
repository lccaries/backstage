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
    title: '首页',
    icon: 'home'
},{
    pathname:'food',
    title: '美食部',
    icon: 'meh',
    children:[
        {
            pathname: '/admin/archives',
            component: Archives,
            title: '菜品档案',
            icon: 'snippets'
        },{
            pathname: '/admin/category',
            component: Category,
            title: '菜品分类',
            icon: 'snippets'
        }
    ]
},{
    pathname: '/admin/promotion',
    component: Promotion,
    title: '促销',
    icon: 'account-book'
},{
    pathname: 'form',
    title: '报表',
    icon: 'database',
    children: [{
        pathname: '/admin/business',
        component: Business,
        title: '营业统计',
        icon: 'snippets'
    },{
        pathname: '/admin/cashi',
        component: Cashi,
        title: '收银流水',
        icon: 'snippets'
    }]
},{
    pathname: '/admin/Settings',
    component: Settings,
    title: '设置',
    icon: 'setting'
}]