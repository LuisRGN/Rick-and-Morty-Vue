<script>
 import MyNavbar from "./components/MyNavbar.vue"
 import ScrollToTopButton from "./components/ScrollToTopButton.vue"
 import MyFooter from '@/components/MyFooter.vue'

 export default {
  name: "App",
  components:{
    MyNavbar,
    ScrollToTopButton,
    MyFooter
  }
 }
</script>

<template>
 <div>
  <MyNavbar/>
  <router-view />
  <ScrollToTopButton/>
  <MyFooter/>
 </div>
</template>

<style scoped>

</style>
