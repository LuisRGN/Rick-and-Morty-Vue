<!-- src/view/MyHome.vue -->
<template>
  <div class="container mt-2">
    <div class="row">
      <div class="col-md-3">
        <MyComponente/>
      </div>
      <div class="col-md-3">
       <FilterForStatus/> 
      </div>
    </div>
    <CharacterList/>
  </div>
</template>

<script>
import MyComponente from '@/components/MyComponente.vue';
import CharacterList from '@/components/CharacterList.vue';
import FilterForStatus from '@/components/FilterForStatus.vue';

export default {
  name: 'MyHome',
  components: {
    MyComponente,
    CharacterList,
    FilterForStatus
  }
}
</script>

<style scoped>
/* Estilos específicos para la vista Home */
</style>
