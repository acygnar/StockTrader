<template>
    <div class="card" style="width: 80%;">
  <div class="card-body">
    <h5 class="card-title">Trade or View your Portfolio</h5>
    <p class="card-text">You may Save & Load your Data.</p>
    <p class="card-text">Click on 'End day' to begin a new Day!.</p>
    <hr>
    <p>Your Founds: ${{ founds }}</p>
  </div>
</div>
</template>
<script>
export default {
    computed:{
    founds(){
      return this.$store.state.founds
    }
  }
}
</script>