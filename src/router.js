import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/home.js';
import About from './pages/about.js';
import NotFound from './pages/404.js';

Vue.use(VueRouter);

export const links = [
    { name: '(P+) Home', to: '/plugin' },
    { name: '(P+) About', to: '/plugin/about' }
];

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/plugin',
            component: Home
        },
        {
            path: '/plugin/about',
            component: About
        },
        {
            path: '/plugin/404',
            component: NotFound
        },
        {
            path: '*',
            redirect: '/plugin/404'
        }
    ]
});
