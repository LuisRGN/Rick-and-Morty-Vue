<!-- src/components/MyComponente.vue -->
<template>

  <div class="form-group">
    <label for="gender" class="form-label text-light">Filter by Gender</label>
    <select id="gender" v-model="selectedGender" @change="updateGenderFilter" class="form-select custom-select">
      <option v-for="option in genderOptions" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useCharacterStore } from '../stores/useFilterStore';

export default {
  name: 'MyComponente',
  setup() {
    const store = useCharacterStore();
    const selectedGender = ref(store.filters.gender);

    const genderOptions = [
      { value: '', label: 'All' },
      { value: 'Male', label: 'Male' },
      { value: 'Female', label: 'Female' },
      { value: 'Genderless', label: 'Genderless' },
      { value: 'unknown', label: 'unknown' }
    ]

    const updateGenderFilter = () => {
      store.setGenderFilter(selectedGender.value);
    };

    // Sincronizar selectedGender con el estado del store
    watch(() => store.filters.gender, (newGender) => {
      selectedGender.value = newGender;
    });

    return {
      selectedGender,
      updateGenderFilter,
      genderOptions
    };
  }
};
</script>

<style scoped>
/* Cambiar el color del fondo y del texto del selector */
.custom-select {
  background-color: #8f8f8f;
  /* Color de fondo personalizado */
  color: #ffffff;
  /* Color del texto personalizado */
}

/* Cambiar el color del texto del selector cuando está enfocado */
.custom-select:focus {
  border-color: #93cca1;
  /* Color del borde cuando está enfocado */
  box-shadow: 0 0 0 0.2rem rgba(0, 77, 64, 0.25);
  /* Sombra cuando está enfocado */
}
</style>
