<script setup>
import { reactive } from "vue"

import ListingItem from '@/components/Listing/ListingItem.vue';
import ButtonComp from "@/components/ButtonComp.vue";
const data = reactive([
  {
    id: 1,
    name: 'Tolga Egilmezel',
    title: 'Head of 🍕',
    age: 5
  },
  {
    id: 2,
    name: 'Beyza Hatip',
    title: 'Head of 🍎',
    age: 23
  },
  {
    id: 3,
    name: 'Mert Yagmur',
    title: '🌧️ Cloud Master',
    age: 24
  },
  {
    id: 4,
    name: 'Cagdas',
    title: '🦄 Unicorn Master',
    age: 22
  },
  {
    id: 5,
    name: 'Aysel Aydogan',
    title: '🐢 Turtle Runner',
    age: 20
  },
  {
    id: 6,
    name: 'Gizem Yuksel',
    title: '👻 Ghost Fighter',
    age: 28
  }
])

const sortData = () => data.sort((a, b) => a.age - b.age);

</script>

<template>
  <div class="listing">
    <ButtonComp text="Click for sort by age" color="tertiary" @action="sortData"></ButtonComp>
    <div class="listing__items">
      <h3 class="listing__header">Vue v-if</h3>

      <ListingItem v-for="(person, index) in data" :key="person.id" :name="person.name" :title="person.title"
        :number="person.age"></ListingItem>

    </div>

    <div class="listing__items">
      <h3 class="listing__header">Vue v-show</h3>
      <template v-for="person in data" :key="person.id">
        <div class="listing__item" v-show="person.age > 22">
          <ListingItem :name="person.name" :title="person.title" :number="person.age"></ListingItem>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.listing {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;

  &__header {
    margin: 10px;
    padding: 0;
    border-bottom: 2px solid gray;
  }

  &__items {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;

    margin: 20px;
  }
}
</style>