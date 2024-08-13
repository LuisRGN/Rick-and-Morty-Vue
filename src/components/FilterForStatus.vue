<template>
  <div class="form-group">
    <label for="status" class="form-label text-light">Filter by Status</label>
    <select id="status" v-model="selectedStatus" @change="updateStatusFilter" class="form-select custom-select">
      <option v-for="option in statusOptions" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useCharacterStore } from '../stores/useFilterStore';

export default {
  name: 'FilterForStatus',
  setup() {
    const store = useCharacterStore();
    const selectedStatus = ref(store.filters.status);

    const statusOptions = [
      {value: '', label: 'All'},
      {value: 'Alive', label: 'Alive'},
      {value: 'Dead', label: 'Dead'},
      {value: 'unknown', label: 'unknown'}
    ]

    const updateStatusFilter = () => {
      store.setStatusFilter(selectedStatus.value);
    };

    watch(() => store.filters.status, (newStatus) => {
      selectedStatus.value = newStatus;
    });

    return {
      selectedStatus,
      updateStatusFilter,
      statusOptions
    };
  }
};
</script>


<style scoped>
.custom-select {
  background-color: #8f8f8f;
  /* Color de fondo personalizado */
  color: #ffffff;
  /* Color del texto personalizado */
}

.custom-select:focus {
  border-color: #93cca1;
  /* Color del borde cuando está enfocado */
  box-shadow: 0 0 0 0.2rem rgba(0, 77, 64, 0.25);
  /* Sombra cuando está enfocado */
}
</style>