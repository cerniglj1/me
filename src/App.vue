<template>
  <div id="app">
    <navb />
    <router-view />
    <!-- <ftr class="ftr" /> -->
  </div>
</template>

<script>
import navb from "./components/navb.vue";
// import ftr from "./components/ftr.vue";

export default {
  name: "app",
  components: {
    navb,
    // ftr
  },
};
</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

#app {
  font-family: "Roboto", sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(223, 255, 251);

}
.ftr {
  display: flex;
  justify-content: flex-start;
 
}
html,
body {
  height: 100%;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
#Keys {
  background: linear-gradient(#0093ff 0%, #00ffe4 1%, #8300ff 2%, #0020ff 3%);
}
</style>