<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from "vue"
import ButtonComp from "@/components/ButtonComp.vue";

const props = defineProps(['title'])

const name = ref('Bootcamp');
const element = ref(null);

const changeNameHandler = () => {
  name.value = 'Ford Otosan';
}

onBeforeMount(() => {
  console.log('on Before Mount 🔥', 'name:', name.value, 'HTML el:', element.value);
})

onMounted(() => {
  console.log('onMounted 🍎', 'name:', name.value, 'HTML el:', element.value)
})

onBeforeUpdate(() => {
  console.log('on Before Update 🥪', 'name:', name.value, 'HTML el:', element.value)
})

onUpdated(() => {
  console.log('onUpdated 🍕', 'name:', name.value, 'HTML el:', element.value)
})

onBeforeUnmount(() => {
  console.log('on Before Unmount 🦄')
})

onUnmounted(() => {
  console.log('on Unmounted 🐢')
})

</script>

<template>
  <main>
    <h2>Life Cycle Component</h2>
    <h3 ref="element">{{ name }}</h3>
    <strong>Props Title: {{ props.title }}</strong>
    <ButtonComp text="Click: Change Name to Ford Otosan" @action="changeNameHandler"></ButtonComp>

  </main>
</template>