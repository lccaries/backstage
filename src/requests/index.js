import axios from 'axios'
import { message } from 'antd';

const isDev = process.env.NODE_ENV==='development'
const ajax1 = axios.create({
    baseURL: isDev? 'http://rap2api.taobao.org/app/mock/162789' :''
})

ajax1.interceptors.request.use(config => {
    config.data= Object.assign({},config.data,{
        foo: "dada",
        authToken: 'adadad'
    })
    return config
})
ajax1.interceptors.response.use(resp => {
    if(resp.data.code===200){
        return resp.data.data
    }else{
        //处理全局错误
        message.error(resp.data.errMsg)
    }
})


export const getArchives = (offset=0,limited=10) => {
    return ajax1.post('/api/v1/archives',{offset,limited})
}