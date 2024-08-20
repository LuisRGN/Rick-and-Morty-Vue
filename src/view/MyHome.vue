<!-- src/view/MyHome.vue -->
<template>
  <div class="container mt-2 my-5 text-center">
    <img :src="rm" alt="rm" class="img-fluid">
    <div class="row align-items-center">
      <div class="col-md-3 mb-2 mb-md-0">
        <SearchName/>
      </div>
      <div class="col-12 col-md-9">
        <div class="row">
          <div class="col-4">
            <MyComponente/>
          </div>
          <div class="col-4">
            <FilterForStatus/> 
          </div>
          <div class="col-4">
            <FilterForSpecie/>
          </div>
        </div>
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
