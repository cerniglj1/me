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
  }
};
</script>

<style >
@import url(https://fonts.googleapis.com/css?family=Josefin+Sans);
#app {
  font-family: "Josefin Sans", Helvetica, Arial, sans-serif;
  /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(223, 255, 251);
  /* background-color: rgba(65, 65, 65, 1); #0064ff */
  /* background-image: url("./assets/big.png"); */
  /* background-size: cover; */
  /* background-attachment: fixed; */
}
.ftr {
  display: flex;
  justify-content: flex-start;
  /* margin-top: -120px; */
}
html,
body {
  height: 100%;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
#Keys {
  background: linear-gradient(#0093ff 0%, #00ffe4 1%, #8300ff 2%, #0020ff 3%);
}

.pythonBadge {
  background: black;
  color: white;
}
.kivyBadge {
  background: black;
  color: white;
  text-align: center;
}
.mysqlBadge {
  /* background: linear-gradient(#144e61 0%, #e57911 100%); */
  background: #e57911;
  color: white;
}
.vueBadge {
  background: #1e6144;
}
.nodeBadge {
  background: #023b02;
}

.codeIcon {
  width: 15px;
  height: 15px;
}
</style>