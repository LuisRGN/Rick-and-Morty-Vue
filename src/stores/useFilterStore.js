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
    },
});