<!-- src/view/MyHome.vue -->
<template>
  <div>
    <MyComponente/>
    <CharacterList/>
  </div>
</template>

<script>
import MyComponente from '@/components/MyComponente.vue';
import CharacterList from '@/components/CharacterList.vue'

export default {
  name: 'MyHome',
  components: {
    MyComponente,
    CharacterList
  }
}
</script>

<style scoped>
/* Estilos específicos para la vista Home */
</style>
