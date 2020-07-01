<template>
  <div id="skills">
    <div class="d-flexs justify-content-center">
      <div class="card projectCard" v-for="p in projects" :key="p.name">
        <img class="card-img-top" :src="p.imgUrl" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{{p.name}}</h5>
          <p class="card-text">{{p.description}}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "skills",
  data() {
    return {
      projects: [
        {
          name: "Cornerstone Work Tracker",
          developers: ["James Cerniglia", "Stefan", "Amber"],
          skillsUsed: ["Python", "Kivy", "MySQL"],
          imgUrl: "@/assets/logo.png",
          liveCodeBool: false,
          description:
            "Software used to create tasks for managers to assign to workers. Compatible with RaspberryPi and windows."
        },
        {
          name: "Cornerstone Work Tracker2",
          developers: ["James Cerniglia", "Stefan", "Amber"],
          skillsUsed: ["Python", "Kivy", "MySQL"],
          imgUrl: "@/assets/logo.png",
          description:
            "Software used to create tasks for managers to assign to workers. Compatible with RaspberryPi and windows."
        }
      ]
    };
  },
  mounted() {},
  created: function() {}
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
  background: grey;
}
</style>
