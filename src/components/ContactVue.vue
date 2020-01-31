<template>
  <div id="Contact">
    <h3>Contact Me</h3>
    <div class="container">
      <div class="row">
        <div class="col"></div>
        <div class="col">
          <form name="contact" method="POST" action="/" data-netlify="true">
            <div class="row">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">Name</span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  name="name"
                  aria-label="Username"
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

            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Your Role:</label>
              </div>
              <select name="role[]" multiple class="custom-select" id="inputGroupSelect01">
                <option value="leader">Leader</option>
                <option value="follower">Follower</option>
              </select>
            </div>
            <div class="input-group input-group-lg">
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

            <button type="submit" class="btn btn-primary">Submit</button>
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
    return { msg: "Welcome to Your Vue.js App" };
  },
  created: function() {}
};
</script>
<style>
</style>
