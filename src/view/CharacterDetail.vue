<template>
    <div v-if="loading">
        <MySpinner />
    </div>
    <div v-if="!loading">
        <ReturnButton />
    </div>
    <div>
        <div class="container text-light" v-if="characterDetail && !loading">
            <div class="d-flex flex-column flex-md-row align-items-center justify-content-evenly mt-4">
                <div class="d-flex justify-content-center mb-3 mb-md-0">
                    <img :src="characterDetail.image" :alt="characterDetail.name" class="img-fluid mb-1 rounded">
                </div>
                <div class="d-flex flex-column align-items-center justify-content-center">
                    <h1 class="mb-4">{{ characterDetail.name }}</h1>
                    <h6>Status: {{ characterDetail.status }}</h6>
                    <h6>Specie: {{ characterDetail.species }}</h6>
                    <h6>Gender: {{ characterDetail.gender }}</h6>
                    <h6>Origin: {{ characterDetail.origin.name }}</h6>
                    <h6>Location: {{ characterDetail.location.name }}</h6>
                </div>
            </div>

            <div v-if="episodes.length">
                <h2 class="text-center m-4">Episodes</h2>
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
import ReturnButton from '@/components/ReturnButton.vue';

export default {
    name: 'CharacterDetail',
    components: {
        MySpinner,
        ReturnButton
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