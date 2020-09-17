<template>
        <div class="wrapper">
                 <app-stock v-for="stock in stocks" :key="stock.id" :stock='stock'></app-stock>
        </div>
</template>

<script>
import Stock from '../components/Stock.vue'
export default {
    data(){
        return{
           stocks: this.$store.state.stocks,
        }
    },
    components:{
        appStock : Stock
    }
}
</script>

<style scoped>
.wrapper{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
</style>