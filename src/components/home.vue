
<template>
  <div id="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col-6">
          <div class="row">
            <div class="col">
              <h2 id="title">James Cerniglia</h2>
              <h4 id="position">Software & Web Developer</h4>
              <div class="landingButtons">
                <div class="d-flex justify-content-center">
                  <button class="mr-4 profileBtn" id="projectBtn">
                    View Projects
                  </button>

                  <button class="profileBtn" id="resumeBtn">View Resume</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <img src="../assets/test.png" style="max-height: 500px" />
          <!-- <img src="../assets/t1.jpg" style="max-height: 500px" /> -->
        </div>
      </div>
    </div>

    <div class="container projectsContainer m-3" :v-if="projects">
      <h4>Projects</h4>
      <div class="d-flex justify-content-between">
        <div
          class="card projectCard m-2"
          v-for="p in projects"
          :key="p.name"
          :style="{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url(' +
              p.imgUrl +
              ')',
          }"
        >
          <!-- <img class="card-img-top" :src="p.imgUrl" :alt="p.imgUrl" /> -->
          <div class="card-body projectCardBody">
            <div class="row">
              <div class="col-10">
                <p>{{ p.name }}</p>
              </div>
            </div>

            <p class="card-text">{{ p.description }}</p>
            <div class="d-flex justify-content-center">
              <a
                :href="p.codeUrl"
                target="_blank"
                :class="{ disabled: p.sourceBool == false }"
                ><button
                  class="codeBtn"
                  :class="{ disabled: p.sourceBool == false }"
                >
                  View Code
                  <i class="fab fa-github projectCodeIcon"></i></button
              ></a>
              <a
                :href="p.liveUrl"
                target="_blank"
                :class="{ disabled: p.liveBool == false }"
              >
                <button
                  class="demoBtn ml-2"
                  :class="{ disabled: p.liveBool == false }"
                >
                  View Demo
                  <i class="fas fa-location-arrow projectCodeIcon"></i></button
              ></a>
            </div>
            <div class="mb-auto pt-2">
              <table>
                <tbody>
                  <tr>
                    <td class="d-flex justify-content-center">
                      <div id="icons">
                        <span
                          class="badge pythonBadge mr-1"
                          v-if="
                            p.skillsUsed.includes('Python') ||
                            p.skillsUsed.includes('python')
                          "
                        >
                          <img
                            class="codeIcon"
                            src="../assets/icons/python.png"
                          />
                          Python
                        </span>
                        <span
                          class="badge kivyBadge mr-1"
                          v-if="
                            p.skillsUsed.includes('Kivy') ||
                            p.skillsUsed.includes('kivy')
                          "
                        >
                          <img
                            class="codeIcon"
                            src="../assets/icons/kivy.png"
                          />
                          Kivy
                        </span>
                        <span
                          class="badge mysqlBadge mr-1"
                          v-if="
                            p.skillsUsed.includes('MySQL') ||
                            p.skillsUsed.includes('mysql')
                          "
                        >
                          <img
                            class="codeIcon"
                            src="../assets/icons/mysql.png"
                          />
                          MySQL
                        </span>
                        <span
                          class="badge nodeBadge mr-1"
                          v-if="
                            p.skillsUsed.includes('Node') ||
                            p.skillsUsed.includes('node')
                          "
                        >
                          <img
                            class="codeIcon"
                            src="../assets/icons/nodejs.png"
                          />
                          Node
                        </span>
                        <span
                          class="badge vueBadge mr-1"
                          v-if="
                            p.skillsUsed.includes('Vue') ||
                            p.skillsUsed.includes('vue')
                          "
                        >
                          <img class="codeIcon" src="../assets/icons/vue.png" />
                          Vue
                        </span>
                        <span
                          class="badge mongoBadge mr-1"
                          v-if="
                            p.skillsUsed.includes('Mongo') ||
                            p.skillsUsed.includes('mongo')
                          "
                        >
                          <img
                            class="codeIcon"
                            src="../assets/icons/mongodb.png"
                          />
                          Mongo
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
              >
                {{ s }}
              </li>
            </ul>
          </div>
          <button
            type="button"
            class="btn likesBtn"
            data-toggle="button"
            :id="p.id"
            v-on:click="projectCartLike(this, p)"
          >
            <i class="fab fa-gratipay heartBtn"></i>
            {{ p.likes }}
          </button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <img src="../assets/test.png" style="max-height: 500px" />
      </div>

      <div class="col mb-2 mt-2 contactMeSection">
        <div class="container pt-2">
          <h2>Email me! <i class="fas fa-envelope-open-text"></i></h2>
          <div>
            <div>
              <form class="contact-form" @submit.prevent="sendEmail">
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      name="user_name"
                      id="inputName1"
                      v-model="emailData.user_name"
                      placeholder="Charles Darwin"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      name="user_email"
                      v-model="emailData.user_email"
                      placeholder="CharlieD@gmail.com"
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-12">
                    <label for="message1">Message</label>
                    <textarea
                      class="form-control"
                      id="message1"
                      rows="3"
                      name="message"
                      v-model="emailData.message"
                    ></textarea>
                  </div>
                </div>
                <div class="form-row pt-2">
                  <div class="form-group">
                    <button type="submit" class="btn btn-primary mb-2">
                      Send <i class="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <div class="emailSpan">
              <p>
                Email:
                <a href="mailto:jamesmcerniglia@gmail.com" class="emailLink"
                  >jamesmcerniglia@gmail.com</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col"></div>
    </div>
    <ftr class="ftr" />
  </div>
