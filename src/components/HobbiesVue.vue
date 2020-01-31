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
import axios from "axios";

export default {
  name: "HobbiesVue",
  data() {
    return { summonerData: null, info: null, dani: null };
  },
  created: function() {
    const riot_api_key = "RGAPI-6e89fe68-5185-4845-8604-7962a7b40db8";
    const SUMMONER_NAME = "BIG%20SQUEEZER";
    axios
      .get(
        "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
          SUMMONER_NAME,
        {
          headers: {
            "X-Riot-Token": riot_api_key,
            "Accept-Language": "en-US,en;q=0.9"
          }
        }
      )
      .then(res => {
        this.info = res;
        this.summonerData = res;
      })
      .catch(error => (this.info = error));

    axios
      .get(
        "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/slore?api_key=RGAPI-6e89fe68-5185-4845-8604-7962a7b40db8",
        {
          headers: {
            "X-Riot-Token": riot_api_key,
            "Accept-Language": "en-US,en;q=0.9"
          }
        }
      )
      .then(res => {
        this.dani = res.data;
      })
      .catch(error => (this.dani = error));

    // axios
    // .get("https://api.coindesk.com/v1/bpi/currentprice.json")
    // .then(response => (this.info = response));
  }
};
</script>
<style>
.table {
  color: white;
}
</style>
