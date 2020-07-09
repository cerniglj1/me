
<template>
  <div id="home">
    <div class="container-fluid">
      <h1 id="title">James Cerniglia</h1>
      <h4 id="position">Software & Web Developer</h4>
      <div class="landingButtons">
        <div class="d-flex justify-content-center">
          <router-link
            to="/Projects"
            tag="button"
            class="btn m-3"
            id="projectBtn"
            exact
          >View Projects</router-link>
          <router-link to="/Projects" tag="button" class="btn m-3" id="resumeBtn" exact>View Resume</router-link>
        </div>
      </div>

      <div class="d-flex justify-content-center">
        <div class="emailSpan">
          <p>
            Email:
            <a
              href="mailto:jamesmcerniglia@gmail.com"
              class="emailLink"
            >jamesmcerniglia@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
    <div id="test">
      <div class="container projectsContainer mt-3">
        <div class="d-flex justify-content-center">
          <div class="card projectCard m-3" v-for="p in projects" :key="p.name">
            <img class="card-img-top" v-bind:src="''+p.imgUrl" :alt="p.imgUrl" />
            <div class="card-body">
              <h5 class="card-title">{{p.name}}</h5>
              <p class="card-text">{{p.description}}</p>
              <div class="d-flex justify-content-around">
                <a
                  class="btn btn-success viewCodeBtn"
                  v-bind:href="p.codeUrl"
                  v-bind:class="{ disabled: p.codeUrl == '' }"
                >View Code</a>

                <router-link
                  class="btn btn-info"
                  v-bind:class="{ disabled: p.liveUrl == '' }"
                  :to="p.liveUrl"
                >Live Software</router-link>
              </div>

              <div class="mb-auto pt-2">
                <table>
                  <tbody>
                    <tr>
                      <td>Made with:</td>
                      <td class="d-flex justify-content-center">
                        <div id="icons">
                          <span
                            class="badge pythonBadge mr-1"
                            v-if="p.skillsUsed.includes('Python') || p.skillsUsed.includes('python')"
                          >
                            <img class="codeIcon" src="../assets/icons/python.png" /> Python
                          </span>
                          <span
                            class="badge kivyBadge mr-1"
                            v-if="p.skillsUsed.includes('Kivy') || p.skillsUsed.includes('kivy')"
                          >
                            <img class="codeIcon" src="../assets/icons/kivy.png" /> Kivy
                          </span>
                          <span
                            class="badge mysqlBadge mr-1"
                            v-if="p.skillsUsed.includes('MySQL') || p.skillsUsed.includes('mysql')"
                          >
                            <img class="codeIcon" src="../assets/icons/mysql.png" /> MySQL
                          </span>
                          <span
                            class="badge nodeBadge mr-1"
                            v-if="p.skillsUsed.includes('Node') || p.skillsUsed.includes('node')"
                          >
                            <img class="codeIcon" src="../assets/icons/nodejs.png" /> Node
                          </span>
                          <span
                            class="badge vueBadge mr-1"
                            v-if="p.skillsUsed.includes('Vue') || p.skillsUsed.includes('vue')"
                          >
                            <img class="codeIcon" src="../assets/icons/vue.png" /> Vue
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ul class="list-group" hidden>
                <li
                  class="list-group-item d-flex justify-content-center list-group-skill p-2"
                  v-for="s in p.skillsUsed"
                  :key="s"
                >{{s}}</li>
              </ul>
            </div>
            <button
              type="button"
              class="btn likesBtn"
              data-toggle="button"
              :id="p.id"
              v-on:click="projectCartLike(this,p)"
            >
              <i class="fab fa-gratipay heartBtn"></i>
              {{p.likes}}
            </button>
          </div>
        </div>
      </div>
    </div>
    <ftr class="ftr" />
  </div>
</template>