</template>

<script>
/* eslint-disable no-console */
// import ApiMethods from "@/services/ApiMethods";
import emailjs from "emailjs-com";
import ftr from "./ftr.vue";
import ApiMethods from "../services/ApiMethods";
export default {
  name: "app",

  components: { ftr },
  data() {
    return {
      emailData: { user_email: "", user_name: "", message: "" },
      
      pendingLikes: {},
      projects: [
        {
          _id: "5f0e4ef4a1b18535a0bbc253",
          id: "os.gg",
          name: "Old School.GG",
          developers: ["James Cerniglia"],
          skillsUsed: ["Node", "Vue", "Mongo"],
          imgUrl:
            "https://cf-simple-s3-origin-cloudfrontfors3-515897288344.s3.amazonaws.com/Projects/osgg2.png",
          codeUrl: "https://github.com/cerniglj1/os.gg",
          liveUrl: "https://osgg.netlify.app/",
          likes: 174,
          liveBool: true,
          description:
            "Web App that calls the Old School Runescape Hiscores and displays account ranking and information. Allows players to see what they are able to do at their current skill level.",
          longDescription: "",
          clicked: false,
          sourceBool: true,
        },
        {
          _id: "5f0e4f192be6b223582558d2",
          id: "cornerstone",
          name: "Cornerstone Work Tracker",
          developers: ["James Cerniglia", "Stefan", "Amber"],
          skillsUsed: ["Python", "Kivy", "MySQL"],
          imgUrl:
            "https://cf-simple-s3-origin-cloudfrontfors3-515897288344.s3.amazonaws.com/Projects/cornerstone.png",
          liveBool: false,
          likes: 35,
          codeUrl: "https://github.com/Stefunga/CSINC",
          liveUrl: "",
          liveUrlReason: "Code not disclosed due to NDA.",
          description:
            "Employee Management Software developed for https://crst.net",
          clicked: false,
          sourceBool: false,
        },
        {
          _id: "5f8a9741c05d91d6c94addb4",
          id: "osrsquesttool",
          name: "Osrs Quest Tool",
          developers: ["James Cerniglia"],
          skillsUsed: ["Javascript", "Node", ""],
          clicked: false,
          liveBool: true,
          description:
            "Node package made for developers to easily access organized data from Old School Runescape.",
          likes: 12,
          codeUrl: "https://github.com/cerniglj1/OSRSQuestTool",
          liveUrl: "https://www.npmjs.com/package/osrs-quest-tool",
          longDescription: "",
          imgUrl:
            "https://cf-simple-s3-origin-cloudfrontfors3-515897288344.s3.amazonaws.com/Projects/hydra2.png",
          sourceBool: true,
        },
      ],
    };
  },

  mounted() {
    this.router = this.getProjects();
    // console.log(this.projects);

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
    sendEmail: function (e) {
      console.log(this.emailData);
      emailjs
        .sendForm(
          "service_1",
          "template_1",
          e.target,
          "user_iNFzjHUj7RT9VwggkCfsD"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result);
            this.$router.push({
              name: "thankyou",
              params: {
                user_email: this.emailData.user_email,
                user_name: this.emailData.user_name,
                user_message: this.emailData.message,
              },
            });
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    },
    getProjects: async function () {
      var p = await ApiMethods.getProjects();
      this.projects = p.data.result;
    },
    getImg: function (x) {
      return x.toString();
    },
    projectCartLike: function (b, proj) {
      var timeout = 2000;
      proj.clicked = true;
      var btn = document.getElementById(proj.id);
      proj.likes++;
      proj.timeout = setTimeout(function () {
        console.log({ a: document.getElementById(proj.id) });
        ApiMethods.updateProjectLike(proj.id, proj.likes);
        document.getElementById(proj.id).blur();
      }, timeout);
      console.log({ proj, btn, a: btn.classList });

      // if (btn.target.closest(".likesBtn")) {
      //   this.AddStar(
      //     btn.target.closest("[data-id]").getAttribute("data-id"),
      //     btn.target.closest(".likesBtn"),
      //     btn.target.closest("[data-id]")
      //   );
      //   const rect = btn.target.getBoundingClientRect();
      //   this.SpawnStarParticle(
      //     btn.x || rect.left + Math.random() * (rect.right - rect.left),
      //     rect.top + Math.random() * (rect.bottom - rect.top)
      //   );
      //   btn.preventDefault();
      // }
    },
  },
};
</script>

