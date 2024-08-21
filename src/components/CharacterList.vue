<!-- src/components/CharacterList.vue -->
<template>
  <div>
    <div class="container mt-4" v-if="!characterNotFound && !loading">
      <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-3 mb-4" v-for="character in filteredCharacters" :key="character.id">
          <div class="card mb-4 custom-card-color custom-shadown">
            <router-link :to="{ name: 'characterdetail', params: { id: character.id } }">
              <img :src="character.image" :alt="character.name" class="card-img-top img-fluid">
            </router-link>
            <div class="card-body">
              <router-link :to="{ name: 'characterdetail', params: { id: character.id } }"
                class="link-offset-2 link-underline link-underline-opacity-0 text-black link-secondary">
                <h3>{{ character.name }}</h3>
              </router-link>
              <h6 class="card-text">Status: <span :class="colorTextStatus(character)">{{ character.status }}</span></h6>
              <h6 class="card-text">Species: <span :class="colorTextSpecies(character)">{{ character.species }}</span>
              </h6>
              <h6 class="card-text">Gender: <span :class="colorTextGender(character)">{{ character.gender }}</span></h6>
            </div>
          </div>
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

export default {
  name: 'CharacterList',
  components: {
    NotFound,
    MySpinner
  },
  setup() {
    const store = useCharacterStore();
    const status = {
      alive: 'status-alive',
      dead: 'status-dead',
      unknown: 'status-unknown'
    }
    const species = {
      alien: 'status-alien',
      human: 'status-human',
      mythologicalcreature: 'status-mythological',
      robot: 'status-robot',
      humanoid: 'status-humanoid',
      animal: 'status-animal',
      cronenberg: 'status-cronenberg',
      poopybutthole: 'status-poopybutthole',
      disease: 'status-disease',
      unknown: 'status-unknowns'
    }
    const gender = {
      male: 'status-male',
      female: 'status-female',
      genderless: 'status-genderless',
      unknown: 'status-unknownn'
    }

    const filteredCharacters = computed(() => store.filteredCharacters);

    const characterNotFound = computed(() => store.characterNotFound);

    const loading = computed(() => store.loading);

    const pure = ((value, options) => {
      return options[value]
    });

    const colorTextStatus = ((character) => {
      return pure(character.status.toLowerCase(), status)
    });

    const colorTextSpecies = ((character) => {
      const formatterSpecies = character.species.toLowerCase().replace(/\s+/g, '')
      return pure(formatterSpecies, species)
    });

    const colorTextGender = ((character) => {
      return pure(character.gender.toLowerCase(), gender)
    });

    const nextPage = () => store.nextPage();
    const prevPage = () => store.prevPage();

    onMounted(() => store.fetchCharacters());

    return {
      filteredCharacters,
      characterNotFound,
      loading,
      colorTextStatus,
      colorTextSpecies,
      colorTextGender,
      nextPage,
      prevPage,
      hasNext: computed(() => store.hasNext),
      hasPrev: computed(() => store.hasPrev),
    };
  }
};
</script>


<style scoped>
.card {
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.3s ease;
}
.card:hover{
  transform: scale(1.1);
  z-index: 9000;
}
.card-body {
  flex: 1;
}

.custom-shadown {
  box-shadow: 0 0.1rem 0.2rem #00000033, 0 0.1rem 0.5rem #0000004d, 0 0.2rem 1.5rem #00000066;
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
  color: #1ca71c;
}

.status-human {
  color: #0000ff98;
}

.status-mythological {
  color: #800080;
}

.status-robot {
  color: #565656;
}

.status-humanoid {
  color: #5a008e;
}

.status-animal {
  color: #785625;
}

.status-cronenberg {
  color: #870202;
}

.status-unknowns {
  color: grey;
}

.status-male {
  color: #2b0cb5;
}

.status-female {
  color: #be3c7d;
}

.status-genderless {
  color: #a15212;
}

.status-poopybutthole {
  color: #e66c6c75;
}

.status-disease {
  color: #967000c4;
}

.status-unknownn {
  color: grey;
}
</style>