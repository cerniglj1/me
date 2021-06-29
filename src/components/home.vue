
<template>
  <div id="home">
    <div class="container-fluid">
      <div class="row d-flex justify-content-center">
        <div class="col-3">
          <img
            src="../assets/canyons/me.jpg"
            class="pic-of-me"
            style="max-height: 500px"
          />
        </div>
        <div class="col-4">
          <h2 id="title">Hi, my name is James Cerniglia</h2>
          <h4 id="description">Software Engineer</h4>
          <div class="landingButtons d-flex justify-content-center">
            <a
              class="btn mr-4 text-white projectBtn"
              type="button"
              @click="scrollToSection('projects')"
              id="projectBtn"
            >
              View Projects
            </a>
            <a
              class="btn profileBtn"
              id="resumeBtn"
              type="button"
              href="../JamesCernigliaResume.pdf"
              target="_blank"
              rel="noopener"
            >
              View Resume
            </a>
          </div>

          <div class="d-flex justify-content-center mt-4 contactIconsWrapper">
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

          <!-- <img src="../assets/test.png" style="max-height: 500px" /> -->
          <!-- <img src="../assets/t1.jpg" style="max-height: 500px" /> -->
        </div>
      </div>
    </div>
    <div class="projects-container-top"></div>
    <div class="projects-container" :v-if="projects != null" id="myProjects">
      <div class="container">
        <h4>Projects</h4>
        <div class="d-flex">
          <ProjectCard
            class="card project-card m-2"
            v-for="p in projects"
            :key="p.name"
            :project="p"
          />
        </div>
      </div>
    </div>
    <div class="container" :v-if="projects" id="mySkills" hidden>
      <h4>Skills</h4>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <FooterVue class="ftr" />
  </div>
</template>

<script>
/* eslint-disable no-console */
import ProjectCard from "./ProjectCard";
import FooterVue from "./FooterVue";
import ApiMethods from "../services/ApiMethods";

export default {
  name: "home",
  components: {
    FooterVue,
    ProjectCard,
  },
  data() {
    return {
      pendingLikes: {},
      projects: [
        {
          _id: "5f0e4ef4a1b18535a0bbc253",
          id: "os.gg",
          name: "OS Helper",
          developers: ["James Cerniglia"],
          skillsUsed: ["node", "vue", "mongo", "express"],
          imgUrl: "osgg2.png",
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
          name: "Cornerstone Management Software",
          developers: ["James Cerniglia", "Stefan", "Amber"],
          skillsUsed: ["python", "kivy", "mysql"],
          imgUrl: "cornerstone.png",
          liveBool: false,
          likes: 35,
          codeUrl: "https://github.com/Stefunga/CSINC",
          liveUrl: "",
          liveUrlReason: "Code not disclosed due to NDA.",
          description:
            "Employee Management Software developed for https://crst.net.",
          clicked: false,
          sourceBool: false,
        },
        {
          _id: "5f8a9741c05d91d6c94addb4",
          id: "osrsquesttool",
          name: "Osrs Quest Tool",
          developers: ["James Cerniglia"],
          skillsUsed: ["Javascript", "Node"],
          clicked: false,
          liveBool: true,
          description:
            "Node package made for developers to easily access organized data from Old School Runescape.",
          likes: 12,
          codeUrl: "https://github.com/cerniglj1/OSRSQuestTool",
          liveUrl: "https://www.npmjs.com/package/osrs-quest-tool",
          longDescription: "",
          imgUrl: "hydra2.png",
          sourceBool: true,
        },
      ],
    };
  },

  mounted() {
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
    },

    getProjects: async function () {
      var p = await ApiMethods.getProjects();
      this.projects = p.data.result;
    },
  },
};
</script>


<style scoped>
.pic-of-me {
  border-radius: 50%;
  max-width: 97%;
  box-shadow: 0px 0px 2rem var(--or3);
}

.projects-container-top {
  /* background: var(--or3); */
  /* background: #000000; */

  background-repeat: no-repeat;
  background-size: cover;
}
.projects-container {
  /* background: var(--or2); */
  /* background-image: url("../assets/canyon2.png"); */
  padding-bottom: 2rem;
  padding-top: 2rem;
  /* padding-top: 7rem; */
  margin-top: 4rem;
}
#home {
  color: black;
  background: var(--grey1);
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
  transition: 0.15s ease-in-out;
  color: white;
  font-size: 1rem;
  text-decoration: none;
  background: var(--or1);
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

.projectCard img {
  max-height: 220px;
  max-width: 348px;
}

.list-group-skill {
  background: #790a8f;
  margin-bottom: 1px;
}

.projectBtn {
  padding: 10px;
  background-position: right top;
  background: var(--or3);
  /* border: 2px solid white; */
  color: white;
  display: inline-block;
  font-weight: 400;
  color: white;
  box-shadow: 5px 5px #000000;
  text-align: center;
  vertical-align: middle;
}

.projectBtn:hover {
  background: var(--or2);
  box-shadow: 10px 10px 4px #000000;
}

.profileBtn {
  padding: 10px;
  background-position: right top;
  background: var(--or3);
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
  background: var(--or2);
  box-shadow: 10px 10px 4px #000000;
}

router-link {
  color: white;
}
</style>
