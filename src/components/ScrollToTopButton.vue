<template>
    <div v-if="isVisible" class="btn btn-dark back-to-top" @click="scrollToTop">
      <img :src="backTop" alt="BackTop" style="width: 3rem;">
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from 'vue';
  import backTop from '@/assets/img/arrowup.svg'
  
  export default {
    name: 'ScrollToTopButton',
    setup() {
      const isVisible = ref(false);
  
      const handleScroll = () => {
        if (window.scrollY > 300) {
          isVisible.value = true;
        } else {
          isVisible.value = false;
        }
      };
  
      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
  
      onMounted(() => {
        window.addEventListener('scroll', handleScroll);
      });
  
      onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
      });
  
      return { isVisible, scrollToTop, backTop };
    },
  };
  </script>
  
  <style scoped>
  .back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    border-radius: 50%;
    padding: 8px;
    font-size: 24px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 9999;
    transition: opacity 0.3s ease;
  }
  
  .back-to-top:hover {
    background-color: #000000;
  }
  @media (max-width: 576px) {
  .back-to-top {
    padding: 6px;
    font-size: 15px;
  }

  .back-to-top img {
    width: 2.5rem;
  }
}
  </style>
  
  
  
  