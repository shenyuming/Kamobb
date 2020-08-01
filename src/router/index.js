import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "login",
            redirect: "/login",
            component: () => import("@/views/login"),
            meta: {
                title: "DiDiMarket",
                keepAlive: false
            },
        },
        {
            path: "/login",
            name: "login",
            component: () => import("@/views/login"),
            meta: {
                title: "DiDiMarket",
                keepAlive: true
            }
        },{
            path: "/home",
            name: "home",
            component: () => import("@/views/home"),
            meta: {
                title: "DiDiMarket",
                keepAlive: true
            }
        },
        {
            path: "/information",
            name: "information",
            component: () => import("@/views/information"),
            meta: {
                title: "DiDiMarket",
                keepAlive: true
            }
        },
        {
            path: "/manager",
            name: "管理员",
            component: () => import("@/views/manager"),
            meta: {
                title: "DiDiMarket",
                keepAlive: false
            },
            children: [
                {
                    path: "/manager/index",
                    name: "index",
                    component: () => import("@/views/manager/index"),
                    meta: {
                        title: "主页",
                        keepAlive: false
                    }
                }
            ]
        },
        {
            path: "/user",
            name: "用户",
            component: () => import("@/views/user"),
            meta: {
                title: "DiDiMarket",
                keepAlive: false
            },
            children: [
                {
                    path: "index",
                    name: "userIndex",
                    component: () => import("@/views/user/index"),
                    meta: {
                        title: "会员主页",
                        keepAlive: false
                    }
                }
            ]
        }
    ]

})
