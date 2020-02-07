<template>
  <div id="Contact">
    <!-- <h3>Contact Me</h3> -->
    <div class="container">
      <div class="row">
        <div class="col"></div>
        <div class="col" id="contactForm">
          <form name="contact" method="POST" action="/" data-netlify="true">
            <div class="row">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">Name</span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="First Name, Last Name etc..."
                  name="name"
                  aria-label="name"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <p></p>
            <div class="row">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">Email</span>
                </div>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Johndoe@gmail.com"
                  name="email"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div class="row">
              <div class="input-group mb-3">
                <div class="col">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">Contacting me for a</label>
                  </div>
                </div>
                <div class="col">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                      v-on:click="jobRelated = true"
                    />
                    <label class="form-check-label" for="inlineRadio1">Yes</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      v-on:click="jobRelated = false"
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label class="form-check-label" for="inlineRadio2">No</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="row" v-if="jobRelated">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelect01">Position Title:</label>
                </div>
                <select name="role[]" multiple class="custom-select" id="inputGroupSelect01">
                  <!-- <option value="Software Engineer">Software Engineer</option>
                  <option value="Backend Developer">Backend Developer</option>-->
                  <option value="Bugcatcher">Bugcatcher</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div class="row" v-if="otherPosition">
              <div class="input-group input-group-lg mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-lg">Position Title:</span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  name="message"
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
            </div>
            <div class="row">
              <div class="input-group input-group-lg mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-lg">Message:</span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  name="message"
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
            </div>
            <div class="row">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactVue",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      otherPosition: false,
      jobRelated: false,
      positions: [
        { id: 0, title: "Software Developer" },
        { id: 1, title: "Software Developer" },
        { id: 2, title: "Software Developer" },
        { id: 3, title: "Software Developer" }
      ]
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
