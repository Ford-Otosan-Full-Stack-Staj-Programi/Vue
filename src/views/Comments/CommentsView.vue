<script setup>
import { RouterLink } from "vue-router"

</script>
<template>
  <main class="comments">
    <aside class="side-menu">
      <nav>
        <RouterLink to="/comment/all">List</RouterLink>
        <RouterLink to="/comment/add">Add comment</RouterLink>
        <RouterLink to="/comment/delete">Delete Comment</RouterLink>
      </nav>
    </aside>
    <RouterView></RouterView>
  </main>
</template>

<style lang="scss" scoped>
.comments {
  display: flex;
  flex-direction: row;
}

.side-menu nav {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  min-width: 280px;

  a {
    margin: 0 0 20px;
    padding: 8px 12px;
    background-color: gainsboro;

    color: #202020;
    text-decoration: none;

    &:hover {
      text-decoration: underline;

    }
  }
}
</style>