<template>
  <div class="container my-5 text-center">
    <h2 class="text-light">Bienvenido a mi página de Rick and Morty echa con VUE</h2>
    <p class="text-light">He creado esta página para practicar y explorar en profundidad las diversas funcionalidades que ofrece el framework Vue 3. A través de este proyecto, busco mejorar mis habilidades en el desarrollo de aplicaciones web modernas y responsivas, aprovechando las ventajas que ofrece Vue 3 en la construcción de interfaces dinámicas y eficientes</p>
    <img :src="png" alt="png" class="img-fluid mb-4" style="width: 30rem;"/>
    </div>
</template>
  
  <script>
  import png from '@/assets/img/pngwing.com.png'
  export default {
    name: 'MyAbout',
    setup(){
      return {
        png
      }
    }
  }
  </script>

  <style scoped>
  img{
    mask-image: linear-gradient(
      black 90%,
      transparent
    );
  }
  </style>