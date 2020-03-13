
<template>
  <div id="HomeVue"></div>
</template>

<script>
/* eslint-disable no-console */
import ApiMethods from "@/services/ApiMethods";
export default {
  name: "HomeVue",

  data() {
    return { msg: "Welcome to Your Vue.js App" };
  },
  mounted() {
    var a = ApiMethods.getApiHome().then(() => {
      console.log(a);
    });
  }
};
</script>

<style>
#HomeVue {
  color: white;
  height: 100%;
  padding-bottom: 1000px;
  background-image: linear-gradient(rgba(65, 65, 65, 1), rgb(61, 77, 73));
}
</style>
