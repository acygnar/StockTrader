<template>
        <div class="wrapper">
                 <app-stock v-for="stock in stocks" :key="stock.id" :stock='stock'></app-stock>
        </div>
</template>

<script>
import Stock from '../components/Stock.vue'
export default {
    components:{
        appStock : Stock
    },
     computed:{
    stocks(){
      return this.$store.state.stocks
    }
  },
}
</script>

<style scoped>
.wrapper{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
</style>