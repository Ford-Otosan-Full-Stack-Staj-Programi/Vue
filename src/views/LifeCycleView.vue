<script setup>
import { ref } from "vue"
import LifeCycleComp from "@/components/LifeCycle.vue"
import ButtonComp from "@/components/ButtonComp.vue";

const isOpen = ref(true);
const title = ref('Head of 🍔');

const changeOpen = () => {
  isOpen.value = !isOpen.value
}

const changeTitleHandler = () => {
  title.value = '👻 Master';
  console.log('Clicked changeTitleHandler function');
}
</script>

<template>
  <main>
    <h2>Life Cycle View</h2>
    <ButtonComp text="Toggle isOpen Status" color="primary" @action="changeOpen"></ButtonComp>
    <LifeCycleComp :title="title" v-if="isOpen"></LifeCycleComp>
    <ButtonComp v-if="isOpen" text="Change Title to: 👻 Master" color="secondary" @action="changeTitleHandler">
    </ButtonComp>
  </main>
</template>