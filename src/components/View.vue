<template>
  <div>
      <div class="container-fluid">
          <router-link :to="'/news/'+$route.params.cat" tag="a" class="btn btn-primary">
          <i class="fa fa-arrow-left" aria-hidden="true"></i> Back To News List</router-link> <a class="btn btn-info" v-show="loading"><i class="fa fa-spinner fa-spin"></i> Loading...</a>
      </div>
      <div class="container-fluid topspace">
          <div class="embed-responsive embed-responsive-21by9">
            <iframe onload="offLoader" class="embed-responsive-item" :src="$route.params.url"></iframe>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: true
    }
  },
  methods: {
    offLoader() {
      return this.loading = false;
    }
  }
}
</script>


<style scoped>
.topspace {
  margin-top: 40px;
}

iframe {
  width: 100%;
  height: 100%;
}
</style>
