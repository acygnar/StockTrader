 <template>
   <div class="card border-success">
  <h5 class="card-header">{{ this.stock.name }} ({{this.stock.price}})</h5>
  <div class="card-body">
    <form>
  <div class="row">
    <div class="col">
      <input v-model.number="orderQuantity" type="number" class="form-control" placeholder="Quantity">
    </div>
    <div class="col">
    <button :disabled='orderQuantity<=0' type="button" class="btn btn-primary green" @click="buy">Buy</button>
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
       props:['stock'],
       data(){
         return{
           orderQuantity: 0,
         }
       },
       methods: {
        buy(){
          const order ={
            orderId: this.stock.id,
            name: this.stock.name,
            price: this.stock.price,
            quantity: this.orderQuantity,
            }
              const findId = this.$store.state.order.find(element => element.orderId == order.orderId);
      if(findId){
        findId.quantity += order.quantity
        this.$store.dispatch('buy',order)
      }
      else{
            this.$store.state.order.push(order)
            this.$store.dispatch('buy',order)
      }
      this.orderQuantity = 0
        }
  }
}
</script>

<style scoped>
.card{
    flex-basis: 48%;
    margin-bottom: 2%;
}
.green{
    background-color: #28a745 !important;
    border: #28a745 !important;
}
</style>