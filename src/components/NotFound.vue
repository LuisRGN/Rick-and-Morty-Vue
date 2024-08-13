<template>
    <div class="container mt-2 my-5 text-center">
        <img :src="cuatro" alt="404" class="img-fluid mb-4 rounded-3" style="width: 55rem; height: 35rem;">
    </div>
</template>

<script>
import cuatro from '@/assets/img/404.jpeg'
export default {
    name: 'NotFound',
    setup(){
        return {
            cuatro
        }
    }
}

</script>

<style scoped>

</style>