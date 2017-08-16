import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

// Components For Routes
import Sources from './components/Sources.vue'
import News from './components/News.vue'
import About from './components/About.vue'
import View from './components/View.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes: [
        { path: '/', component: Sources },
        { path: '/news/:id', component: News },
        { path: '/about', component: About },
        { path: '/show/:cat/:url', name: 'show', component: View }
    ]
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})