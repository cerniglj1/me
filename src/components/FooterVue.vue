<template>
  <div id="FooterVue">
    <footer class="footer">
      <div ass="container">
        <div id="icons">
          <a href="https://twitter.com/zessedlol">
            <i class="fab fa-facebook-square fa-2x"></i>
          </a>
          <a href="https://www.instagram.com/big.squeezer/">
            <i class="fab fa-instagram fa-2x"></i>
          </a>
          <a href="https://twitch.tv/zessed">
            <i class="fab fa-twitch fa-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/jamescerniglia/">
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://twitter.com/zessedlol">
            <i class="fab fa-twitter-square fa-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterVue",
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
.fa-twitter-square {
  /* background-color: red; */
  color: #08a0e9;
}
#icons i {
  transition: all 0.2s ease-in-out;
  padding: 13px;
  padding: 13px;
}
#icons i:hover {
  color: rgba(121, 253, 202, 0.7);
  box-shadow: 0 5px 15px  rgba(121, 253, 202, 0.7);
;
}
</style>
