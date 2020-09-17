<template>
<div class="wrapper">
    <app-portfolio-item v-for="portfolioItem in portfolioItems" :key="portfolioItem.id" :portfolioItem='portfolioItem'></app-portfolio-item>
</div>
</template>

<script>
import PortfolioItem from '../components/PortfolioItem.vue'
export default {
    components:{
        appPortfolioItem : PortfolioItem
    },
    computed:{
    portfolioItems(){
      return this.$store.state.order
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