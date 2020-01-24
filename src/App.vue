<template>
  <div id="app">
    <Nav />
    <img alt="Vue logo" src="./assets/logo.png" />
    <router-view />
    <footer2 />
  </div>
</template>

<script>
// import home from "./components/home.vue";
import Nav from "./components/Nav.vue";
import footer2 from "./components/footer.vue";

export default {
  name: "app",
  components: {
    Nav,
    footer2
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: rgb(61, 61, 61);
}
</style>
