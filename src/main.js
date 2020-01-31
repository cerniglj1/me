import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Home from './components/Home.vue'
import Error404 from './components/Error404.vue'
import Projects from './components/Projects.vue'
import Hobbies from './components/Hobbies.vue'
import Contact from './components/Contact.vue'
Vue.use(VueRouter)
Vue.config.productionTip = false


// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
    { path: '/', name: "", component: Home },
    { path: '/Home', name: "Home", component: Home },
    { path: '/Projects', name: "Projects", component: Projects },
    { path: '/Hobbies', name: "Hobbies", component: Hobbies },
    { path: '/Contact', name: "Contact", component: Contact },
    { path: '/*', name: "Error404", component: Error404 }
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