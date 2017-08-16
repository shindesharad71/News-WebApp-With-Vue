<template>
  <div class="container">
		<div class="loader text-center" v-show="loading">
				<h3><i class="fa fa-3x fa-spinner fa-spin"></i> Loading...</h3>
		</div>
    <div class="row">
      <div class="col-sm-3 arrange" v-for="news in collection">
				<router-link :to="{ name: 'show', params: { cat: $route.params.id, url: news.url }}">
          <div class="card border-dark mb-3">
						<img class="card-img-top" :src="news.urlToImage" alt="news.title">
            <div class="card-body">	
							<h5 class="card-title">{{ news.title }}</h5>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
		return {
			loading: true,
			collection: []
		}
	},
  created () {
    axios.get('https://newsapi.org/v1/articles', {
    params: {
			source: this.$route.params.id,
			apiKey: 'API Key' // Add NewsAPI.org API Key Here
    }
		})
		.then((response) => {
			this.collection = response.data.articles;
			this.loading = false;
		})
		.catch((error) => {
			console.log(error);
		});
  }
}
</script>

<style scoped>
a {
	text-decoration: none;
	color: #000;
}

.loader {
	margin-top: 250px;
	text-align: center;
	margin-bottom: 150px;
}
</style>
