<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3" v-for="item in list">
        <router-link :to="'/news/'+item.link">
          <div class="card">
            <img class="card-img-top" :src="item.img" alt="item.title">
            <div class="card-body">
                <h4 class="card-title">{{ item.title }}</h4>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          title: 'ABC News',
          link: 'abc-news-au',
          img: 'http://mobile.abc.net.au/cm/cb/4355924/News+iOS+120x120/data.png'
        },
        {
          title: 'BBC News',
          link: 'bbc-news',
          img: 'http://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/1.2.0/apple-touch-icon.png'
        },
        {
          title: 'ABC News (AU)',
          link: 'abc-news-au',
          img: 'http://mobile.abc.net.au/cm/cb/4355924/News+iOS+120x120/data.png'
        },
        {
          title: 'ABC News (AU)',
          link: 'abc-news-au',
          img: 'http://mobile.abc.net.au/cm/cb/4355924/News+iOS+120x120/data.png'
        }
      ]
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>

</style>
