<template>
  <div id="app">
    <NavMenu />
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <router-view />
    <FooterVue />
  </div>
</template>

<script>
import NavMenu from "./components/NavMenu.vue";
import FooterVue from "./components/FooterVue.vue";

export default {
  name: "app",
  components: {
    NavMenu,
    FooterVue
  }
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Josefin+Sans);
#app {
  font-family: 'Josefin Sans',  Helvetica, Arial, sans-serif;
  /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: rgba(65, 65, 65, 1);
  color: white;
}
</style>
