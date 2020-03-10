<template>
  <div id="LeagueProfile">
    <div class="container-custom">
      <p>{{gameId}}</p>
      <p>{{leagueName}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameDetails",
  data() {
    return {
      api_url: "http://localhost:4000/"
    };
  },
  props: ["leagueName", "gameId"]
};
</script>

<style scoped>
</style>