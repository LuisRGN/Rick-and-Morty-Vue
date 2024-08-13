<template>
    <div>
        <button @click="characterStore.clearFilters" type="button" class="btn btn-dark">Limpiar</button>
    </div>
</template>

<script>
import { useCharacterStore } from '@/stores/useFilterStore';

export default {
    name: 'ClearFilter',
    setup() {
        const characterStore = useCharacterStore(); 
        return { characterStore };
    }
}
</script>

<style scoped>

</style>
