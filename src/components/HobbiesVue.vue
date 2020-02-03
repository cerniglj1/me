<template>
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
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "HobbiesVue",
  data() {
    return { summonerData: null, info: null, dani: null };
  },
  created: function() {}
};
</script>
<style>
.table {
  color: white;
}
</style>
