<template>
  <div id="about">
    <div class="container">
      <div class="jumbotron me" id="slide">
        <div class="row">
          <div class="col-4">
            <div class="brd">
              <img class="profile-picture" src="../assets/me.png" width="200" />
            </div>
          </div>
          <div class="col-8">
            <p class="bio">
<<<<<<< HEAD
              Computer Science student, web developer, blah blah blah.
=======
              Computer Science student, web developer, :).
>>>>>>> gh-pages
              Thanks for visiting my website.
            </p>
          </div>
        </div>
      </div>
     
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      summonerData: null,
      osrsUsernameInput: null,
      notpoop: null,
      jimbojango: null,
      info: null,
      dani: null,
    };
  },
  mounted() {},
  created: function () {},
  methods: {
    osrsSearch: function (name) {
      // eslint-disable-next-line no-console
      console.log(name);
      this.$router.push({ path: `/osrs/users/${name}` });
      return name;
    },
  },
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
.brd {
  background: black;
}
.rs {
  height: 350px;
  filter: saturate(2);
  background-size: cover;
  animation-name: slideFromRight;

  animation-duration: 2s;
}

.me {
  margin-top: 11%;
  background: #8300ff;
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
