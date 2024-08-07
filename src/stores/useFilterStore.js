// src/stores/useCharacterStore.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useCharacterStore = defineStore('character', {
    state: () => ({
        characters: [],
        filteredCharacters: [],
        currentPage: 1,
        hasNext: false,
        hasPrev: false,
        filters: {
            name: '',
            status: '',
            species: '',
            gender: '',
        },
    }),
    actions: {
        async fetchCharacters(page = 1) {
            try {
                const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
                this.characters = response.data.results;
                this.hasNext = !!response.data.info.next;
                this.hasPrev = !!response.data.info.prev;
                this.currentPage = page;
                this.applyFilters();  // Aplicar filtros al cargar datos
            } catch (error) {
                console.error('Error fetching characters:', error);
            }
        },
        setGenderFilter(gender) {
            this.filters.gender = gender;
            this.applyFilters();
        },
        applyFilters() {
            this.filteredCharacters = this.characters.filter(character => {
                return (
                    (this.filters.gender === '' || character.gender === this.filters.gender)
                );
            });
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
    },
});

