<template>
  <div id="thankyou">
    <div class="container pt-2">
      <div class="d-flex justify-content-center" v-if="user_name">
        <h3>
          Thank you for reaching out, {{ user_name }}!
          
        </h3>
      </div>
      <div class="d-flex justify-content-center" v-if="user_name">
        <h3>I will get back to you as soon as possible.</h3>
      </div>
      <div class="d-flex justify-content-center" v-if="!user_name">
        <h3><i class="far fa-dizzy"></i> You got here sneakily..</h3>
      </div>
    </div>
    <ftr class="ftr" />
  </div>
</template>

<script>
/* eslint-disable no-console */
import ftr from "./ftr.vue";
export default {
  name: "thankyou",
  components: { ftr },
  data() {
    return { msg: "thankyou", user_name: "", user_email: "", user_message: "" };
  },
  created: function () {
    console.log(this.$route.params);
    this.user_name = this.$route.params.user_name;
    this.user_email = this.$route.params.user_email;
    this.user_message = this.$route.params.user_message;
  },
  methods: {},
};
</script>
<style scoped>
</style>
