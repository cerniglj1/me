<template>
  <div id="Contact">
    <!-- <h3>Contact Me</h3> -->
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-lg" id="contactForm"></div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactVue",
  data() {
    return {
      msg: "Contact me anytime"
    };
  },
  created: function() {}
};
</script>
<style>
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
