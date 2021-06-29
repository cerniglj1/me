<template>
  <div id="app">
    <NavBarVue />
    <router-view />
    <!-- <FooterVue class="ftr" /> -->
  </div>
</template>

<script>
import NavBarVue from "./components/NavBarVue.vue";
// import FooterVue from "./components/FooterVue.vue";

export default {
  name: "app",
  components: {
    NavBarVue,
    // FooterVue,
  },
};
</script>

<style >


#app {
  --or1: #f58958;
  --or2: #e95f21;
  --or3: #aa2d0f;
  --or4: #612a13;
  --grey1: #aec3bc;
  --grey2: #80949d;
  --grey3: #506270;
  --grey4: #2e3641;
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--grey2);
}

html,
body {
  height: 100%;
  width: 100%;
}
#Keys {
  background: linear-gradient(#0093ff 0%, #00ffe4 1%, #8300ff 2%, #0020ff 3%);
}
</style>