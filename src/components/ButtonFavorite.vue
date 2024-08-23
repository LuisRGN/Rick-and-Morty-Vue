<template>
  <span @click="toggleFavorite" role="button" aria-label="Favorite">
    <img v-if="isFavorite" :src="starfull" alt="star" class="img-fluid" style="width: 4rem;">
    <img v-else :src="star" alt="star" class="img-fluid" style="width: 4rem;">
  </span>
</template>

<script>
import { computed } from 'vue';
import { useCharacterStore } from '@/stores/useFilterStore';
import star from '@/assets/img/star.svg'
import starfull from '@/assets/img/starfull.svg'

export default {

  name: 'ButtonFavorite',
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const characterStore = useCharacterStore();

    // Verificar si el personaje ya está en los favoritos
    const isFavorite = computed(() => {
      return characterStore.favorites.some(favorite => favorite.id === props.character.id);
    });

    // Alternar entre agregar o eliminar de los favoritos
    const toggleFavorite = () => {
      if (isFavorite.value) {
        characterStore.removeFromFavorites(props.character.id);
      } else {
        characterStore.addToFavorites(props.character);
      }
    };

    return {
      toggleFavorite,
      isFavorite,
      star,
      starfull
    };
  },
};
</script>

<style scoped>

</style>

  