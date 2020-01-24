<template>
  <div id="app">
    <div class="home">
      <h1>Home</h1>
    </div>

    <Users />
  </div>
</template>

<script>
import Users from "./users.vue";

export default {
  name: "home",
  components: {
    Users
  },
  data() {
    return { msg: "Welcome to Your Vue.js App" };
  }
};
</script>

<style>
.home{
  color: white;
}
</style>
