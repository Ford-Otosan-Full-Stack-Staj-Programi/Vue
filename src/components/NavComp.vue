<script setup>
import { RouterLink } from "vue-router"
</script>

<template>
  <nav>
    <RouterLink to="/">Home Page</RouterLink>
    <RouterLink to="/listing">Listing Page</RouterLink>
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
    color: white;
    text-decoration: none;

    border-radius: 8px;

    &:visited {
      color: white;
      text-decoration: none;
    }

    &:hover {
      color: invert($color: white);
      background-color: invert($color: purple);
      text-decoration: underline;
    }

    &.router-link-exact-active {
      color: plum;
      background-color: purple;
    }
  }
}
</style>