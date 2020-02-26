<template>
  <div id="HobbiesVue">
    <div class="container">
      <h3>Hobbies</h3>

      <table class="table">
        <thead>
          <tr>
            <th scope="row">Summoner Data</th>
            <th scope="row">Info</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Me: {{ summonerData }}</td>
            <td>Info Test: {{ info }}</td>
          </tr>
          <tr>
            <td>Dani: {{ dani }}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <table class="table">
        <thead>
          <tr>
            <th scope="row">OSRS Accounts</th>
            <th scope="row">Not Poop</th>
            <th scope="row">Jimbo Jango</th>
          </tr>
          <tr v-for="(skill,index) in notpoop.main.skills" v-bind:key="skill">
            <td></td>
            <td v-if="notpoop != null">{{index}}: {{skill.level}}</td>
            <td v-if="jimbojango != null">{{index}}: {{jimbojango.main.skills[index].level}}</td>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  </div>
</template>

<script>
const API_URL = "http://localhost:4000/";
export default {
  name: "HobbiesVue",
  data() {
    return {
      summonerData: null,
      notpoop: null,
      jimbojango: null,
      info: null,
      dani: null
    };
  },
  mounted() {
    fetch(API_URL + "osrsAccounts/" + "not_poop")
      .then(response => response.json())
      .then(result => {
        this.notpoop = result;
      });
    fetch(API_URL + "osrsAccounts/" + "jimbo_jango")
      .then(response => response.json())
      .then(result => {
        this.jimbojango = result;
      });
  },
  created: function() {}
};
</script>
<style>
.table {
  color: white;
}
#HobbiesVue {
  background-image: linear-gradient(rgba(65, 65, 65, 1) 40%, rgb(61, 77, 73));
}
</style>
