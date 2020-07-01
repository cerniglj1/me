<template>
  <div id="exp">
    <h1>exp</h1>

    <div class="row p-4">
      <div class="col-lg">
        <h4>Data Related</h4>
        <ul class="list-group list-group-flush">
          <li class="list-group-item p-0 m-1" v-for="image in dataImages" :key="image.id">
            <div class="card bg-dark text-white">
              <img class="card-img" :src="getProjectsImage(image.url)" alt="Card image" />
              <div class="card-img-overlay marginTopCard">
                <h5 class="card-title">{{image.informationTitle}}</h5>
                <p class="card-text">{{image.informationDetail}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="col-sm">
        <h4>Software</h4>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div class="card bg-dark text-white">
              <img class="card-img" :src="getProjectsImage('CSMS')" alt="Card image" />
              <div class="card-img-overlay marginTopCard">
                <h5 class="card-title pb-2">Cornerstone Managment Software</h5>

                <p
                  class="card-text"
                >Management Software built using Python with Kivy interfaces. Used on RaspberryPi and PC. Allows employees to sign in and choose the work they do in order for the business to estimate time spent on projects.</p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- <div v-for="image in images" v-bind:index="index" v-bind:key="image.id">
        <h5>{{image.informationTitle}} , {{image.url}} , {{image.informationDetail}}</h5>
        <img :src="getImgUrl(image.url)" class="d-block w-100" />
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "exp",
  components: {},
  data() {
    return {
      api_url: "https://jamescerniglia.herokuapp.com/",
      // api_url: "http://localhost:4000/",
      dataImages: [
        {
          id: 0,
          url: "nycSubway2",
          informationTitle: "NYC Subway mapping using Folium and python",
          informationDetail:
            "Mapped NYC subway points with lattitude and longitude data from data.ny.gov, green means entry and exits, red means exit only"
        },
        {
          id: 1,
          url: "FarmersMarket2",
          informationTitle: "NYS Farmers Markets",
          informationDetail:
            "Mapped NYC Farmers Markets based on lattitude and longitude; included contact info, addresses, who runs it, facebook groups and website associated with the plotted market."
        }
      ]
      // image4: { imageUrl: "../assets/pics/", informationTitle: "", informationDetail: "" }
    };
  },
  methods: {
    getProjectsImage(imageName) {
      return this.api_url + "Cerniglia/Projects/" + imageName + ".png";
    }
  }
};
</script>

<style scoped>
.card img {
  filter: brightness(30%);
}
#Projects {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background: linear-gradient(rgba(65, 65, 65, 1) 40%, rgb(61, 77, 73));
  /* background-color:  */
}
.marginTopCard {
  margin-top: 80px;
  font-size: 13px;
}
.list-group,
.list-group-item {
  background: transparent;
}
</style>
