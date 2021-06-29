<template>
  <div id="contact">
    <div class="container pt-2">
      <div>
        <div>
          <h2>Email me! <i class="fas fa-envelope-open-text"></i></h2>
          <div>
            <div>
              <form class="contact-form needs-validation" novalidate>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      name="user_name"
                      id="inputName1"
                      v-model="emailData.userName"
                      placeholder="Charles Darwin"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      name="user_email"
                      v-model="emailData.userEmail"
                      placeholder="CharlesDarwin23@gmail.com"
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-12">
                    <label for="message1">Message</label>
                    <textarea
                      class="form-control"
                      id="message1"
                      rows="3"
                      name="message"
                      v-model="emailData.userMessage"
                    ></textarea>
                  </div>
                </div>
                <div class="form-row pt-2">
                  <div class="form-group">
                    <button type="submit" class="btn btn-primary mb-2">
                      Send <i class="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <hr class="hrStyle1" />
          <p>Or reach out to me directly at:</p>
          <div class="d-flex justify-content-center">
            <div class="emailSpan">
              <p>
                Email:
                <a href="mailto:jamesmcerniglia@gmail.com" class="emailLink"
                  >jamesmcerniglia@gmail.com</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterVue />
  </div>
</template>

<script>
import FooterVue from "./FooterVue.vue";

export default {
  name: "contact",
  components: {
    FooterVue,
  },
  data() {
    return { emailData: { userEmail: "", userName: "", userMessage: "" } };
  },
};
</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
.emailSpan {
  background-color: #030a66;
  border-radius: 0.5rem;
  min-width: 22%;
  padding-left: 2%;
  padding-right: 2%;
}
</style>