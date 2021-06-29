<template>
  <div id="about">
    <div class="container">
      <div class="jumbotron me" id="slide">
        <div class="row">
          <div class="col-4">
            <div class="brd">
              <img
                src="../assets/canyons/me.jpg"
                class="pic-of-me"
                style="max-height: 500px"
              />
            </div>
          </div>
          <div class="col-8">
            <p class="bio">
              I am a software engineer currently living in Merrick, NY. I have
              experience building web apps using Angular, VueJS and Java Spring
              Boot. I am passionate to build things that people will use. I find
              joy creating solutions that I can be proud of. I am always
              searching for ways to learn and improve my code.
            </p>
          </div>
        </div>
      </div>
    </div>
    <FooterVue class="ftr" />
  </div>
</template>

<script>
import FooterVue from "./FooterVue";
export default {
  name: "about",
  components: {
    FooterVue,
  },
  data() {
    return {};
  },
  mounted() {},
  created: function () {},
  methods: {},
};
</script>
<style scoped>
@keyframes slideFromRight {
  0% {
    margin-right: 90%;
    opacity: 0%;
  }

  100% {
    opacity: 100%;
    margin-right: 0%;
  }
}
@keyframes slideFromTop {
  0% {
    margin-top: 23%;
    opacity: 0%;
  }

  100% {
    opacity: 100%;
    margin-top: 11%;
  }
}
.pic-of-me {
  border-radius: 50%;
  max-width: 97%;
  box-shadow: 0px 0px 15px var(--or1);
}
.bio {
  color: white;
}
.me {
  margin-top: 11%;
  margin-bottom: 25%;
  background: var(--grey4);
  animation-name: slideFromTop;
  animation-duration: 2s;
}
.profile-picture {
  border-radius: 50%;
}

template {
  scroll-behavior: smooth;
  overflow: hidden;
}
#about {
  /* background-image: linear-gradient(rgba(65, 65, 65, 1) 40%, rgb(61, 77, 73)); */
  margin-bottom: 100px;
}
</style>
