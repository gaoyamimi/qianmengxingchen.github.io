<!-- 背景 -->
<script setup name="background">

</script>


<template>
    <div class="background">
        <img src="@/assets/img/105917465_8.png" alt="background">
    </div>
</template>


<style scoped>
.background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.background img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}
</style>