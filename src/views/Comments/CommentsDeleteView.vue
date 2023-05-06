<script setup>
import { ref, onMounted } from "vue"

import { getComments, deleteComment } from "@/service/comments";

const comments = ref([]);

const commentDeleteHandler = async (id) => {
  await deleteComment(id)
}

onMounted(async () => {
  comments.value = await getComments()
})

</script>

<template>
  <main>
    <h1>Comments</h1>
    <ul>
      <li v-for="comment in comments" @click="commentDeleteHandler(comment.id)">
        {{ comment.body }}</li>
    </ul>
  </main>
</template>