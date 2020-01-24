<template>
  <div id="footer2">
    <footer class="footer">
      <div ass="container">
        <div id="icons">
          <i class="fab fa-facebook-square fa-2x"></i>
          <i class="fab fa-instagram fa-2x"></i>
          <i class="fab fa-twitch fa-2x"></i>
          <i class="fab fa-linkedin fa-2x"></i>
          <i class="fab fa-twitter-square fa-2x"></i>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "footer2",
  data() {
    return { msg: "Welcome to Your Vue.js App" };
  },
  created: function() {}
};
</script>
<style>
.container {
  margin-left: auto;
  margin-right: auto;
}

#icons i {
  padding: 10px;
  padding: 10px;
}
</style>
