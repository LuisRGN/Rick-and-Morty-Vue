<template>
    <div class="form-group">
        <label for="species" class="form-label text-light">Filter by Species</label>
        <select id="species" v-model="selectSpecies" @change="updateSpeciesFilter" class="form-select custom-select">
            <option v-for="option in speciesOptions" :key="option.value" :value="option.value">
                {{ option.label }}
            </option>
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

        // Lista de opciones para el filtro de especie
        const speciesOptions = [
            { value: '', label: 'All' },
            { value: 'Human', label: 'Human' },
            { value: 'Alien', label: 'Alien' },
            { value: 'Humanoid', label: 'Humanoid' },
            { value: 'Poopybutthole', label: 'Poopybutthole' },
            { value: 'Mythological creature', label: 'Mythological Creature' },
            { value: 'Animal', label: 'Animal' },
            { value: 'Robot', label: 'Robot' },
            { value: 'Cronenberg', label: 'Cronenberg' },
            { value: 'Disease', label: 'Disease' },
        ];

        const updateSpeciesFilter = () => {
            store.setSpeciesFilter(selectSpecies.value);
        };

        watch(() => store.filters.species, (newSpecies) => {
            selectSpecies.value = newSpecies;
        });

        return {
            selectSpecies,
            updateSpeciesFilter,
            speciesOptions,
        };
    }
};
</script>

<style scoped>
/* Agrega aquí tus estilos personalizados */
</style>


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