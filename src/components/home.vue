
<template>
  <div id="home">
    <div class="container-fluid">
      <h1 id="title">James Cerniglia</h1>
      <h4 id="position">Software/Web Developer</h4>
      <div class="landingButtons">
        <div class="d-flex justify-content-center">
          <router-link
            to="/Projects"
            tag="button"
            class="btn m-2"
            id="projectBtn"
            exact
          >View Projects</router-link>
          <router-link to="/Projects" tag="button" class="btn m-2" id="resumeBtn" exact>View Resume</router-link>
        </div>
      </div>

      <div class="emailSpan">
        Email:
        <a href="mailto:jamesmcerniglia@gmail.com" class="emailLink">jamesmcerniglia@gmail.com</a>
      </div>
    </div>
    <div id="test">
      <div class="container projectsContainer mt-3">
        <div class="d-flex justify-content-center">
          <div class="card projectCard m-3" v-for="p in projects" :key="p.name">
            <img class="card-img-top" :src="p.imgUrl" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">{{p.name}}</h5>
              <p class="card-text">{{p.description}}</p>
              <div class="d-flex justify-content-around">
                <router-link
                  class="btn btn-success"
                  :to="p.codeUrl"
                  v-bind:class="{ disabled: p.codeUrl == '' }"
                >View Code</router-link>
                <router-link
                  class="btn btn-info"
                  v-bind:class="{ disabled: p.liveUrl == '' }"
                  :to="p.liveUrl"
                >Live Software</router-link>
              </div>
              <p class="mb-auto pt-2">Skills Used:</p>
              <ul class="list-group">
                <li
                  class="list-group-item d-flex justify-content-center list-group-skill p-2"
                  v-for="s in p.skillsUsed"
                  :key="s"
                  data-toggle="tooltip"
                  data-html="true"
                  title="<em>Tooltip</em> <u>with</u> <b>HTML</b>"
                >{{s}}</li>
              </ul>
            </div>
            <button
              type="button"
              class="btn likesBtn"
              data-toggle="button"
              aria-pressed="false"
              v-on:click="p.likes++"
            >
              <div class="d-flex justify-content-center">
                <i class="fab fa-gratipay"></i>
                {{p.likes}}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
// import ApiMethods from "@/services/ApiMethods";

import q from "osrs-quest-tool";
export default {
  name: "app",

  components: {},
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      projects: [
        {
          name: "Cornerstone Work Tracker",
          developers: ["James Cerniglia", "Stefan", "Amber"],
          skillsUsed: ["Python", "Kivy", "MySQL"],
          imgUrl: "@/assets/logo.png",
          liveCodeBool: false,
          likes: 0,
          codeUrl: "",
          liveUrl: "",
          description:
            "Software used to create tasks for managers to assign to workers. Compatible with RaspberryPi and windows."
        },
        {
          name: "Old School Runescape HiScores",
          developers: ["James Cerniglia"],
          skillsUsed: ["Node", "Vue"],
          imgUrl: "../assets/me.png",
          codeUrl: "https://github.com/cerniglj1/me",
          liveUrl: "osrs/u/not poop",
          likes: 0,
          liveCodeBool: true,
          description:
            "Software used to create tasks for managers to assign to workers. Compatible with RaspberryPi and windows."
        }
      ]
    };
  },
  mounted() {
    // var a = ApiMethods.getApiHome().then(() => {
    //   console.log(a);
    // });
    console.log(q.json());
    // var colors = ["#0093ff", "#00ffe4", "#8300ff", "#0020ff"];
    // var item = colors[Math.floor(Math.random() * colors.length)];
    // document.getElementById("main").style.background = item;
  }
};
</script>

<style scoped>
#test {
  background-image: url("../assets/test.png");
  background-size: 30%;
  background-repeat: no-repeat;
  background-position: center left;
  margin-bottom: 50px;
}
#home {
  color: white;
  font-family: "Josefin Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 2rem;
  padding-bottom: 5%;
  overflow-y: hidden;
  overflow: hidden;
}
.projectsContainer {
  background: #0093ff;
  border: #790a8f solid 7px;
  border-radius: 15px;
}
.likesBtn {
  width: 25%;
  background: #00eb1fa2;
  color: #013f09a2;
}
.likesBtn:focus {
  background: #00eb1fa2;
  color: #013f09a2;
}
#resumeBtn:hover {
  background-position: bottom left;
}
.projectCard {
  background: grey;
  max-width: 250px;
}
.list-group-skill {
  background: #790a8f;
}
#resumeBtn {
  background-image: url("../assets/bgp.png");
  background-position: right top;
  animation: btnsTextColor;
  border: 2px solid white;
  color: white;
  transition: 1s;
}
#projectBtn:hover {
  background-position: right top;
}
#projectBtn {
  color: white;
  background-image: url("../assets/bgp.png");

  border: 2px solid white;
  background-position: bottom left;
  transition: 1s;
}
.emailLink,
.emailSpan {
  color: white;
  font-size: 24px;
  transition: 1s;
}
.emailLink:hover {
  color: #00ffe4;
}
#title {
  font-size: 3.5em;
  text-align: center;
}
#position,
.emailSpan {
  padding-top: 1rem;
  text-align: center;
}
router-link {
  color: white;
}
</style>
