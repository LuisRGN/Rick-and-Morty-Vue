<script>
 import MyNavbar from "./components/MyNavbar.vue"
 import ScrollToTopButton from "./components/ScrollToTopButton.vue"

 export default {
  name: "App",
  components:{
    MyNavbar,
    ScrollToTopButton
  }
 }
</script>

<template>
 <div>
  <MyNavbar/>
  <router-view />
  <ScrollToTopButton/>
 </div>
</template>

<style scoped>

</style>
