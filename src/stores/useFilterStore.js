import { defineStore } from 'pinia';
import axios from 'axios';

export const useCharacterStore = defineStore('character', {
    state: () => ({
        allCharacters: [], // Lista original de personajes
        filteredCharacters: [], // Lista filtrada de personajes
        episodes: [],
        characterNotFound: false,
        loading: false,
        loadingEpisodes: false,
        currentPage: 1,
        hasNext: false,
        hasPrev: false,
        filters: {
            name: '',
            status: '',
            species: '',
            gender: '',
        },
        characterDetails: null,
        favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    }),
    actions: {
        async fetchCharacters(page = 1) {
            this.characterNotFound = false;
            this.loading = true;
            try {
                const { name, status, species, gender } = this.filters;
                const params = {
                    page,
                    ...(name && { name }),
                    ...(status && { status }),
                    ...(species && { species }),
                    ...(gender && { gender }),
                };
                const response = await axios.get('https://rickandmortyapi.com/api/character', { params });
                const allCharacters = response.data.results;

                // Aplicar filtros directamente aquí
                this.filteredCharacters = allCharacters.filter(character => {
                    return (
                        (name === '' || character.name.toLowerCase().includes(name.toLowerCase())) &&
                        (status === '' || character.status === status) &&
                        (species === '' || character.species === species) &&
                        (gender === '' || character.gender === gender)
                    );
                });

                this.hasNext = !!response.data.info.next;
                this.hasPrev = !!response.data.info.prev;
                this.currentPage = page;
                this.loading = false;
            } catch (error) {
                console.error('Error fetching characters:', error.response ? error.response.data : error.message);
                this.characterNotFound = true;
                this.loading = false;
            }
        },
        async fetchCharacterById(id) {
            this.characterDetails = null;
            this.loading = true;
            try {
                const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
                this.characterDetails = response.data;
                if (this.characterDetails.episode && this.characterDetails.episode.length > 0) {
                    await this.fetchEpisodes(this.characterDetails.episode);
                }
                this.loading = false;
            } catch (error) {
                console.error('Error fetching character by ID:', error.response ? error.response.data : error.message);
                this.characterDetails = null;
                this.loading = false;
            }
        },
        async fetchEpisodes(episodeUrls) {
            this.episodes = [];
            this.loadingEpisodes = true;

            try {
                const episodePromises = episodeUrls.map((episodeUrl) => axios.get(episodeUrl));
                const episodesResponse = await Promise.all(episodePromises);
                this.episodes = episodesResponse.map((res) => res.data);
                this.loadingEpisodes = false;
            } catch (error) {
                console.error('Error fetching episodes:', error.response ? error.response.data : error.message);
                this.episodes = [];
                this.loadingEpisodes = false;
            }
        },
        updateFilter(filterName, value) {
            this.filters[filterName] = value;
            this.currentPage = 1;
            this.fetchCharacters(this.currentPage);
        },
        setGenderFilter(gender) {
            this.updateFilter('gender', gender);
        },
        setStatusFilter(status) {
            this.updateFilter('status', status);
        },
        setSpeciesFilter(species) {
            this.updateFilter('species', species);
        },
        setNameFilter(name) {
            this.updateFilter('name', name);
        },
        clearFilters() {
            Object.keys(this.filters).forEach(key => {
                this.filters[key] = '';
            });
            this.currentPage = 1;
            this.fetchCharacters(this.currentPage);
        },
        nextPage() {
            if (this.hasNext) {
                this.fetchCharacters(this.currentPage + 1);
            }
        },
        prevPage() {
            if (this.hasPrev) {
                this.fetchCharacters(this.currentPage - 1);
            }
        },
        // Acción para agregar un personaje a los favoritos
        addToFavorites(character) {
            this.favorites.push(character);
            localStorage.setItem('favorites', JSON.stringify(this.favorites));
        },

        // Acción para eliminar un personaje de los favoritos
        removeFromFavorites(characterId) {
            this.favorites = this.favorites.filter(character => character.id !== characterId);
            localStorage.setItem('favorites', JSON.stringify(this.favorites));
        },
        isFavorite(id) {
            return this.favorites.some(favorite => favorite.id === id);
        },
        // Acción para obtener los personajes favoritos desde el localStorage
        loadFavorites() {
            const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
            if (storedFavorites) {
                this.favorites = storedFavorites;
            }
        },
    },
});