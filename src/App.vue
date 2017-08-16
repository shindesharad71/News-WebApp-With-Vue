<template>
  <div>
    <header>
      <app-nav></app-nav>
    </header>
    <transition name="fade">
      <router-view class="bottom"></router-view>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    'app-nav': Nav,
    'app-footer': Footer
  }
}
</script>

<style>
.bottom {
  margin-bottom: 40px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}

.card:hover {
  box-shadow: 2px 3px 2px #000;
}
</style>
