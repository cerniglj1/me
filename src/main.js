import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import missing from './components/missing.vue';
import home from './components/home.vue';
import about from './components/about.vue';
import exp from './components/exp.vue';
import Snake from './components/Snake.vue';
import projects from './components/projects.vue';

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
        name: "Home",
        component: home,
        meta: {
            title: 'Home'
        }
    },
    {
        path: '/Home',
        name: "Home2",
        component: home,
        meta: {
            title: 'Home'
        }
    },
    {
        path: '/Experience',
        name: "Experience",
        component: exp,
        meta: {
            title: 'Experience'
        }
    },
    {
        path: '/AboutMe',
        name: "AboutMe",
        component: about,
        meta: {
            title: 'About Me'
        }
    },

    {
        path: '/Snake',
        name: "Snake",
        component: Snake,
        meta: {
            title: 'Snake'
        }
    }, {
        path: '/Projects',
        name: "Projects",
        component: projects,
        meta: {
            title: 'Projects'
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

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})
// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
new Vue({
    router: router,
    render: h => h(App),
}).$mount('#app')