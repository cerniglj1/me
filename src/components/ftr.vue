<template>
  <div id="ftr">
    <div class="">
      <footer class="footer">
        <div class="ftr">
          <div id="icons">
            <a href="https://www.facebook.com/james.cerniglia/">
              <i class="fab fa-facebook-square fa-2x rounded"></i>
            </a>
            <a href="https://www.instagram.com/big.squeezer/">
              <i class="fab fa-instagram fa-2x rounded"></i>
            </a>
            <a href="https://twitch.tv/BIG_SQUEEZER">
              <i class="fab fa-twitch fa-2x rounded"></i>
            </a>
            <a href="https://www.linkedin.com/in/jamescerniglia/">
              <i class="fab fa-linkedin fa-2x rounded"></i>
            </a>
            <a href="https://twitter.com/BIG_SQUEEZER">
              <i class="fab fa-twitter-square fa-2x rounded"></i>
            </a>
            <a href="https://github.com/cerniglj1">
              <i class="fab fa-github fa-2x rounded"></i>
            </a>
            <a>
              <i class="far fa-copyright"></i>
              <a class="ftrtxt">James Cerniglia</a>
            </a>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "ftr",
  data() {
    return { msg: "Welcome to ftr" };
  },
  created: function () {},
};
</script>
<style scoped>
.ftr {
  color: black;
  margin-top:50px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin-bottom: 0px;
}
#icons i {
  color: black;
  transition: all 0.2s ease-in-out;
  padding: 13px;
  padding: 13px;
}
#icons .fab:hover {
  color: black;
  box-shadow: 3px 3px 4px #000000;
  transition: all 0.2s ease-in-out;
  padding: 13px;
  padding: 13px;
}
</style>
