<template>
  <ReturnButton/>
  <div class="container">
    <h1 class="text-center m-3">My Favorites</h1>
    <div class="text-center mb-3">
      <button type="button" class="btn btn-dark" @click="refresh">Refresh</button>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-sm-6 col-md-4 col-lg-3 mb-4" v-for="character in favorites" :key="character.id">
        <CharacterCard :character="character" />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useCharacterStore } from '@/stores/useFilterStore';
import CharacterCard from '@/components/CharacterCard.vue';
import ReturnButton from '@/components/ReturnButton.vue';

export default {
  name: 'MyFavorites',
  components: {
    CharacterCard,
    ReturnButton
  },
  setup() {
    const characterStore = useCharacterStore();

    onMounted(() => {
      characterStore.loadFavorites();
    });

    const refresh = () => {
      window.location.reload();
    }
    return {
      favorites: characterStore.favorites,
      refresh
    };
  },
};
</script>

<style scoped></style>