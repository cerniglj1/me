<template>
  <footer>
    <div class="col-10 ftr">
      <div id="icons">
        <a class="icon" href="https://www.facebook.com/james.cerniglia/">
          <i class="fab fa-facebook-square fa-2x rounded"></i>
        </a>
        <a class="icon" href="https://www.instagram.com/big.squeezer/">
          <i class="fab fa-instagram fa-2x rounded"></i>
        </a>
        <a class="icon" href="https://twitch.tv/BIG_SQUEEZER">
          <i class="fab fa-twitch fa-2x rounded"></i>
        </a>
        <a class="icon" href="https://www.linkedin.com/in/jamescerniglia/">
          <i class="fab fa-linkedin fa-2x rounded"></i>
        </a>
        <a class="icon" href="https://twitter.com/BIG_SQUEEZER">
          <i class="fab fa-twitter-square fa-2x rounded"></i>
        </a>
        <a class="icon" href="https://github.com/cerniglj1">
          <i class="fab fa-github fa-2x rounded"></i>
        </a>
        <a class="icon" href=" https://angel.co/u/james-cerniglia">
          <i class="fab fa-angellist fa-2x rounded"></i>
        </a>
      </div>
    </div>
    <div class="col-2 name">
      <a>
        <i class="far fa-copyright"></i>
        <a class="ftrtxt"> James Cerniglia</a>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterVue",
  data() {
    return {};
  },
  created: function () {},
};
</script>
<style scoped>
.name {
  margin: auto;
  width: 50%;

  padding: 10px;
}
.ftr {
  margin-top: 1rem;
  margin-bottom: 0rem;
  background-color: var(--grey4);
  color: var(--grey1);

}
#icons i {
  color: var(--grey1);
  transition: all 0.2s ease-in-out;
  box-shadow: 3px 3px 4px #000000;

  background-color: var(--grey3);
  background: var(--grey3);
  padding: 1rem;
  margin: 2rem;
}

#icons .fab:hover {
  color: var(--grey1);
  box-shadow: 5px 5px 6px #000000;
  background-color: var(--grey3);
  background: var(--grey3);
  color: var(--grey1);
  transition: all 0.2s ease-in-out;
  margin: 2rem;
  padding: 1rem;
}
</style>
