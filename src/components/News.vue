<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-3 arrange" v-for="news in collection">
        <router-link :to="'/show/'+news.url">
          <div class="card border-primary">
						<img class="card-img-top" :src="news.urlToImage" alt="news.title">
            <div class="card-body">	
							<h6 class="card-title">{{ news.title }}</h6>
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
		.then((response) => {
			console.log(response.data.articles);
			return this.collection = response.data.articles;
		})
		.catch((error) => {
			console.log(error);
		});
  }
}
</script>

<style scoped>
.arrange {
	margin-bottom: 40px; 
}
</style>
