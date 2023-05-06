<script setup>
import { ref, onMounted } from "vue"
import { getComments, addComment } from "@/service/comments"
import ButtonComp from '@/components/ButtonComp.vue';

const comments = ref([])

const addHandler = async () => {
  await addComment({
    title: 'foo',
    body: 'bar',
    userId: 1,
  })
}

onMounted(async () => {
  comments.value = await getComments()
})

</script>

<template>
  <div class="comments">

    <h3 class="comments__title">Add Comment ✅</h3>
    <ButtonComp text="Add New Comment" color="tertiary" @action="addHandler"></ButtonComp>
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