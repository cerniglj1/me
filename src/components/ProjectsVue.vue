<template>
  <div id="app">
    <div id="Projects">
      <h1>Projects</h1>
      <div class="container">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Morbi leo risus</li>
          <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsVue",
  components: {},
  data() {
    return { msg: "Welcome to Your Vue.js App" };
  }
};
</script>

<style>
#Projects {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
.list-group,
.list-group-item {
  background-color: #414141;
}
</style>
