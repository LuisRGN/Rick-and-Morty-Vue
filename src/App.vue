<script>
 import MyNavbar from "./components/MyNavbar.vue"

 export default {
  name: "App",
  components:{
    MyNavbar
  }
 }
</script>

<template>
 <div>
  <MyNavbar/>
  <router-view />
 </div>
</template>

<style scoped>

</style>
