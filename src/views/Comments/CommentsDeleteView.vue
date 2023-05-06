<script setup>
import { ref, onMounted } from "vue"

import { getComments, deleteComment } from "@/service/comments";

const comments = ref([]);

const commentDeleteHandler = async (id) => {
  await deleteComment(id);
  comments.value = comments.value.filter(comment => comment.id != id);
}

onMounted(async () => {
  comments.value = await getComments().then(response => response.filter((comment, index) => index < 10))
})

</script>

<template>
  <div class="comments">

    <h3 class="comments__title">Delete Comments ❌</h3>
    <div class="comments__item" v-for="(comment, index) in comments" :key="comment.id"
      @click="commentDeleteHandler(comment.id)">
      {{ comment.id }} - {{ comment.body }}</div>
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

    cursor: pointer;

    &:hover {
      background-color: salmon;
    }
  }
}
</style>
