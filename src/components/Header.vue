<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/" class="navbar-brand">Stock trader</router-link>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <router-link tag="li" class="nav-item" active-class="active" to="/portfolio" exact><a class="nav-link">Portfolio</a></router-link>
     <router-link tag="li" class="nav-item" active-class="active" to="/stocks" exact><a class="nav-link">Stocks</a></router-link>
    </ul>
    <ul class="navbar-nav navbar-right">
     <li class="nav-item">
        <a class="nav-link" href="#" tabindex="-1" aria-disabled="true" @click="endDay">End day</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Save & Load
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" @click='save' href="#">Save data</a>
          <a class="dropdown-item" @click='load' href="#">Load data</a>
        </div>
      </li>
      <li class="nav-item">
        <span class="nav-link">Founds: ${{ founds }}</span>
      </li>
    </ul>
  </div>
</nav>
</template>
<script>
import axios from 'axios';
export default {
  data(){
    return{
      resultArray :[]
    }
  },
  methods:{
    save(){
      const data = {
        order: this.$store.state.order,
        founds : this.$store.state.founds,
        stocks : this.$store.state.stocks,
      }
      axios.put(`https://traderstockvue.firebaseio.com/trader.json`, data)
    },
    load(){
      axios.get(`https://traderstockvue.firebaseio.com/trader.json`)
      .then(response => {
         let resultArray = response.data
         this.$store.dispatch('load',resultArray)
      })
    },
    endDay(){
      this.$store.state.stocks.forEach(stock => { stock.price = Math.floor(stock.price * (1 + (Math.random() - 0.5)))
      });
      this.$store.state.order.forEach(item => { item.price = Math.floor(item.price * (1 + (Math.random() - 0.5)))
      });
    }
  },
  computed:{
    founds(){
      return this.$store.state.founds
    }
  },
}
</script>