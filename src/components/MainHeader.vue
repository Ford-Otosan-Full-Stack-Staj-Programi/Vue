<script setup>
import ButtonComp from '@/components/ButtonComp.vue';

const props = defineProps(['title', 'subtitle']);

const actionHandler = () => console.log('MainHeader Button Handler 🐠');

</script>

<template>
  <header class="header">
    <h2 class="header__title">{{ props.title }} 🚗 (H2)</h2>
    <h3 class="header__subtitle">{{ props.subtitle }} (H3)</h3>

    <slot name="additional"></slot>

    <ButtonComp text="Click Me" color="primary" @action="actionHandler"></ButtonComp>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: relative;
  margin: 10px 20px;
  padding: 20px;
  background-color: ghostwhite;
  border: 2px solid gray;

  &::before {
    content: 'MainHeader.vue';
    position: absolute;
    top: 0;
    left: 0;

    padding: 2px 8px;

    background-color: lightblue;
    font-size: 14px;
    line-height: 20px;
    font-weight: 300;
  }

  &__title {
    margin: 10px;
    padding: 20px;
    font-size: 16px;
    text-decoration: underline;
  }

  &__subtitle {
    margin: 10px;
    padding: 20px;
    font-size: 14px;

    border-top: 2px solid gold;
    border-bottom: 2px solid gold;
  }
}
</style>