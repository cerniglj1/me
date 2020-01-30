import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import home from './components/home.vue'
import users from './components/users.vue'
import error from './components/error.vue'
import projects from './components/projects.vue'
import hobbies from './components/hobbies.vue'
import contact from './components/contact.vue'
Vue.use(VueRouter)
Vue.config.productionTip = false


// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
    { path: '/', name: "", component: home },
    { path: '/home', name: "home", component: home },
    { path: '/users', name: "users", component: users },
    { path: '/projects', name: "projects", component: projects },
    { path: '/hobbies', name: "hobbies", component: hobbies },
    { path: '/contact', name: "contact", component: contact },
    { path: '/*', name: "error", component: error }
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