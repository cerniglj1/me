
<template>
  <div id="skills">
    <div id="test">
      <div class="container projectsContainer mt-3" :v-if="projects">
        <div class="d-flex justify-content-center">
          <div class="card projectCard m-3 shadow-lg" v-for="p in projects" :key="p.name">
            <img class="card-img-top" :src="p.imgUrl" :alt="p.imgUrl" />
            <div class="card-body">
              <h5 class="card-title">{{p.name}}</h5>
              <p class="card-text">{{p.description}}</p>
              <div class="d-flex justify-content-around">
                <a
                  class="btn btn-success viewCodeBtn"
                  :href="p.codeUrl"
                  :class="{ disabled: p.codeUrl == '' }"
                >View Code</a>
                <a
                  class="btn btn-info"
                  :class="{ disabled: p.liveUrl == '' }"
                  :href="p.liveUrl"
                >Live Software</a>
                <!-- <router-link
                  class="btn btn-info"
                  :class="{ disabled: p.liveUrl == '' }"
                  :to="p.liveUrl"
                >Live Software</router-link>-->
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
  </div>
</template>

<script>
import ApiMethods from "../services/ApiMethods";
export default {
  name: "skills",
  data() {
    return {
      projects: null,
    };
  },

  mounted() {
    /* eslint-disable no-console */
    this.getProjects();
    console.log(this.projects);
  },
  methods: {
    getProjects: async function () {
      var p = await ApiMethods.getProjects();
      this.projects = p.data.result;
    },
  },
  created: function () {},
};
</script>
<style scoped>
#skills {
  font-family: "Josefin Sans", Helvetica, Arial, sans-serif;
  /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* background-color: rgba(65, 65, 65, 1); #0064ff */
  color: white;
  padding-top: 10px;
  margin-bottom: 800px;
  overflow: hidden;
}
.table {
  color: white;
}

.jumbotron {
  background: black;
}
template {
  scroll-behavior: smooth;
}


.projectCard {
  background: rgb(2, 64, 75);
  max-width: 310px;
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
  max-width: 310px;
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
.list-group-skill {
  background: #790a8f;
  margin-bottom: 1px;
}
.projectsContainer {
  border-radius: 15px;
}
</style>
