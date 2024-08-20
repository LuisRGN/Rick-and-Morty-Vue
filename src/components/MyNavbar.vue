<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
      <div class="container">
        <router-link to="/" class="navbar-brand">
          <img :src="rm" alt="rm" style="width: 5rem;">
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav" ref="navbarCollapse">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link fs-3" aria-current="page">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link fs-3">About</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import {ref, onMounted, onUnmounted} from 'vue'
import { Collapse } from 'bootstrap';
import rm from '@/assets/img/walpape.png'
export default {
  name: "MyNavbar",
  setup(){
    const navbarCollapse = ref(null);

    const handleClickOutside = (event) => {
      if (navbarCollapse.value && !navbarCollapse.value.contains(event.target)) {
        const bsCollapse = new Collapse(navbarCollapse.value, {
          toggle: false
        });
        bsCollapse.hide();
      }
    };

    onMounted(() => {
      document.addEventListener('click', handleClickOutside);
    });

    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside);
    });
    return{
      rm,
      navbarCollapse
    }
  }
}
</script>
