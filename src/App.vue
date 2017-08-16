<template>
  <div>
    <header>
      <app-nav></app-nav>
    </header>
    
        <app-sources></app-sources>
      
    <app-footer></app-footer>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Sources from './components/Sources.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    'app-nav': Nav,
    'app-sources': Sources,
    'app-footer': Footer
  }
}
</script>