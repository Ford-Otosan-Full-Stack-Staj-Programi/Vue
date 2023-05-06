<script setup>
import { ref, onMounted } from "vue"
import { getComments } from "@/service/comments"

const comments = ref([])

onMounted(async () => {
  comments.value = await getComments()
})

</script>

<template>
  <div class="comments">

    <h3 class="comments__title">All Comments 🎯</h3>
    <div class="comments__item" v-for="(comment, index) in comments" :key="comment.id">
      {{ index + 1 }} - {{ comment.body }}</div>
  </div>
</template>

<style lang="scss" scoped>
.comments {
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  &__title {
    margin: 0;
    padding: 0;
    font-size: 28px;
  }

  &__item {
    margin: 0 0 16px;
    padding: 0px;

    font-size: 16px;
    font-weight: 600;

    border-bottom: 2px solid salmon;
  }
}
</style>