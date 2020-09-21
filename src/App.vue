<template>
  <div>
     <app-header></app-header>
     <transition
                 mode="out-in"
                 name="slide-fade">
          <router-view/>
     </transition>
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
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .5s
}
.slide-fade-enter, .slide-fade-leave-to
{
  transform: translateY(-30px);
  opacity: 0;
}
div{
  margin:3% 8%;
}
</style>


