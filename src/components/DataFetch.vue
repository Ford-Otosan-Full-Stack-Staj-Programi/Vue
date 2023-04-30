<script setup>
import { ref, reactive } from "vue"
import ButtonComp from "./ButtonComp.vue";

const images = ref([]);

const getData = async () => {
  images.value = await fetch('https://dog.ceo/api/breed/hound/images')
    .then(response => response.json())
    .then(response => response.message)
}
</script>

<template>
  <ButtonComp text="Get Puppy Images 🐶" color="secondary" @action="getData"></ButtonComp>
  <div class="images">

    <template v-for="(image, index) in images" :key="images">
      <div class="images__item" v-if="index < 10">
        <img :src="image">
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.images {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;


  &__item {
    width: calc(100% / 4);
    aspect-ratio: 4/3;

    padding: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

}
</style>