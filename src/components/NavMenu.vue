<template>
  <div id="NavMenu">
    <nav class="navbar navbar-expand-lg navbar-center">
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
        <ul class="navbar-nav navbar-center">
          <router-link tag="li" class-active="active" class="nav-link" to="Home" exact>
            <a class="nav-link">Home</a>
          </router-link>

          <router-link tag="li" class-active="active" class="nav-item" to="Projects" exact>
            <a class="nav-link">Projects</a>
          </router-link>
          <router-link tag="li" class-active="active" class="nav-item" to="Hobbies" exact>
            <a class="nav-link">Hobbies</a>
          </router-link>
          <router-link tag="li" class-active="active" class="nav-item" to="Contact" exact>
            <a class="nav-link">Contact Me</a>
          </router-link>
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
</template>

<script>
export default {
  name: "NavMenu",
  fun_facts: [
    "Deadlifted 405 lbs May 2019",
    "Bench Pressed 225 for 2 lbs January 2020",
    "Deadlifted 405 lbs May 2019"
  ]
};
</script>
<style>
.navbar .navbar-collapse {
  text-align: center;
}

.navbar {
  background-color: #414141;
  background-image: linear-gradient(
    rgba(90, 90, 90, 0.479),
    55%,
    rgb(61, 61, 61)
  );
}

.nav-link {
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
.nav-link:hover{
   color:  rgba(121, 253, 202, 0.7);
}

.nav-item:hover {

  box-shadow: 0 5px 15px   rgba(121, 253, 202, 0.7);
;
}
.router-link-active {
  background: rgba(121, 253, 202, 0.7);
}
.active {
  color: blue;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
}

.dropdown-menu {
  background-color: #414141;
}

.dropdown-item {
  color: white;
}

.dropdown-item:hover {
  background-color: #414141;
  background-image: linear-gradient(
    rgba(253, 80, 0, 0.479),
    rgba(253, 80, 0, 0.479)
  );
}

.active a {
  color: white;
}

.navbar-center {
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
}
</style>
