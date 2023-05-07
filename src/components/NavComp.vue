<script setup>
import { RouterLink } from "vue-router"
</script>

<template>
  <nav>
    <RouterLink to="/">Home Page</RouterLink>
    <RouterLink to="/listing">Listing Page</RouterLink>
    <RouterLink to="/comment">Comments Page</RouterLink>
    <RouterLink to="/inbox">Inbox Page</RouterLink>
    <RouterLink to="/inbox/sub">Inbox > Sub Page</RouterLink>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  margin: 20px;
  padding: 0;

  min-height: 80px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  a {
    margin: 20px;
    padding: 8px 20px;

    font-size: 24px;

    background-color: pink;
    color: #202020;
    text-decoration: none;

    border-radius: 8px;

    &:visited {
      color: #202020;
      text-decoration: none;
    }

    &:hover {
      color: invert($color: #fff);
      background-color: invert($color: purple);
      text-decoration: underline;
    }

    &.router-link-exact-active {
      color: #fff;
      background-color: cornflowerblue;
    }
  }
}
</style>