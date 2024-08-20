<template>
    <div>
        <label class="form-label text-light">Search</label>
        <input type="text" class="form-control custom-select" v-model="searchQuery" @input="updateSearch" placeholder="Search by name...">
    </div>
</template>

<script>
import {ref, watch} from 'vue';
import { useCharacterStore } from '@/stores/useFilterStore';

export default {
    name: 'SearchBar',
    setup(){
        const store = useCharacterStore();
        const searchQuery = ref(store.filters.name);

        const updateSearch = () => {
            store.setNameFilter(searchQuery.value);
        }

        watch(()=> store.filters.name, (newName => {
            searchQuery.value = newName
        }));
        return {
            searchQuery,
            updateSearch
        }
    }
}

</script>

<style scoped>
.form-control {
  border-radius: 5px;
}
.custom-select {
  background-color: #8f8f8f;
  color: #ffffff; 
}
.custom-select::placeholder {
  color: #cccccc; 
}
.custom-select:focus {
  background-color: #8f8f8f; 
  color: #ffffff; 
  border-color: #93cca1;
  box-shadow: none;
}
.custom-select:active {
  background-color: #8f8f8f; 
  color: #ffffff; 
}
.custom-select:not(:placeholder-shown) {
  background-color: #6f6f6f;
  color: #ffffff; 
}
</style>