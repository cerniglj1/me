
<template>
  <div id="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col-6">
          <div class="row">
            <div class="col">
              <h2 id="title">James Cerniglia</h2>
<<<<<<< HEAD
              <h4 id="position">Software & Web Developer</h4>
=======
              <h4 id="position">Software Engineer</h4>
>>>>>>> gh-pages
              <div class="landingButtons">
                <div class="d-flex justify-content-center">
                  <a
                    class="btn mr-4 profileBtn text-white"
                    type="button"
<<<<<<< HEAD
                    @click="scrollToSection()"
=======
                    @click="scrollToSection('projects')"
>>>>>>> gh-pages
                    id="projectBtn"
                  >
                    View Projects
                  </a>
                  <a
                    class="btn profileBtn"
                    id="resumeBtn"
                    type="button"
<<<<<<< HEAD
                    href="https://cf-simple-s3-origin-cloudfrontfors3-515897288344.s3.amazonaws.com/Projects/Resume+v2.pdf"
=======
                    href="../assets/JamesCerniglia.pdf"
>>>>>>> gh-pages
                    target="_blank"
                    rel="noopener"
                  >
                    View Resume
                  </a>
                </div>
              </div>
              <div
                class="d-flex justify-content-center mt-4 contactIconsWrapper"
              >
                <a
                  class="contactIcon githubLink ml-2"
                  href="https://github.com/cerniglj1"
                  target="_blank"
                  rel="noopener"
                  ><i class="fab fa-github fa-2x rounded"></i> </a
                ><a
                  class="contactIcon linkedInLink ml-2"
                  href="https://www.linkedin.com/in/jamescerniglia/"
                  target="_blank"
                  rel="noopener"
                >
                  <i class="fab fa-linkedin fa-2x rounded"></i> </a
                ><a
                  class="contactIcon twitterLink ml-2"
                  href="https://twitter.com/BIG_SQUEEZER"
                  target="_blank"
                  rel="noopener"
                >
                  <i class="fab fa-twitter-square fa-2x rounded"></i>
                </a>
              </div>

              <div class="ftr">
                <div id="icons"></div>
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

    <div class="container projectsContainer" :v-if="projects" id="myProjects">
      <h4>Projects</h4>
      <div class="d-flex justify-content-between">
        <!-- style changes background darkness and pulls background image for amazon s3 storage -->
        <div
          class="card projectCard m-2"
          v-for="p in projects"
          :key="p.name"
          :style="{
            backgroundImage:
<<<<<<< HEAD
              'linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.9)),url(' +
              p.imgUrl +
              ')',
          }"
        >
          <!-- <img class="card-img-top" :src="p.imgUrl" :alt="p.imgUrl" /> -->
=======
              'linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.7)),url(' +
              getImgUrl(p.imgUrl) +
              ')',
          }"
        >
          <!-- <img class="card-img-top" :src="`${p.imgUrl}`" :alt="p.imgUrl" /> -->
