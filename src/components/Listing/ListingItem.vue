<script setup>
const props = defineProps(['name', 'title', 'number']);
</script>

<template>
  <div class="listing__item" v-if="props.number > 22">
    {{ props.name }} <strong>{{ props.title }}</strong>
    <span>{{ props.number }}</span>
  </div>
  <div class="listing__item -purple" v-else>
    {{ props.name }} <strong>{{ props.title }}</strong>
    <span>{{ props.number }}</span>
  </div>
</template>

<style lang="scss" scoped>
.listing {
  &__item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    margin: 10px 0;
    padding: 20px;

    border-radius: 8px;

    background-color: lavender;

    strong {
      font-size: 26px;
    }

    &.-purple {
      background-color: plum;
    }
  }
}
</style>