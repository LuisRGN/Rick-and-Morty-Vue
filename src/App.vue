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
 <div id="app">
  <MyNavbar/>
  <main>
     <router-view />
  </main>
  <ScrollToTopButton/>
  <MyFooter/>
 </div>
</template>

<style>
html, body {
  height: 100%;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
footer {
  padding: 1rem 0;
}
</style>
