<script>
 import MyComponente from "./components/MyComponente.vue"
 import MyNavbar from "./components/MyNavbar.vue"

 export default {
  name: "App",
  components:{
    MyComponente,
    MyNavbar
  }
 }
</script>

<template>
 <div>
  <MyNavbar/>
  <MyComponente/>
 </div>
</template>

<style scoped>

</style>
