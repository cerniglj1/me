
<template>
  <div id="Contact">
    <!-- <h3>Contact Me</h3> -->
    <div class="container">
      <div class="row">
        <div class="col-2"></div>
        <div class="col-6" id="contactForm">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Contact Me</h5>
              <p
                class="card-text"
              >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card-body">
            <form
              name="ask-question"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
export default {
  name: "ContactVue",
  data() {
    return {
      msg: "Contact me anytime",
      panelists: ["Evan You", "Chris Fritz"],
      currentPanelist: "Evan You"
    };
  },
  methods: {
    updatePanelist(ev) {
      console.log(ev);
      this.currentPanelist = ev.target.value;
    }
  },

  created: function() {}
};
</script>
<style>
.container {
  padding-bottom: 1200px;
}
.form-control,
.input-group-prepend {
  background-color: rgba(65, 65, 65, 1);
  color: white;
}
.input-group-text {
  background-color: rgb(7, 85, 62);
  color: white;
}
.form-control:focus {
  background-color: rgba(65, 65, 65, 1);
  color: white;
}
#contactForm {
  text-align: center;
}
#Contact {
  background-image: linear-gradient(rgba(65, 65, 65, 1) 40%, rgb(61, 77, 73));
}
</style>
