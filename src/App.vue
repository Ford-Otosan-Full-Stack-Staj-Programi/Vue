<script setup>
import NavComp from '@/components/NavComp.vue';
</script>

<template>
  <header>
    <NavComp></NavComp>
  </header>
  <main>
    <RouterView></RouterView>
  </main>
</template>
