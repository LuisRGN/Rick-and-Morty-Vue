<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-4" v-for="character in characters" :key="character.id">
        <div class="card mb-4 custom-card-color">
          <img :src="character.image" class="card-img-top" :alt="character.name">
          <div class="card-body">
            <h3 class="card-title">{{ character.name }}</h3>
            <h6 class="card-text">Status: <span :class="{
              'status-alive': character.status === 'Alive',
              'status-dead': character.status === 'Dead',
              'status-unknown': character.status === 'unknown'
            }">{{ character.status }}</span></h6>
            <h6 class="card-text">Species: <span :class="{
              'status-alien': character.species === 'Alien',
              'status-human': character.species === 'Human',
              'status-mythological': character.species === 'Mythological Creature',
              'status-robot': character.species === 'Robot',
              'status-humanoid': character.species === 'Humanoid',
              'status-animal': character.species === 'Animal',
              'status-cronenberg': character.species === 'Cronenberg',
              'status-unknowns': character.species === 'unknown'
            }">{{ character.species }}</span></h6>
            <h6 class="card-text">Gender: <span :class="{
              'status-male': character.gender === 'Male',
              'status-female': character.gender === 'Female',
              'status-genderless': character.gender === 'Genderless',
              'status-unknownn': character.gender === 'unknown'
            }">{{ character.gender }}</span></h6>
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

.status-alive {
  color: green;
}

.status-dead {
  color: red;
}

.status-unknown {
  color: grey;
}

.custom-card-color {
  background-color: #93cca1;
}

.status-alien {
  color: #00FF00;
}

.status-human {
  color: #0000FF;
}

.status-mythological {
  color: #800080;
}

.status-robot {
  color: #737373;
}

.status-humanoid {
  color: #FFA500;
}

.status-animal {
  color: #A52A2A;
}

.status-cronenberg {
  color: #FF0000;
}

.status-unknowns {
  color: grey;
}

.status-male {
  color: #007bff;
}
.status-female {
  color: #ff69b4;
}

.status-genderless {
  color: #fd7e14;
}
.status-unknownn {
  color: grey;
}
</style>