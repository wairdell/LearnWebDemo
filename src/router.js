import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'navPage',
            component: () => import('./page/NavPage.vue')
        },
        {
            path: '/helloWorld/:msg',
            name: 'helloWorld',
            component: () => import('./page/HelloWorld.vue')
        },
        {
            path: '/retentionDemo',
            name: 'retentionDemo',
            component: () => import('./page/RetentionDemo.vue')
        },
        {
            path: '/displayDemo',
            name: 'displayDemo',
            component: () => import('./page/DisplayDemo.vue')
        },
        {
            path: '/childDiffTypeOfDemo',
            name: 'childDiffTypeOfDemo',
            component: () => import('./page/ChildDiffTypeOfDemo.vue')
        },
        {
            path: '/interactDemo',
            name: 'interactDemo',
            component: () => import('./page/InteractDemo.vue')
        },
        {
            path: '/interactEnterDemo',
            name: 'interactEnterDemo',
            component: () => import('./page/InteractEnterDemo.vue')
        },
    ]
});

export default router