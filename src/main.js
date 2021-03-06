import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import missing from './components/missing.vue';
import home from './components/home.vue';
import AboutVue from './components/AboutVue.vue';
import ContactVue from './components/ContactVue.vue';

import Snake from './components/Snake.vue';
// import projects from './components/projects.vue';
import thankyou from './components/thankyou.vue';
import test from './components/test.vue';
// Vue.use(BootstrapVue)

Vue.use(VueRouter)
Vue.config.productionTip = false

// API URL ==  https://jamescerniglia.herokuapp.com/

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [{
        path: '/',
        name: "home",
        component: home,
        meta: {
            title: 'James Cerniglia | Software Engineer'
        }
    },
    {
        path: '/Home',
        name: "Home2",
        component: home,
        meta: {
            title: 'James Cerniglia | Software Engineer'
        }
    },

    {
        path: '/about',
        name: "about",
        component: AboutVue,
        meta: {
            title: 'About Me'
        }
    },
    {
        path: '/contact',
        name: "Contact",
        component: ContactVue,
        meta: {
            title: 'Contact'
        }
    },
    {
        path: '/Snake',
        name: "Snake",
        component: Snake,
        meta: {
            title: 'Snake'
        }
    },

    {
        path: '/test',
        name: "test",
        component: test,
        meta: {
            title: 'Test'
        }
    },
    // {
    //     path: '/Projects',
    //     name: "Projects",
    //     component: projects,
    //     meta: {
    //         title: 'Projects'
    //     }
    // },

    {
        path: '/thankyou',
        name: "thankyou",
        component: thankyou,
        params: {
            user_name: '',
            user_email: '',
            user_message: ''
        },
        meta: {
            title: 'Thank You'
        }
    },

    {
        path: '/*',
        name: "Error404",
        component: missing,
        meta: {
            title: 'Error 404'
        }
    }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'history',
    linkExactActiveClass: 'is-active',
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
new Vue({
    router: router,
    render: h => h(App),
}).$mount('#app')