import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Error404 from './components/Error404.vue'
import HomeVue from './components/HomeVue.vue'
import HobbiesVue from './components/HobbiesVue.vue'
import ProjectsVue from './components/ProjectsVue.vue'
import firebase from 'firebase'
import ContactVue from './components/ContactVue.vue'

// Vue.use(BootstrapVue)
const firebaseConfig = {
    apiKey: "AIzaSyBcDI1XiAFNdYdHMbVQoRZM_mzXRIX8cE0",
    authDomain: "website-da112.firebaseapp.com",
    databaseURL: "https://website-da112.firebaseio.com",
    projectId: "website-da112",
    storageBucket: "website-da112.appspot.com",
    messagingSenderId: "786469523609",
    appId: "1:786469523609:web:a6938677c24d6a46566808",
    measurementId: "G-TH50KE7LRV"
};
firebase.initializeApp(firebaseConfig);
Vue.use(VueRouter)
Vue.config.productionTip = false



// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
    { path: '/', name: "", component: HomeVue },
    { path: '/Home', name: "Home", component: HomeVue },
    { path: '/Projects', name: "Projects", component: ProjectsVue },
    { path: '/Hobbies', name: "Hobbies", component: HobbiesVue },
    { path: '/Contact', name: "Contact", component: ContactVue },
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