<style scoped>
/* Contact Me Sectio // Reach out to me */
.contactMeSection {
  border-radius: 0.5rem;
  background-color: rgb(47, 73, 69);
  color: white;
}

#home {
  color: black;
  /* font-family: Arial, Helvetica, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 2rem;

  overflow-y: hidden;
  overflow: hidden;
}
.projectCardBody {
  background: rgba(0, 0, 0, 0.5);
  margin: 5%;
}
.projectCodeIcon {
  color: white;
  font-size: 15px;
}
.projectCodeIcon .disabled {
  color: grey;
  font-size: 11px;
}

.emailSpan {
  background-color: #030a66;
  border-radius: 0.5rem;
  min-width: 22%;
  padding-left: 2%;
  padding-right: 2%;
}

.likesBtn {
  width: 25%;
  background: #00eb1fa2;
  background: #00eb1fa2;
  /* color: #013f09a2; */
  /* border-top-right-radius: 20px; */
  /* border-bottom-left-radius: 20px; */
  overflow: hidden;
}

.likesBtn:hover {
  width: 25%;
  background: #00eb1fa2;
  background: #00eb1fa2;
  color: #004b0a;
  /* border-top-right-radius: 20px; */
  /* border-bottom-left-radius: 20px; */
  overflow: hidden;
}

/* Likes Button Properties */
.likesBtn:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
}

.likesBtn:focus {
  background: #013f09a2;
  /* border: 1px solid #013f09a2; */
  font-size: 19px;
  color: white;
  outline: none;
  box-shadow: none;

  /* animation-delay: -2s; */
}

@keyframes likeTransition {
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

.projectCard:hover {
  box-shadow: 10px 10px 4px #000000;
}

.projectCard {
  color: white;
  background: rgb(2, 64, 75);
  box-shadow: 5px 5px #000000;
  border: none;
  max-width: 310px;
  transition: 0.15s ease-in-out;
  background-size: auto;
  /* border-radius: 17px; */
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
.codeBtn {
  border-radius: 0.15rem;
  display: inline-block;
  font-weight: 400;
  color: white;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: green; /*rgb(15, 155, 96);*/
  border: 1px solid transparent;
  font-size: 1rem;
}
.demoBtn {
  border-radius: 0.15rem;
  display: inline-block;
  font-weight: 400;
  color: white;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: rgb(2, 64, 75);
  border: 1px solid transparent;
  font-size: 1rem;
}
.projectBtn {
  display: inline-block;
  font-weight: 400;
  color: white;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: black;
  border: 1px solid transparent;
  font-size: 1rem;
}
.profileBtn {
  padding: 10px;
  background-position: right top;
  background: green;
  border: none;
  border-radius: 2px;
  /* border: 2px solid white; */
  color: white;

  /* 
   */
  display: inline-block;
  font-weight: 400;
  color: white;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  box-shadow: 5px 5px #000000;
  font-size: 1rem;
  line-height: 1.5;
  transition: 0.15s ease-in-out;
}
.profileBtn:hover {
  box-shadow: 10px 10px 4px #000000;
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
