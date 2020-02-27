<template>
  <div id="HomeVue">
    <h1 class="vectro">
      <span class="vectro-body">HOME</span>
      <span class="vectro-red">I</span>
      <span class="vectro-green">I</span>
      <span class="vectro-blue">I</span>
    </h1>
   
  </div>
</template>

<script>
export default {
  name: "HomeVue",

  data() {
    return { msg: "Welcome to Your Vue.js App" };
  }
};
</script>

<style>

@import url(https://fonts.googleapis.com/css?family=Mr+Dafoe);
@import url(https://fonts.googleapis.com/css?family=Titillium+Web:900);
@import url(https://fonts.googleapis.com/css?family=Righteous);
@import url(https://fonts.googleapis.com/css?family=Candal);
@import url(https://fonts.googleapis.com/css?family=Permanent+Marker);
@import url(https://fonts.googleapis.com/css?family=Monoton);
/* credits to https://codepen.io/boldfacedesign/pen/EoGgD by David Parker */

.mt{
   font-family: "Monoton", cursive;
}
.vectro {
  position: relative;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 0.1px #f1f1f1;
  font-family: "Righteous", cursive;
  font-size: 120px;
  /* margin: 150px 0 50px 0; */
}

/* .vectro:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  animation: vectro_effect 0.067s infinite;
  background: repeating-linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.05) 0px,
    rgba(255, 255, 255, 0.05) 1px,
    rgba(255, 255, 255, 0) 1px,
    rgba(255, 255, 255, 0) 2px
  );
} */

.vectro-body {
  background-clip: text;
  background-image: -webkit-linear-gradient(
    #c3bfb4 0%,
    #fdfcfa 50%,
    #e8e7e5 51%,
    #757172 52%,
    #e8e9db 100%
  );
  filter: drop-shadow(2px 2px 15px #15b86c);
}

.vectro-red {
  color: #f10c20;
  -webkit-text-fill-color: #f10c20;
  -webkit-text-stroke: 0;
  filter: drop-shadow(2px 2px 15px #f10c20);
  font-style: italic;
  padding-right: 20px;
}

.vectro-green {
  color: #6bff2b;
  -webkit-text-fill-color: #6bff2b;
  filter: drop-shadow(2px 2px 15px #6bff2b);
  -webkit-text-stroke: 0;
  font-style: italic;
  padding-right: 20px;
  margin-left: -20px;
}

.vectro-blue {
  color: #3f59f4;
  -webkit-text-fill-color: #3f59f4;
  filter: drop-shadow(2px 2px 15px #3f59f4);
  -webkit-text-stroke: 0;
  font-style: italic;
  padding-right: 20px;
  margin-left: -20px;
}

#HomeVue {
  color: white;
  height: 100%;
  padding-bottom: 1000px;
  background-image: linear-gradient(rgba(65, 65, 65, 1), rgb(61, 77, 73));
}
</style>
