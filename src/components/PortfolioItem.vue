 <template>
   <div class="card border-info">
  <h5 class="card-header blue">{{ this.portfolioItem.name }} <span>({{this.portfolioItem.price}}) Quantity: {{ this.portfolioItem.quantity }}</span></h5>
  <div class="card-body">
    <form>
  <div class="row">
    <div class="col">
      <input v-model.number="sellQuantity" type="number" class="form-control" placeholder="Quantity">
    </div>
    <div class="col">
          <button :disabled='sellQuantity<=0' type="button" class="btn btn-primary green" @click="sell">Sell</button>
    </div>
  </div>
</form>
  </div>
</div>
</template>
<script>
// import { mapGetters } from 'vuex'
//  import { mapActions } from 'vuex'
// import { mapMutations, mapActions } from 'vuex'
// import { mapState } from 'vuex'
export default {
       props:['portfolioItem'],
       data(){
         return{
           sellQuantity: 0
         }
       },
       methods: {
               sell(){
                  const order ={
                  orderId: this.portfolioItem.orderId,
                  name: this.portfolioItem.name,
                  price: this.portfolioItem.price,
                  quantity: this.sellQuantity
            }
              const findId = this.$store.state.order.find(element => element.orderId == order.orderId);
                  if(findId.quantity > order.quantity){
                    findId.quantity -= order.quantity
                    this.$store.dispatch('sell',order)
      }
      else{
            this.$store.state.order.splice(this.$store.state.order.indexOf(findId),1)
            this.$store.dispatch('sell',order)
      }
      this.sellQuantity = 0
        }
       }
}
</script>

<style scoped>
.card{
    flex-basis: 48%;
    margin-bottom: 2%;
}
.blue{
    color:#17a2b8!important
}

</style>