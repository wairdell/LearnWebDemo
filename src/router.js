import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'navPage',
            component: () => import('./components/NavPage.vue')
        },
        {
            path: '/helloWorld/:msg',
            name: 'helloWorld',
            component: () => import('./components/HelloWorld.vue')
        },
        {
            path: '/retentionDemo',
            name: 'retentionDemo',
            component: () => import('./components/RetentionDemo.vue')
        },
        {
            path: '/displayDemo',
            name: 'displayDemo',
            component: () => import('./components/DisplayDemo.vue')
        },
        {
            path: '/childDiffTypeOfDemo',
            name: 'childDiffTypeOfDemo',
            component: () => import('./components/ChildDiffTypeOfDemo.vue')
        }
    ]
});

export default router