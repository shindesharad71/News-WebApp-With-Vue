<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6" v-for="news in collection">
        <router-link :to="'/show/'+news.url">
          <div class="card border-primary mb-3">
            <div class="card-body">
							<div class="col-md-2">
								<img class="" :src="news.urlToImage" alt="news.title">
							</div>
							<div class="col-md-4">
								<h6 class="card-title">{{ news.title }}</h6>
								<p class="card-text">{{ news.title }}</p>
							</div>
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
			collection: []
		}
	},
  created () {
    axios.get('https://newsapi.org/v1/articles', {
    params: {
			source: this.$route.params.id,
			apiKey: '194d633ccf6846c98bfb420d693f2446' // NewsAPI.org API Key Here
    }
		})
		.then(function (response) {
			this.collection = response.data;
		})
		.catch(function (error) {
			console.log(error);
		});
  }
}
</script>
