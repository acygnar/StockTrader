<template>
  <div>
     <app-header></app-header>
          <router-view/>
   </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  components:{
    appHeader: Header,
  }
}
</script>

<style scoped>

div{
  margin:3% 8%;
}
</style>


