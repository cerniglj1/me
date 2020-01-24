<template>
  <div id="users">
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <div class="nav-item">
          <router-link to="home">
            <a class="nav-link">Home</a>
          </router-link>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item"></li>
            <li class="nav-item">
              <router-link to="users">
                <a class="nav-link">Users</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="projects">
                <a class="nav-link">Projects</a>
              </router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Dropdown</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  fun_facts: [
    "Deadlifted 405 lbs May 2019",
    "Bench Pressed 225 for 2 lbs January 2020",
    "Deadlifted 405 lbs May 2019"
  ]
};
</script>
<style>
.navbar {
  background-color: rgb(61, 61, 61);
}
.nav-item {
  color: green;
  background-color: purple;
}
.nav-link {
  padding: 5px;
  margin-right: 10px;
  background-color: aqua;
}
</style>
