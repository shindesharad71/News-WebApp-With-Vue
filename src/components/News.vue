<template>
  <div class="container">
    <div class="row">
			<div class="loader" v-show="loading">
				<i class="fa fa-2x fa-spinner fa-spin"></i>
			</div>
      <div class="col-sm-3 arrange" v-for="news in collection">
        <router-link :to="'/show/'+news.url">
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
		this.loading = false;
  }
}
</script>

<style scoped>
.arrange {
	margin-bottom: 40px; 
}

a {
	text-decoration: none;
	color: #000;
}

.loader {
	margin-top: 150px;
}
</style>
