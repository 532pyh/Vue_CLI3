function load(component) {
    return () => import(/* webpackChunkName: "[request]" */ `views/${component}`)
}

const routes = [
    {
        path: '/',
        name: 'home',
        component: load('Home'),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/pyh',
        name: 'pyh',
        component: load('pyh'),
        meta: {
            title: '首页'
        }
    },
    {
        path: '*',
        redirect: {
            path: '/'
        }
    }
];
export default routes;
