<!-- src/components/MyComponente.vue -->
<template>
  <div>
    <h2>Hola desde MyComponente</h2>
    <p :class="isValid">Este es un componente secundario.</p>
    <button type="button" class="btn btn-secondary" @click="changeColor">Secondary</button>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'MyComponente',
  setup() {
    const test = ref(true)
    const changeColor = () => {
      test.value = !test.value
    }
    return {
      test,
      changeColor,
      isValid: computed(() => test.value ? 'red' : 'blue')
    }
  }
}
</script>

<style scoped>
.red {
  color: red;
}

.blue {
  color: blue;
}
</style>