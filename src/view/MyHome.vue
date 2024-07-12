<!-- src/view/MyHome.vue -->
<template>
  <div>
    <h1>Home Page</h1>
    <MyComponente/>
  </div>
</template>

<script>
import MyComponente from '@/components/MyComponente.vue';

export default {
  name: 'MyHome',
  components: {
    MyComponente
  }
}
</script>

<style scoped>
/* Estilos específicos para la vista Home */
</style>
