<template>
  <div
    :v-if="project != null"
    :key="project.name"
    :style="{
      backgroundImage:
        'linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.7)),url(' +
        getImgUrl(project.imgUrl) +
        ')',
    }"
  >
    <!-- <img class="card-img-top" :src="`${project.imgUrl}`" :alt="project.imgUrl" /> -->
    <div class="card-body project-card-body">
      <div class="row card-top">
        <div class="col-6">
          <div class="project-title">{{ project.name }}</div>
        </div>
        <div class="col-3">
          <a
            :href="project.liveUrl"
            target="_blank"
            class="btn project-demo-btn"
            :class="{ disabled: project.liveBool == false }"
          >
            <i class="fas fa-location-arrow project-code-icon"></i
          ></a>
        </div>
        <div class="col-3">
          <a
            :href="project.codeUrl"
            target="_blank"
            class="btn project-code-btn"
            :class="{ disabled: project.sourceBool == false }"
          >
            <i class="fab fa-github project-code-icon"></i>
          </a>
        </div>
      </div>

      <p class="card-text project-description">{{ project.description }}</p>

      <hr class="hrStyle1" />
      <div class="d-flex justify-content-center">
        <div id="icons">
          <span
            class="badge python-badge m-1"
            v-if="project.skillsUsed.includes('python')"
          >
            <img class="codeIcon" src="../assets/icons/python.png" />
            Python
          </span>
          <span
            class="badge kivyBadge m-1"
            v-if="project.skillsUsed.includes('kivy')"
          >
            <img class="codeIcon" src="../assets/icons/kivy.png" />
            Kivy
          </span>
          <span
            class="badge mysqlBadge m-1"
            v-if="project.skillsUsed.includes('mysql')"
          >
            <img class="codeIcon" src="../assets/icons/mysql.png" />
            MySQL
          </span>
          <span
            class="badge nodeBadge m-1"
            v-if="
              project.skillsUsed.includes('Node') ||
              project.skillsUsed.includes('node')
            "
          >
            <img class="codeIcon" src="../assets/icons/nodejs.png" />
            Node
          </span>
          <span
            class="badge vueBadge m-1"
            v-if="project.skillsUsed.includes('vue')"
          >
            <img class="codeIcon" src="../assets/icons/vue.png" />
            Vue
          </span>
          <span
            class="badge mongoBadge m-1"
            v-if="project.skillsUsed.includes('mongo')"
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
        :id="project.id"
        v-on:click="projectCartLike(this, p)"
      >
        <i class="fab fa-gratipay heartBtn"></i>
        {{ project.likes }}
      </button>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */

import ApiMethods from "../services/ApiMethods";
export default {
  name: "ProjectCard",

  components: {},
  data() {
    return {
      project: null,
    };
  },

  mounted(params) {
    console.log(params, this);
    this.project = this.$attrs.project;
  },
  methods: {
    getImgUrl: function (x) {
      var buildStr = "../assets/projects/" + x.toString();

      return buildStr;
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
    },
  },
};
</script>

<style scoped>
.card-top {
  margin-bottom: 0.3rem;
}

.project-title {
  background: var(--grey3);
  padding: 0.1rem;

  border-radius: 0.1rem;
  margin-bottom: auto;
}
.project-description {
  background: var(--grey3);
  border-radius: 0.1rem;
  padding: 0.1rem;
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
  background: #642901a2;

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

.project-card:hover {
  box-shadow: 10px 10px 4px var(--or4);
}

.project-card-body {
  /* background: rgba(0, 0, 0, 0.5); */
  margin: 5%;
}

.hrStyle1 {
  border: 0;
  height: 2px;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    var(--or1),
    rgba(255, 255, 255, 0)
  );
}
.badge {
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 100%;
  font-weight: 100;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.python-badge {
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
.card {
  color: white;
  background: rgb(0, 24, 27);
  box-shadow: 5px 5px var(--or4);
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

.project-code-btn {
  display: inline-block;

  color: white;
  text-align: center;
  font-size: 1rem;

  background-color: var(--grey3); /*rgb(15, 155, 96);*/
}
.project-code-icon {
  color: white;
}

.project-code-btn:hover {
  background-color: var(--grey4);
}
.project-demo-btn {
  display: inline-block;
  color: white;
  text-align: center;
  vertical-align: middle;
  background-color: var(--or3);
  border: 1px solid transparent;
  font-size: 1rem;
}
.project-demo-btn:disabled {
  background-color: var(--or4);
}
.project-demo-btn:hover {
  background-color: var(--or4);
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
</style>
