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
        <div class="collapse navbar-collapse" id="navbarNav">
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
import rm from '@/assets/img/walpape.png'
export default {
  name: "MyNavbar",
  setup(){
    return{
      rm
    }
  }
}
</script>
