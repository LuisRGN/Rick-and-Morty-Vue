<!-- src/view/MyHome.vue -->
<template>
  <div class="container mt-2 my-5 text-center">
    <img :src="rm" alt="rm" class="img-fluid mb-4">
    <div class="row align-items-center">
      <div class="col-md-3">
        <SearchName/>
      </div>
      <div class="col-md-3">
        <MyComponente/>
      </div>
      <div class="col-md-3">
       <FilterForStatus/> 
      </div>
      <div class="col-md-3">
        <FilterForSpecie/>
      </div>
    </div>
    <div class="mt-3">
      <ClearFilters/>
    </div>
    <CharacterList/>
  </div>
</template>

<script>
import MyComponente from '@/components/MyComponente.vue';
import CharacterList from '@/components/CharacterList.vue';
import FilterForStatus from '@/components/FilterForStatus.vue';
import FilterForSpecie from '@/components/FilterForSpecie.vue';
import SearchName from '@/components/SearchName.vue';
import ClearFilters from '@/components/ClearFilters.vue';
import rm from '@/assets/img/rm.png'

export default {
  name: 'MyHome',
  components: {
    MyComponente,
    CharacterList,
    FilterForStatus,
    FilterForSpecie,
    SearchName,
    ClearFilters
  },
  setup(){
    return {
      rm
    }
  }
}
</script>

<style scoped>
/* Estilos específicos para la vista Home */
</style>
