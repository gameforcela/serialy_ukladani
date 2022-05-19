<script setup>
import { RouterLink, RouterView } from 'vue-router';
import NavMenu from "@/components/NavMenu.vue";

</script>

<template>

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
  <main class="bg-dark">
  <header>
    <NavMenu id="navbarToggleExternalContent" ></NavMenu>
  </header>
  <RouterView/>
  </main>
</template>

<style>
body {
  background-image: url('https://img.freepik.com/free-vector/hand-painted-background-violet-orange-colours_23-2148427578.jpg?w=2000');
}
</style>
