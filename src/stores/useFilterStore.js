import { defineStore } from 'pinia';
import axios from 'axios';

export const useCharacterStore = defineStore('character', {
    state: () => ({
        allCharacters: [], // Lista original de personajes
        filteredCharacters: [], // Lista filtrada de personajes
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
                this.allCharacters = response.data.results;
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
        setStatusFilter(status) {
            this.filters.status = status;
            this.applyFilters();
        },
        applyFilters() {
            const { name, status, species, gender } = this.filters;
            this.filteredCharacters = this.allCharacters.filter(character => {
                return (
                    (name === '' || character.name.includes(name)) &&
                    (status === '' || character.status === status) &&
                    (species === '' || character.species === species) &&
                    (gender === '' || character.gender === gender)
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


