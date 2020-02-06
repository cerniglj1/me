<template>
  <div id="Projects">
    <h1>Projects</h1>
    <div class="container">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner">
              <div>
                <div
                  class="carousel-item"
                  :class="{ active: image.id === 0 }"
                  v-for="image in images"
                  v-bind:index="index"
                  v-bind:key="image.id"
                >
                  <div :class="{ crop: image.id === 0|| image.id ===1 }">
                    <img :src="getImgUrl(image.url)" class="d-block w-100" />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>{{image.informationTitle}}</h5>
                      <p>{{image.informationDetail}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
      </ul>
      <!-- <div v-for="image in images" v-bind:index="index" v-bind:key="image.id">
        <h5>{{image.informationTitle}} , {{image.url}} , {{image.informationDetail}}</h5>
        <img :src="getImgUrl(image.url)" class="d-block w-100" />
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsVue",
  components: {},
  data() {
    return {
      images: [
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
    getImgUrl(imageName) {
      var images = require.context("../assets/pics/", false, /\.png$/);
      return images("./" + imageName + ".png");
    }
  }
};
</script>

<style>
.carousel-item img {
  filter: brightness(50%);
}

#Projects {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-image: linear-gradient(rgba(65, 65, 65, 1) 40%, rgb(61, 77, 73));
  /* background-color:  */
}
.list-group,
.list-group-item {
  background-color: rgba(65, 65, 65, 1);
}
</style>
