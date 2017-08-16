import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

// Components For Routes
import Sources from './components/Sources.vue'
import News from './components/News.vue'
import Footer from './components/Footer.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes: [
        { path: '/', component: Sources },
        { path: '/news/:id', component: News },
        { path: '/footer', component: Footer }
    ]
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})