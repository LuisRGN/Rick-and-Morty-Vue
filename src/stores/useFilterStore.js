import { defineStore } from 'pinia';
import axios from 'axios';

export const useCharacterStore = defineStore('character', {
    state: () => ({
        allCharacters: [], // Lista original de personajes
        filteredCharacters: [], // Lista filtrada de personajes
        characterNotFound: false,
        loading: false,
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
            this.characterNotFound = false
            this.loading = true
            try {
                const { name, status, species, gender } = this.filters;
                const params = {
                    page,
                    ...(name && { name }), // Solo añadir el parámetro si tiene valor
                    ...(status && { status }),
                    ...(species && { species }),
                    ...(gender && { gender }),
                };
                const response = await axios.get('https://rickandmortyapi.com/api/character', { params });
                this.allCharacters = response.data.results;
                this.hasNext = !!response.data.info.next;
                this.hasPrev = !!response.data.info.prev;
                this.currentPage = page;
                this.applyFilters(); // Aplicar filtros después de cargar datos
                this.loading = false
            } catch (error) {
                this.characterNotFound = true
                this.loading = false
            }
        },
        setGenderFilter(gender) {
            this.filters.gender = gender;
            this.fetchCharacters(this.currentPage);
        },
        setStatusFilter(status) {
            this.filters.status = status;
            this.fetchCharacters(this.currentPage);
        },
        setSpeciesFilter(species) {
            this.filters.species = species;
            this.fetchCharacters(this.currentPage);
        },
        setNameFilter(name) {
            this.filters.name = name;
            this.fetchCharacters(this.currentPage);
        },
        applyFilters() {
            const { name, status, species, gender } = this.filters;
            this.filteredCharacters = this.allCharacters.filter(character => {
                return (
                    (name === '' || character.name.toLowerCase().includes(name.toLowerCase())) &&
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



