<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link to="/" class="navbar-brand">Mi App</router-link>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </div>
</template>

<script>
export default {
    name: "MyNavbar",

}
</script>