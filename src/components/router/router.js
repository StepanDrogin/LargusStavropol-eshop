import Vue from 'vue'
import Router from 'vue-router'
import LapChevrolet from '../src/lap-chevrolet'
import LapDaewoo from '../src/lap-daewoo'
import LapLada from '../src/lap-lada'
import LapMainWrapper from '../../components/lap-main-wrapper'
import PageLayout from '../src/page-layout'
import LapCart from '../src/lap-cart'

Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'mainPage',
            component: LapMainWrapper
        },
        {
            path: '/catalog',
            name: 'PageLayout',
            props: true,
            component: PageLayout,
            children: [
                {
                    path: '/chevrolet',
                    name: 'chevrolet',
                    component: LapChevrolet,
                },
                {
                    path: '/daewoo',
                    name: 'daewoo',
                    component: LapDaewoo,
                },
                {
                    path: '/lada',
                    name: 'lada',
                    component: LapLada,
                },
                {
                    path: '/cart',
                    name: 'cart',
                    component: LapCart,
                    props: true
                }
            ]
        },

    ]
})

export default router;