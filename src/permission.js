import router from "@/router";
// 引入进度条
import NProgress from 'nprogress'
// 引入进度条样式
import 'nprogress/nprogress.css'
import {getToken} from "@/util/auth";
import store from "@/store";

const whiteList = ['/login', '/register', '/']

router.beforeEach(async (to, from, next) => {
    window.scrollTo(0, 0)
    NProgress.start()
    const hasToken = getToken()
    if (hasToken) {
        if (to.path === '/login') {
            next({path: '/'})
        }
        let hasMemberInfo = store.getters.userName
        if (hasMemberInfo) {
            NProgress.done()
            next()
        } else {
            let res = await store.dispatch('member/getMemberInfo')
            if (res.code !== 200) {
                await router.replace({path: '/login'})
            }
            next()
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next({path: '/login'})

            NProgress.done()
        }
    }
})

router.afterEach(() => {
    // finish progress bar
    NProgress.done()
})
