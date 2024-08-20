<template>
    <div v-if="loading">
        <MySpinner />
    </div>
    <div>
        <div class="container text-light" v-if="characterDetail && !loading">
            <div class="d-flex flex-column align-items-center mt-4">
                <img :src="characterDetail.image" :alt="characterDetail.name" class="img-fluid mb-4 rounded">
                <h1>{{ characterDetail.name }}</h1>
                <h6>Status: {{ characterDetail.status }}</h6>
                <h6>Specie: {{ characterDetail.species }}</h6>
                <h6>Gender: {{ characterDetail.gender }}</h6>
                <h6>Origin: {{ characterDetail.origin.name }}</h6>
                <h6>Location: {{ characterDetail.location.name }}</h6>
            </div>
            <div v-if="episodes.length">
                <h5 class="text-center">Episodes</h5>
                <div class="row justify-content-center ">
                    <div v-for="episode in episodes" :key="episode.id" class="col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div class="episode-card bg-secondary rounded shadow-lg">
                            <h6 class="text-center">{{ episode.name }}</h6>
                            <p class="text-center">{{ episode.air_date }} | Episode: {{ episode.episode }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { useCharacterStore } from '@/stores/useFilterStore';
import { onMounted, computed } from 'vue';
import MySpinner from '@/components/MySpinner.vue';

export default {
    name: 'CharacterDetail',
    components: {
        MySpinner
    },
    setup() {
        const route = useRoute()
        const store = useCharacterStore()
        const characterDetail = computed(() => store.characterDetails)
        const loading = computed(() => store.loading);
        const episodes = computed(() => store.episodes);
        const loadingEpisodes = computed(() => store.loadingEpisodes);

        onMounted(() => {
            const characterId = route.params.id
            store.fetchCharacterById(characterId)
        })
        return {
            characterDetail,
            loading,
            episodes,
            loadingEpisodes,
        }
    }
}
</script>

<style scoped>
.episode-card {
    min-height: 150px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
}
</style>