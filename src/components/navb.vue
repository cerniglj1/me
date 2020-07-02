<template>
  <div id="navb">
    <nav class="navbar navbar-expand-lg navbar-center stick-navbar">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars" id="mobileBars"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav navbar-center">
          <router-link id="RL" class-active="active" class="nav-link" to="/Home" exact>
            <li>
              <a class="nav-link">
                <i class="fas fa-home"></i> Home
              </a>
            </li>
          </router-link>
          <router-link id="RL" class-active="active" class="nav-link" to="/Projects" exact>
            <li>
              <a class="nav-link">
                <i class="fas fa-project-diagram"></i> Projects
              </a>
            </li>
          </router-link>
          <router-link id="RL" class-active="active" class="nav-link" to="/AboutMe" exact>
            <li>
              <a class="nav-link">
                <i class="far fa-address-card"></i> About Me
              </a>
            </li>
          </router-link>

          <!-- <li class="nav-item dropdown">
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
          </li>-->
        </ul>
      </div>
    </nav>
    <div class id="navBottom"></div>
  </div>
</template>

<script>

export default {
  name: "navb",
  fun_facts: [
    "Deadlifted 405 lbs May 2019",
    "Bench Pressed 225 lbs for 2 reps January 2020",
    "Deadlifted 405 lbs May 2019"
  ]
};
</script>
<style scoped>
#mobileBars {
  color: white;
  font-size: 2rem;
}
.navbar .navbar-collapse {
  text-align: center;
}

.nav-link {
  font-size: 16px;
  color: white;
}
.nav-link:hover {
  color: white;
}

.nav-item,
.nav-link {
  transition: all 0.2s ease-in-out;
  padding: 5px 30px;
  margin: 5px 10px;
  border-radius: 8px;
}
.navbar-brand {
  max-width: 50px;
  max-height: 50px;
}
#RL:hover {
  /* box-shadow: 0 5px 15px rgba(121, 253, 202, 0.7); */
  background: #0041a1;
}
/* #navBottom {
  border-bottom: 1rem dotted white;
  margin-left: auto;
  margin-right: auto;
  max-width: 150px;
} */
.router-link-active {
  background: #01255c;
}

.dropdown-menu {
  background-color: #414141;
}

.dropdown-item {
  color: white;
}

.dropdown-item:hover {
  background-color: rgba(65, 65, 65, 1);
  background-image: linear-gradient(
    rgba(121, 253, 202, 0.7),
    rgba(121, 253, 202, 0.7)
  );
}
#NavMenu {
  text-align: center;
}
.navbar-center {
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
}
</style>
