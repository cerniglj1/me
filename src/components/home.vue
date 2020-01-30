<template>
  <div id="app">
    <div class="home">
      <h1>Home</h1>
    </div>

    <Users />
  </div>
</template>

<script>
import users from "./users.vue";

export default {
  name: "home",
  components: {
    users
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