<script>
/* eslint-disable no-console */
// import ApiMethods from "@/services/ApiMethods";
import q from "osrs-quest-tool";
import ftr from "./ftr.vue";
export default {
  name: "app",

  components: { ftr },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      pendingLikes: {},
      projects: [
        {
          id: "p1",
          name: "Old School Runescape HiScores",
          developers: ["James Cerniglia"],
          skillsUsed: ["Node", "Vue"],
          imgUrl: require("@/assets/hydra2.png"),
          codeUrl: "https://github.com/cerniglj1/me",
          liveUrl: "osrs/u/not poop",
          likes: 0,
          liveCodeBool: true,
          description:
            "Web App that calls the Old School Runescape hiscores and displays account ranking and information.",
          clicked: false
        },
        {
          id: "p2",
          name: "Cornerstone Work Tracker",
          developers: ["James Cerniglia", "Stefan", "Amber"],
          skillsUsed: ["Python", "Kivy", "MySQL"],
          imgUrl: require("@/assets/cornerstone.png"),
          liveCodeBool: false,
          likes: 0,
          codeUrl: "",
          liveUrl: "",
          description:
            "Software designed to allow assigning employee tasks for time management and employee assessment.",
          clicked: false
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

    /**
     * Possible on exit functionality
     */
    // window.addEventListener("beforeunload", function(e) {
    //   // Cancel the event
    //   console.log("beforeunload",{e});
    //   e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
    //   // Chrome requires returnValue to be set
    //   e.returnValue = "";
    // });
  },
  methods: {
    SpawnStarParticle: function(x, y) {
      const el = document.createElement("div");
      el.classList.add("starparticle");
      el.innerHTML = "★";
      el.style.setProperty("--x", `${x}px`);
      el.style.setProperty("--y", `${y}px`);
      el.style.setProperty("--dx", `${Math.ceil(Math.random() * 600 - 300)}px`);
      el.style.setProperty("--dy", `${Math.ceil(Math.random() * 600 - 300)}px`);
      el.style.setProperty(
        "--dr",
        `${Math.ceil(Math.random() * 720 - 360)}deg`
      );
      document.body.appendChild(el);
      setTimeout(() => {
        el.remove();
      }, 1000);
    },
    getImg: function(x) {
      console.log(x, x.toString());
      return x.toString();
    },
    AddStar: function(id, starsEl, itemEl) {
      if (this.pendingLikes[id] !== undefined) {
        this.pendingLikes[id].count = Math.min(
          1000,
          this.pendingLikes[id].count + 1
        );
        clearTimeout(this.pendingLikes[id].timeout);

        if (this.pendingLikes[id].count === 1000) {
          itemEl.classList.add("maxstars");
        }
      } else {
        this.pendingLikes[id] = {
          id,
          count: 1,
          starsEl,
          itemEl
        };

        itemEl.classList.add("starring");
      }
      starsEl.querySelector(".starcount").innerHTML =
        "+" + this.pendingLikes[id].likes;
      this.pendingLikes[id].timeout = setTimeout(() => {
        // FinishStar(id);
        console.log({ A: this.pendingLikes });
      }, 1000);
    },
    projectCartLike: function(b, proj) {
      proj.likes++;
      var timeout = 2000;
      proj.clicked = true;
      var btn = document.getElementById(proj.id);

      if (btn.target.closest(".likesBtn")) {
        this.AddStar(
          btn.target.closest("[data-id]").getAttribute("data-id"),
          btn.target.closest(".likesBtn"),
          btn.target.closest("[data-id]")
        );
        const rect = btn.target.getBoundingClientRect();
        this.SpawnStarParticle(
          btn.x || rect.left + Math.random() * (rect.right - rect.left),
          rect.top + Math.random() * (rect.bottom - rect.top)
        );
        btn.preventDefault();
      }

      setTimeout(function() {
        // console.log({ a: document.getElementById(proj.id) });
        if (proj.clicked == false) {
          var btn = document.getElementById(proj.id);
          if (btn.classList.contains("active")) {
            document.getElementById(proj.id).blur();
          }
        }
      }, timeout);
    }
  }
};
</script>

<style scoped>
#test {
  /* background-image: url("../assets/test.png"); */
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

.card-title {
  text-decoration: underline;
}

.emailSpan {
  background-color: #030a66;
  border-radius: 15px;
  padding-left: 6%;
  padding-right: 6%;
}
.projectsContainer {
  border-radius: 15px;
}
.likesBtn {
  width: 25%;
  background: #00eb1fa2;
  background: #00eb1fa2;
  /* color: #013f09a2; */
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  overflow: hidden;
}
.likesBtn:hover {
  width: 25%;
  background: #00eb1fa2;
  background: #00eb1fa2;
  color: #004b0a;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  overflow: hidden;
}
/* Likes Button Properties */
.likesBtn:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
}

.likesBtn:focus {
  background: #013f09a2;
  border: 1px solid #013f09a2;
  font-size: 19px;
  color: white;
  outline: none;
  box-shadow: none;

  /* animation-delay: -2s; */
}

@keyframes likeTransition {
}

#resumeBtn:hover {
  background-position: bottom left;
}

@keyframes fadein {
  from {
    opacity: 0;
    bottom: -100px;
  }
  to {
    opacity: 1;
    bottom: 0;
  }
}

.projectCard {
  background: rgb(2, 64, 75);
  max-width: 350px;
  overflow: hidden;
  border-radius: 20px;
  -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 2s; /* Firefox < 16 */
  -ms-animation: fadein 2s; /* Internet Explorer */
  -o-animation: fadein 2s; /* Opera < 12.1 */
  animation: fadein 2s;
}
.projectCard img {
  max-height: 220px;
  max-width: 348px;
}

.list-group-skill {
  background: #790a8f;
  margin-bottom: 1px;
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
