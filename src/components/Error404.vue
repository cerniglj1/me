<template>
  <div id="ErrorVue">
    <div class="container">
      <p class="error-title">
        Error
        <a class="lights">
          <a class="blinking">4</a>
          0
          <a class="blinking2">4</a>
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error404",
  data() {
    return { msg: "Welcome to Your Vue.js App" };
  },
  created: function() {}
};
</script>
<style>
@import url(https://fonts.googleapis.com/css?family=Monoton);

.error-title {
  /* -webkit-text-fill-color: transparent; */
  position: relative;
  /* -webkit-text-stroke: 0.1px #f1f1f1; */
  font-size: 120px;
}
.lights {
  /* -webkit-text-fill-color: transparent; */
  position: relative;
  /* -webkit-text-stroke: 0.1px #f1f1f1; */
  font-size: 120px;
  color: transparent;
}
.lights {
  background-clip: text;
  background-image: -webkit-linear-gradient(
    #da3939 0%,
    #792727 50%,
    #df3c3c 51%,
    #a14141 52%,
    #e73d3d 100%
  );
  filter: drop-shadow(0px 0px 10px red);
}
.blinking {
  animation: blinkingText 5s infinite;
}
@keyframes blinkingText {
  0% {
    color: transparent;
  }
  10% {
    color: #000;
  }
  14% {
    color: transparent;
  }
  18% {
    color: #000;
  }
  25% {
    color: transparent;
  }
  49% {
    color: transparent;
  }

  100% {
    color: transparent;
  }
}
.blinking2 {
  animation: blinkingText2 5s infinite;
}
@keyframes blinkingText2 {
  0% {
    color: #000;
  }

  100% {
    color: #000;
  }
}
#ErrorVue {
  font-family: "Monoton", Verdana, sans-serif;

  background-image: linear-gradient(rgb(61, 77, 73) 5%, black);
}
</style>
