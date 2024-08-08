<template>
    <div class="from-group">
        <label for="species" class="form-label text-light">Filter by Species</label>
        <select id="species" v-model="selectSpecies" @change="updateSpeciesFilter" class="form-select custom-select">
            <option value="">All</option>
            <option value="Human">Human</option>
            <option value="Alien">Alien</option>
            <option value="Humanoid">Humanoid</option>
            <option value="Poopybutthole">Poopybutthole</option>
            <option value="Mythological Creature">Mythological Creature</option>
            <option value="Animal">Animal</option>
            <option value="Robot">Robot</option>
            <option value="Cronenberg">Cronenberg</option>
            <option value="Disease">Disease</option>
        </select>
    </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useCharacterStore } from '../stores/useFilterStore';

export default {
    name: 'FilterForSpecies',
    setup() {
        const store = useCharacterStore();
        const selectSpecies = ref(store.filters.species);

        const updateSpeciesFilter = () => {
            store.setSpeciesFilter(selectSpecies.value);
        };
        
        watch(() => store.filters.species, (newSpecies) => {
            selectSpecies.value = newSpecies;
        });

        return {
            selectSpecies,
            updateSpeciesFilter,
        };
    }
};
</script>

<style scoped>
.custom-select {
  background-color: #8f8f8f; /* Color de fondo personalizado */
  color: #ffffff; /* Color del texto personalizado */
}
.custom-select:focus {
  border-color: #93cca1; /* Color del borde cuando está enfocado */
  box-shadow: 0 0 0 0.2rem rgba(0, 77, 64, 0.25); /* Sombra cuando está enfocado */
}
</style>