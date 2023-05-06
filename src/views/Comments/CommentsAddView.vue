<script setup>
import { ref, onMounted } from "vue"
import { addComment } from "@/service/comments";

const comments = ref([])

onMounted(async () => {
  comments.value = await addComment({
    title: 'foo',
    body: 'bar',
    userId: 1,
  })

})
</script>

<template>
  <main>
    <h1>Comments Add on Mounted</h1>
  </main>
</template>