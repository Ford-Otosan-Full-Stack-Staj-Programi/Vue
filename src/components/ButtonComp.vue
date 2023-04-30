<script setup>

const props = defineProps(['text', 'color', 'isChanged']);
const emits = defineEmits(['action']);

const buttonHandler = () => {
  emits('action', !props.isChanged);
};

</script>

<template>
  <button class="button" :class="{
    'light': props.color == 'primary',
    'dark': props.color == 'secondary',
    'bigger': props.color == 'tertiary'
  }" @click="buttonHandler">{{ props.text }}</button>
</template>

<style lang="scss" scoped>
.button {
  margin: 10px;
  padding: 8px 12px;

  border: 4px solid gray;

  font-size: 16px;
  font-weight: 600;

  cursor: pointer;

  &:hover {
    border-color: blue;
    filter: invert(1);
  }

  &.light {
    color: black;
    background-color: white;
  }

  &.dark {
    color: white;
    background-color: darkslateblue;
  }

  &.bigger {
    font-size: 28px;
  }

}
</style>