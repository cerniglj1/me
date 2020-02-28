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
        <thead></thead>
        <tbody></tbody>
      </table>
    </div>
  </div>
</template>

<script>
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
  mounted() {},
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
