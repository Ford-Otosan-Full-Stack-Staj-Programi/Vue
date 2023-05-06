<script setup>
import { ref, onMounted } from "vue"
import { getComments } from "@/service/comments"

const comments = ref([])

onMounted(async () => {
  comments.value = await getComments()
})

</script>

<template>
  <main>
    <h1>Comments</h1>
    <ul>
      <li v-for="comment in comments">
        {{ comment.body }}</li>
    </ul>
  </main>
</template>