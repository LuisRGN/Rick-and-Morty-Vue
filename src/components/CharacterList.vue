<!-- src/components/CharacterList.vue -->
<template>
  <div>
    <div class="container mt-4" v-if="!characterNotFound && !loading">
      <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-3 mb-4" v-for="character in filteredCharacters" :key="character.id">
          <CharacterCard :character="character" />
        </div>
      </div>
      <div class="d-flex justify-content-evenly mt-4 p-4">
        <button class="btn btn-dark" @click="prevPage" :disabled="!hasPrev">Previous</button>
        <button class="btn btn-dark" @click="nextPage" :disabled="!hasNext">Next</button>
      </div>
    </div>
    <div v-if="!characterNotFound && loading">
      <MySpinner />
    </div>
    <div v-if="characterNotFound && !loading">
      <NotFound />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useCharacterStore } from '../stores/useFilterStore';
import NotFound from './NotFound.vue';
import MySpinner from './MySpinner.vue';
import CharacterCard from './CharacterCard.vue';


export default {
  name: 'CharacterList',
  components: {
    NotFound,
    MySpinner,
    CharacterCard,

  },
  setup() {
    const store = useCharacterStore();

    const filteredCharacters = computed(() => store.filteredCharacters);

    const characterNotFound = computed(() => store.characterNotFound);

    const loading = computed(() => store.loading);

    const nextPage = () => store.nextPage();
    const prevPage = () => store.prevPage();

    onMounted(() => store.fetchCharacters());

    return {
      filteredCharacters,
      characterNotFound,
      loading,
      nextPage,
      prevPage,
      hasNext: computed(() => store.hasNext),
      hasPrev: computed(() => store.hasPrev),
    };
  }
};
</script>


<style scoped></style>