<template>
  <div id="ftr">
    <div class="fixed-bottom">
      <footer class="footer">
        <div class="ftr">
          <div id="icons">
            <a href="https://twitter.com/zessedlol">
              <i class="fab fa-facebook-square fa-2x rounded"></i>
            </a>
            <a href="https://www.instagram.com/big.squeezer/">
              <i class="fab fa-instagram fa-2x rounded"></i>
            </a>
            <a href="https://twitch.tv/zessed">
              <i class="fab fa-twitch fa-2x rounded"></i>
            </a>
            <a href="https://www.linkedin.com/in/jamescerniglia/">
              <i class="fab fa-linkedin fa-2x rounded"></i>
            </a>
            <a href="https://twitter.com/zessedlol">
              <i class="fab fa-twitter-square fa-2x rounded"></i>
            </a>
            <div>
              <i class="far fa-copyright"></i>
              <a class="ftrtxt">James Cerniglia</a>
            </div>
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
  created: function() {}
};
</script>
<style scoped>
.ftr {
  color: white;
  
}
#icons i {
  color: white;
  transition: all 0.2s ease-in-out;
  padding: 13px;
  padding: 13px;
}
</style>
