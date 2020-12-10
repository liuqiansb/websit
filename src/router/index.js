import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [],
    scrollBehavior (to, from, savedPosition) {
        return new Promise((resolve) => {
            if (savedPosition) {
                resolve(savedPosition)
            } else {
                resolve({ x: 0, y: 0 })
            }
        })
    }
})

const importFile = (path) => {
    path = path === '/' ? '/home' : path
    const componentName = path
    // return ()=>import(`@/views${componentName}/index.vue`)
    return (resolve) => require([`@/views${componentName}/index.vue`], resolve)
}
export const getPaths = (data) => {
    const paths = []
    const findPaths = (items) => {
        items.forEach(item => {
            if (item.children && item.children.length) {
                item.children.forEach(({ url, title, id, children,parentId }) => {
                    if (url && !(children && children.length)) {
                        paths.push({
                            title: title,
                            value: url,
                            id: id,
                            parentId:parentId
                        })
                    }
                })
            }
        })
    }
    findPaths(data)

    return paths.map(({ value, title, id,parentId}) => ({
        path: value,
        component: importFile(value),
        meta: {
            id,
            title,
            parentId
        }
    }))
}

export const addRouters = (routes) => {
    router.addRoutes([
        ...routes,
        {
            path: '*',
            component: () => import('@/views/pages/404/index.vue'),
            meta: { title: '页面找不到' }
        },
        {
            path: '/',
            component: () => import('@/views/pages/home/index.vue'),
            meta: { title: '首页' }
        }
    ])
}

export default router