>>>>>>> gh-pages
          <div class="card-body projectCardBody">
            <h5 class="card-title">{{ p.name }}</h5>
            <p class="card-text">{{ p.description }}</p>
            <div class="d-flex projectCardButtonWrapper">
              <a
                :href="p.codeUrl"
                target="_blank"
                class="btn projectCodeBtn"
                :class="{ disabled: p.sourceBool == false }"
              >
                View Code
                <i class="fab fa-github projectCodeIcon"></i>
              </a>
              <a
                :href="p.liveUrl"
                target="_blank"
                class="btn projectDemoBtn"
                :class="{ disabled: p.liveBool == false }"
              >
                View Demo
                <i class="fas fa-location-arrow projectCodeIcon"></i
              ></a>
            </div>

            <hr class="hrStyle1" />
            <div class="d-flex justify-content-center">
              <div id="icons">
                <span
                  class="badge pythonBadge m-1"
                  v-if="
                    p.skillsUsed.includes('Python') ||
                    p.skillsUsed.includes('python')
                  "
                >
                  <img class="codeIcon" src="../assets/icons/python.png" />
                  Python
                </span>
                <span
                  class="badge kivyBadge m-1"
                  v-if="
                    p.skillsUsed.includes('Kivy') ||
                    p.skillsUsed.includes('kivy')
                  "
                >
                  <img class="codeIcon" src="../assets/icons/kivy.png" />
                  Kivy
                </span>
                <span
                  class="badge mysqlBadge m-1"
                  v-if="
                    p.skillsUsed.includes('MySQL') ||
                    p.skillsUsed.includes('mysql')
                  "
                >
                  <img class="codeIcon" src="../assets/icons/mysql.png" />
                  MySQL
                </span>
                <span
                  class="badge nodeBadge m-1"
                  v-if="
                    p.skillsUsed.includes('Node') ||
                    p.skillsUsed.includes('node')
                  "
                >
                  <img class="codeIcon" src="../assets/icons/nodejs.png" />
                  Node
                </span>
                <span
                  class="badge vueBadge m-1"
                  v-if="
                    p.skillsUsed.includes('Vue') || p.skillsUsed.includes('vue')
                  "
                >
                  <img class="codeIcon" src="../assets/icons/vue.png" />
                  Vue
                </span>
                <span
                  class="badge mongoBadge m-1"
                  v-if="
                    p.skillsUsed.includes('Mongo') ||
                    p.skillsUsed.includes('mongo')
                  "
                >
                  <img class="codeIcon" src="../assets/icons/mongodb.png" />
                  Mongo
                </span>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-between">
            <button
              class="btn projectLikeBtn"
              :id="p.id"
              v-on:click="projectCartLike(this, p)"
            >
              <i class="fab fa-gratipay heartBtn"></i>
              {{ p.likes }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <img src="../assets/test.png" style="max-height: 500px" />
      </div>
      <div class="col-6 contactMeSection">
        <div class="container pt-2">
          <h2>Email me! <i class="fas fa-envelope-open-text"></i></h2>
          <div>
            <div>
              <form class="contact-form needs-validation" novalidate>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      name="user_name"
                      id="inputName1"
                      v-model="emailData.userName"
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
                      v-model="emailData.userEmail"
                      placeholder="CharlieDar23@gmail.com"
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
                      v-model="emailData.userMessage"
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
          <hr class="hrStyle1" />
          <p>Or reach out to me directly at:</p>
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
      <div class="col-2"></div>
    </div>
    <!-- <ftr class="ftr" /> -->
  </div>
</template>

<script>
/* eslint-disable no-console */
import emailjs from "emailjs-com";
// import ftr from "./ftr.vue";
import ApiMethods from "../services/ApiMethods";
export default {
  name: "home",

  components: {
    /*ftr*/
  },
  data() {
    return {
      emailData: { userEmail: "", userName: "", userMessage: "" },

      pendingLikes: {},
      projects: [
        {
          _id: "5f0e4ef4a1b18535a0bbc253",
          id: "os.gg",
<<<<<<< HEAD
          name: "Old School.GG",
          developers: ["James Cerniglia"],
          skillsUsed: ["Node", "Vue", "Mongo"],
          imgUrl:
            "https://cf-simple-s3-origin-cloudfrontfors3-515897288344.s3.amazonaws.com/Projects/osgg2.png",
=======
          name: "OS Helper",
          developers: ["James Cerniglia"],
          skillsUsed: ["Node", "Vue", "Mongo"],
          imgUrl: "osgg2.png",
>>>>>>> gh-pages
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
<<<<<<< HEAD
          name: "Cornerstone Work Tracker",
          developers: ["James Cerniglia", "Stefan", "Amber"],
          skillsUsed: ["Python", "Kivy", "MySQL"],
          imgUrl:
            "https://cf-simple-s3-origin-cloudfrontfors3-515897288344.s3.amazonaws.com/Projects/cornerstone.png",
=======
          name: "Cornerstone Management Software",
          developers: ["James Cerniglia", "Stefan", "Amber"],
          skillsUsed: ["Python", "Kivy", "MySQL"],
          imgUrl: "cornerstone.png",
>>>>>>> gh-pages
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
<<<<<<< HEAD
          skillsUsed: ["Javascript", "Node", ""],
=======
          skillsUsed: ["Javascript", "Node"],
>>>>>>> gh-pages
          clicked: false,
          liveBool: true,
          description:
            "Node package made for developers to easily access organized data from Old School Runescape.",
          likes: 12,
          codeUrl: "https://github.com/cerniglj1/OSRSQuestTool",
          liveUrl: "https://www.npmjs.com/package/osrs-quest-tool",
          longDescription: "",
<<<<<<< HEAD
          imgUrl:
            "https://cf-simple-s3-origin-cloudfrontfors3-515897288344.s3.amazonaws.com/Projects/hydra2.png",
=======
          imgUrl: "hydra2.png",
>>>>>>> gh-pages
          sourceBool: true,
        },
      ],
    };
  },

  mounted() {
<<<<<<< HEAD
    this.router = this.getProjects();
  },
  methods: {
    scrollToSection: function () {
      window.scrollTo({
        top: 600,
        left: 100,
        behavior: "smooth",
      });
=======
    this.getProjects();
  },
  methods: {
    scrollToSection: function (section) {
      if (section == "projects") {
        window.scrollTo({
          top: 600,
          left: 100,
          behavior: "smooth",
        });
      }
>>>>>>> gh-pages
    },

    sendEmail: function (e) {
      var isValid = true;
      console.log(this.emailData, e, emailjs, isValid);

      /*emailjs
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
                user_email: this.emailData.userEmail,
                user_name: this.emailData.userName,
                user_message: this.emailData.userMessage,
              },
            });
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    */
    },
    getProjects: async function () {
      var p = await ApiMethods.getProjects();
      this.projects = p.data.result;
    },
<<<<<<< HEAD
    getImg: function (x) {
      return x.toString();
=======
    getImgUrl: function (x) {
      var buildStr = "../assets/projects/" + x.toString();
      console.log(buildStr);
      return buildStr;
>>>>>>> gh-pages
    },
    projectCartLike: function (b, proj) {
      var timeout = 2000;
      proj.clicked = true;
      var btn = document.getElementById(proj.id);
      proj.likes++;
      proj.timeout = setTimeout(function () {
        // console.log({ a: document.getElementById(proj.id) });
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
#home {
  color: black;
  /* font-family: Arial, Helvetica, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 2rem;
  padding-bottom: 2rem;
  overflow-y: hidden;
  overflow: hidden;
}

.contactIconsWrapper {
  display: flex;

  align-items: center;
  list-style: none;
}

.contactIconsWrapper a {
  color: white;
  font-size: 1rem;
  text-decoration: none;
  background: rgb(2, 64, 75);
  border-radius: 0.2rem;
  min-width: 60px;
  min-height: 60px;
  display: flex;
  margin: 0.5rem;
  justify-content: center;
  align-items: center;
  /* transition: 1s ease-in; */
  box-shadow: 5px 5px #000000;
}
.contactIconsWrapper a:hover {
  box-shadow: 8px 8px #000000;
}
.emailSpan {
  background-color: #030a66;
  border-radius: 0.5rem;
  min-width: 22%;
  padding-left: 2%;
  padding-right: 2%;
}
.projectLikeBtn {
  border-radius: 0.2rem;
  background: #eb5e00a2;
  color: white;
  /* color: #013f09a2; */
  /* border-top-right-radius: 20px; */
  /* border-bottom-left-radius: 20px; */
  overflow: hidden;
}

.projectLikeBtn:hover {
  background: #642901a2;
  color: white;
  /* border-top-right-radius: 20px; */
  /* border-bottom-left-radius: 20px; */
  overflow: hidden;
}

/* Likes Button Properties */
.projectLikeBtn:active {
  background-color: #642901a2;
  box-shadow: 0 5px #666;
}

.projectLikeBtn:focus {
<<<<<<< HEAD
  background:#642901a2;
=======
  background: #642901a2;
>>>>>>> gh-pages

  font-size: 19px;
  color: white;
  outline: none;
  box-shadow: none;
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
<<<<<<< HEAD
=======

>>>>>>> gh-pages
.projectCardBody {
  /* background: rgba(0, 0, 0, 0.5); */
  margin: 5%;
}
.projectCodeIcon {
  color: white;
  font-size: 15px;
}
.hrStyle1 {
  border: 0;
  height: 2px;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );
}
.badge {
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 100%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.pythonBadge {
  background: black;
  color: white;
}
.kivyBadge {
  background: black;
  color: white;
  text-align: center;
}
.mysqlBadge {
  /* background: linear-gradient(#144e61 0%, #e57911 100%); */
  background: #e57911;
  color: white;
}
.vueBadge {
  background: #1e6144;
  color: white;
}
.nodeBadge {
  background: #023b02;
  color: white;
}
.mongoBadge {
  background: #805d29;
  color: white;
}

.codeIcon {
  width: 15px;
  height: 15px;
}
.projectCardButtonWrapper {
  justify-content: space-evenly;
}
.projectCard {
  color: white;
  background: rgb(0, 24, 27);
  box-shadow: 5px 5px #000000;
  border: none;
  max-width: 33%;
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

.projectCodeBtn {
  padding: 0.5rem;
  border-radius: 0.2rem;
  display: inline-block;
  color: white;
  text-align: center;
  vertical-align: middle;

  background-color: rgb(22, 75, 22); /*rgb(15, 155, 96);*/
  border: 1px solid transparent;
  font-size: 1rem;
}
.projectCodeBtn:hover {
  background-color: rgb(8, 41, 8);
}
.projectDemoBtn {
  padding: 0.5rem;
  border-radius: 0.2rem;
  display: inline-block;
  color: white;
  text-align: center;
  vertical-align: middle;

  background-color: rgb(2, 64, 75);
  border: 1px solid transparent;
  font-size: 1rem;
}
.projectDemoBtn:disabled {
  padding: 0.5rem;
  border-radius: 0.2rem;
  display: inline-block;
  color: rgb(0, 0, 0);
  text-align: center;
  vertical-align: middle;

  background-color: rgb(102, 170, 182);
  border: 1px solid transparent;
  font-size: 1rem;
}
.projectDemoBtn:hover {
  background-color: rgb(2, 44, 51);
}
.projectBtn {
  display: inline-block;

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
  border-radius: 0.3rem;
  /* border: 2px solid white; */
  color: white;
  display: inline-block;
  font-weight: 400;
  color: white;
  text-align: center;
  vertical-align: middle;

  box-shadow: 5px 5px #000000;
  font-size: 1rem;
  line-height: 1.5;
  transition: 0.15s ease-in-out;
}
.profileBtn:hover {
  box-shadow: 10px 10px 4px #000000;
}

/* Contact Me Section Start // Reach out to me */
.contactMeSection {
  margin-top: 3rem;
  padding: 0.5rem;
  border-radius: 0.15rem;
  box-shadow: 5px 5px #000000;
  background-color: rgb(47, 73, 69);
  color: white;
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
/* Contact Me Section End // Reach out to me */

router-link {
  color: white;
}
</style>
