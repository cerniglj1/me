<template>
  <div id="app">
    <Nav />
    <img alt="Vue logo" src="./assets/logo.png" />
    <router-view />
    <FooterVue />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import FooterVue from "./components/FooterVue.vue";

export default {
  name: "app",
  components: {
    Nav,
    FooterVue
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
