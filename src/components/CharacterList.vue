<template>
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-4" v-for="character in characters" :key="character.id">
          <div class="card mb-4">
            <img :src="character.image" class="card-img-top" :alt="character.name">
            <div class="card-body">
              <h5 class="card-title">{{ character.name }}</h5>
              <p class="card-text">Status: {{ character.status }}</p>
              <p class="card-text">Species: {{ character.species }}</p>
              <p class="card-text">Gender: {{ character.gender }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-evenly mt-4 p-4">
        <button class="btn btn-dark" @click="prevPage" :disabled="!hasPrev">Previous</button>
        <button class="btn btn-dark" @click="nextPage" :disabled="!hasNext">Next</button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  export default {
    name: 'CharacterList',
    setup() {
      const characters = ref([]);
      const currentPage = ref(1);
      const hasNext = ref(false);
      const hasPrev = ref(false);
  
      const fetchCharacters = async (page) => {
        try {
          const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
          characters.value = response.data.results;
          hasNext.value = !!response.data.info.next;
          hasPrev.value = !!response.data.info.prev;
        } catch (error) {
          console.error('Error fetching characters:', error);
        }
      };
  
      const nextPage = () => {
        if (hasNext.value) {
          currentPage.value++;
          fetchCharacters(currentPage.value);
        }
      };
  
      const prevPage = () => {
        if (hasPrev.value) {
          currentPage.value--;
          fetchCharacters(currentPage.value);
        }
      };
  
      onMounted(() => fetchCharacters(currentPage.value));
  
      return {
        characters,
        nextPage,
        prevPage,
        hasNext,
        hasPrev
      };
    }
  };
  </script>
  
  <style scoped>
  .card-img-top {
    width: 100%;
    height: auto;
  }
  </style>
  
  