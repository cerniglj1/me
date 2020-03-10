

<template>
  <div id="LeagueProfile">
    <div class="container-custom">
      <div class="row" v-if="leagueAccountNotFound == true ">Not Found</div>

      <div class="row" v-if="leagueAccount != null && leagueAccountNotFound== false ">
        <div class="col-">
          <div class="row">
            <div class="col">
              <img class="avatar" :src="leagueAccount.iconUrl" />
              <h2>{{namePretty}}</h2>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <h2>Level: {{leagueAccount.summonerLevel}}</h2>
            </div>
          </div>
        </div>
        <div class="col-xl">
          <div v-if="matchData!=null">
            <div>
              <div v-for="game in matchData" :key="game.gameId" class="card bg-dark text-white">
                <div v-if="game !=null">
                  <h5 class="card-title">{{game.gameMode}}</h5>
                  <div class="card-body">
                    <div class="row">
                      <div class="col" id="blueSide">
                        <div class="row">
                          <img
                            class="championIcon"
                            :src="getChampionPicture(game.blueTop.championId)"
                          />
                          <p>{{game.blueTop.profile.summonerName}}</p>
                        </div>
                        <div class="row">
                          <img
                            class="championIcon"
                            :src="getChampionPicture(game.blueJungler.championId)"
                          />
                          <p>{{game.blueJungler.profile.summonerName}}</p>
                        </div>
                        <div class="row">
                          <img
                            class="championIcon"
                            :src="getChampionPicture(game.blueMid.championId)"
                          />
                          <p>{{game.blueMid.profile.summonerName}}</p>
                        </div>
                        <div class="row">
                          <img
                            class="championIcon"
                            :src="getChampionPicture(game.blueAdc.championId)"
                          />
                          <p>{{game.blueAdc.profile.summonerName}}</p>
                        </div>
                        <div class="row">
                          <img
                            class="championIcon"
                            :src="getChampionPicture(game.blueSupport.championId)"
                          />
                          <p>{{game.blueSupport.profile.summonerName}}</p>
                        </div>
                      </div>
                      <!-- {{game}} -->

                      <div class="col" id="redSide">
                        <div class="row">
                          <p>{{game.redTop.profile.summonerName}}</p>
                          <img
                            class="championIcon"
                            :src="getChampionPicture(game.redTop.championId)"
                          />
                        </div>
                        <div class="row">
                          <p>{{game.redJungler.profile.summonerName}}</p>
                          <img
                            class="championIcon"
                            :src="getChampionPicture(game.redJungler.championId)"
                          />
                        </div>
                        <div class="row">
                          <p>{{game.redMid.profile.summonerName}}</p>
                          <img
                            class="championIcon"
                            :src="getChampionPicture(game.redMid.championId)"
                          />
                        </div>
                        <div class="row">
                          <p>{{game.redAdc.profile.summonerName}}</p>
                          <img
                            class="championIcon"
                            :src="getChampionPicture(game.redAdc.championId)"
                          />
                        </div>
                        <div class="row">
                          <p>{{game.redSupport.profile.summonerName}}</p>
                          <img
                            class="championIcon"
                            :src="getChampionPicture(game.redSupport.championId)"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p class="card-text">
                    <a>
                      <router-link
                        :to="{ name: 'GameDetails', params: { gameId: game.gameId }}"
                      >More Information</router-link>
                    </a>
                  </p>
                  <p class="card-text">{{getTimeSince(game.gameCreation)}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LeagueProfile",
  data() {
    return {
      leagueAccount: null,
      leagueAccountNotFound: false,
      matchHistory: [],
      matchData: [],
      iconUrl: "",
      api_url2: "http://localhost:4000/",
      api_url: "https://jamescerniglia.herokuapp.com/",
      namePretty: ""
    };
  },

  props: ["leagueName"],

  mounted() {
    /* eslint-disable no-console */
    if (this.leagueName != "") {
      this.namePretty = this.leagueName;
      document.title = this.namePretty + "...";
      axios
        .get(this.api_url + "LeagueOfLegends/user/" + this.leagueName)
        .then(response => {
          // JSON responses are automatically parsed.

          this.namePretty = response.data.name;
          document.title = this.namePretty;
          document.title = this.namePretty;
          this.leagueAccount = response.data;

          this.leagueAccount.iconUrl =
            this.api_url +
            "LeagueOfLegends/assets/icons/" +
            response.data.profileIconId +
            ".png";
          if (this.leagueAccount != null) {
            axios
              .get(
                this.api_url +
                  "LeagueOfLegends/" +
                  this.leagueAccount.accountId +
                  "/matches"
              )
              .then(response => {
                // JSON responses are automatically parsed.

                //Limit to 5 queries to start
                this.matchHistory = response.data.matches.slice(0, 5);
                for (var i in this.matchHistory) {
                  axios
                    .get(
                      this.api_url +
                        "LeagueOfLegends/matchDetails/" +
                        this.matchHistory[i].gameId
                    )
                    .then(response => {
                      // var matchObject = response.data;
                      // matchObject.account = this.matchHistory.filter(
                      //   game => (game.gameId = response.data.gameId)
                      // )[0];
                      this.matchData.push(this.organizeGame(response.data));
                    });
                }
              });
          }
        })

        .catch(e => {
          console.log(e);
        });
    }
  },
  created() {},
  computed: {},
  methods: {
    getChampionPicture: function(id) {
      var champ = "";
      // eslint-disable-next-line no-console

      switch (id) {
        case 145:
          champ = "Kaisa";
          break;
        case 235:
          champ = "Senna";
          break;
        case 497:
          champ = "Rakan";
          break;
        case 266:
          champ = "Aatrox";
          break;
        case 412:
          champ = "Thresh";
          break;
        case 23:
          champ = "Tryndamere";
          break;
        case 79:
          champ = "Gragas";
          break;
        case 69:
          champ = "Cassiopeia";
          break;
        case 136:
          champ = "AurelionSol";
          break;
        case 13:
          champ = "Ryze";
          break;
        case 78:
          champ = "Poppy";
          break;
        case 14:
          champ = "Sion";
          break;
        case 1:
          champ = "Annie";
          break;
        case 202:
          champ = "Jhin";
          break;
        case 43:
          champ = "Karma";
          break;
        case 111:
          champ = "Nautilus";
          break;
        case 240:
          champ = "Kled";
          break;
        case 99:
          champ = "Lux";
          break;
        case 103:
          champ = "Ahri";
          break;
        case 2:
          champ = "Olaf";
          break;
        case 112:
          champ = "Viktor";
          break;
        case 34:
          champ = "Anivia";
          break;
        case 27:
          champ = "Singed";
          break;
        case 86:
          champ = "Garen";
          break;
        case 127:
          champ = "Lissandra";
          break;
        case 57:
          champ = "Maokai";
          break;
        case 25:
          champ = "Morgana";
          break;
        case 28:
          champ = "Evelynn";
          break;
        case 105:
          champ = "Fizz";
          break;
        case 74:
          champ = "Heimerdinger";
          break;
        case 238:
          champ = "Zed";
          break;
        case 68:
          champ = "Rumble";
          break;
        case 82:
          champ = "Mordekaiser";
          break;
        case 37:
          champ = "Sona";
          break;
        case 96:
          champ = "KogMaw";
          break;
        case 55:
          champ = "Katarina";
          break;
        case 117:
          champ = "Lulu";
          break;
        case 22:
          champ = "Ashe";
          break;
        case 30:
          champ = "Karthus";
          break;
        case 12:
          champ = "Alistar";
          break;
        case 122:
          champ = "Darius";
          break;
        case 67:
          champ = "Vayne";
          break;
        case 110:
          champ = "Varus";
          break;
        case 77:
          champ = "Udyr";
          break;
        case 89:
          champ = "Leona";
          break;
        case 126:
          champ = "Jayce";
          break;
        case 134:
          champ = "Syndra";
          break;
        case 80:
          champ = "Pantheon";
          break;
        case 92:
          champ = "Riven";
          break;
        case 121:
          champ = "Khazix";
          break;
        case 42:
          champ = "Corki";
          break;
        case 268:
          champ = "Azir";
          break;
        case 516:
          champ = "Ornn";
          break;
        case 517:
          champ = "Sylas";
          break;
        case 51:
          champ = "Caitlyn";
          break;
        case 76:
          champ = "Nidalee";
          break;
        case 85:
          champ = "Kennen";
          break;
        case 3:
          champ = "Galio";
          break;
        case 45:
          champ = "Veigar";
          break;
        case 432:
          champ = "Bard";
          break;
        case 150:
          champ = "Gnar";
          break;
        case 90:
          champ = "Malzahar";
          break;
        case 104:
          champ = "Graves";
          break;
        case 254:
          champ = "Vi";
          break;
        case 10:
          champ = "Kayle";
          break;
        case 39:
          champ = "Irelia";
          break;
        case 64:
          champ = "LeeSin";
          break;
        case 420:
          champ = "Illaoi";
          break;
        case 60:
          champ = "Elise";
          break;
        case 106:
          champ = "Volibear";
          break;
        case 20:
          champ = "Nunu";
          break;
        case 4:
          champ = "TwistedFate";
          break;
        case 24:
          champ = "Jax";
          break;
        case 102:
          champ = "Shyvana";
          break;
        case 429:
          champ = "Kalista";
          break;
        case 36:
          champ = "DrMundo";
          break;
        case 427:
          champ = "Ivern";
          break;
        case 131:
          champ = "Diana";
          break;
        case 223:
          champ = "TahmKench";
          break;
        case 63:
          champ = "Brand";
          break;
        case 113:
          champ = "Sejuani";
          break;
        case 8:
          champ = "Vladimir";
          break;
        case 154:
          champ = "Zac";
          break;
        case 421:
          champ = "RekSai";
          break;
        case 133:
          champ = "Quinn";
          break;
        case 84:
          champ = "Akali";
          break;
        case 163:
          champ = "Taliyah";
          break;
        case 18:
          champ = "Tristana";
          break;
        case 120:
          champ = "Hecarim";
          break;
        case 15:
          champ = "Sivir";
          break;
        case 236:
          champ = "Lucian";
          break;
        case 107:
          champ = "Rengar";
          break;
        case 19:
          champ = "Warwick";
          break;
        case 72:
          champ = "Skarner";
          break;
        case 54:
          champ = "Malphite";
          break;
        case 157:
          champ = "Yasuo";
          break;
        case 101:
          champ = "Xerath";
          break;
        case 17:
          champ = "Teemo";
          break;
        case 75:
          champ = "Nasus";
          break;
        case 58:
          champ = "Renekton";
          break;
        case 119:
          champ = "Draven";
          break;
        case 35:
          champ = "Shaco";
          break;
        case 50:
          champ = "Swain";
          break;
        case 91:
          champ = "Talon";
          break;
        case 40:
          champ = "Janna";
          break;
        case 115:
          champ = "Ziggs";
          break;
        case 245:
          champ = "Ekko";
          break;
        case 61:
          champ = "Orianna";
          break;
        case 114:
          champ = "Fiora";
          break;
        case 9:
          champ = "Fiddlesticks";
          break;
        case 31:
          champ = "Chogath";
          break;
        case 33:
          champ = "Rammus";
          break;
        case 7:
          champ = "LeBlanc";
          break;
        case 16:
          champ = "Soraka";
          break;
        case 26:
          champ = "Zilean";
          break;
        case 56:
          champ = "Nocturne";
          break;
        case 222:
          champ = "Jinx";
          break;
        case 83:
          champ = "Yorick";
          break;
        case 6:
          champ = "Urgot";
          break;
        case 203:
          champ = "Kindred";
          break;
        case 21:
          champ = "MissFortune";
          break;
        case 62:
          champ = "MonkeyKing";
          break;
        case 53:
          champ = "Blitzcrank";
          break;
        case 98:
          champ = "Shen";
          break;
        case 201:
          champ = "Braum";
          break;
        case 5:
          champ = "XinZhao";
          break;
        case 29:
          champ = "Twitch";
          break;
        case 11:
          champ = "MasterYi";
          break;
        case 44:
          champ = "Taric";
          break;
        case 32:
          champ = "Amumu";
          break;
        case 41:
          champ = "Gangplank";
          break;
        case 48:
          champ = "Trundle";
          break;
        case 38:
          champ = "Kassadin";
          break;
        case 161:
          champ = "Velkoz";
          break;
        case 143:
          champ = "Zyra";
          break;
        case 267:
          champ = "Nami";
          break;
        case 59:
          champ = "JarvanIV";
          break;
        case 81:
          champ = "Ezreal";
          break;
        default:
          champ = "Draven";
      }
      // eslint-disable-next-line no-console

      champ = champ.replace(" ", "_");
      return (
        this.api_url +
        "LeagueOfLegends/assets/champions/tiles/" +
        champ +
        "_0.jpg"
      );
    },
    getChampionIcon: function(id) {
      var champ = "";
      // eslint-disable-next-line no-console
      // console.log(id);
      switch (id) {
        case 145:
          champ = "Kaisa";
          break;
        case 235:
          champ = "Senna";
          break;
        case 497:
          champ = "Rakan";
          break;
        case 266:
          champ = "Aatrox";
          break;
        case 412:
          champ = "Thresh";
          break;
        case 23:
          champ = "Tryndamere";
          break;
        case 79:
          champ = "Gragas";
          break;
        case 69:
          champ = "Cassiopeia";
          break;
        case 136:
          champ = "AurelionSol";
          break;
        case 13:
          champ = "Ryze";
          break;
        case 78:
          champ = "Poppy";
          break;
        case 14:
          champ = "Sion";
          break;
        case 1:
          champ = "Annie";
          break;
        case 202:
          champ = "Jhin";
          break;
        case 43:
          champ = "Karma";
          break;
        case 111:
          champ = "Nautilus";
          break;
        case 240:
          champ = "Kled";
          break;
        case 99:
          champ = "Lux";
          break;
        case 103:
          champ = "Ahri";
          break;
        case 2:
          champ = "Olaf";
          break;
        case 112:
          champ = "Viktor";
          break;
        case 34:
          champ = "Anivia";
          break;
        case 27:
          champ = "Singed";
          break;
        case 86:
          champ = "Garen";
          break;
        case 127:
          champ = "Lissandra";
          break;
        case 57:
          champ = "Maokai";
          break;
        case 25:
          champ = "Morgana";
          break;
        case 28:
          champ = "Evelynn";
          break;
        case 105:
          champ = "Fizz";
          break;
        case 74:
          champ = "Heimerdinger";
          break;
        case 238:
          champ = "Zed";
          break;
        case 68:
          champ = "Rumble";
          break;
        case 82:
          champ = "Mordekaiser";
          break;
        case 37:
          champ = "Sona";
          break;
        case 96:
          champ = "KogMaw";
          break;
        case 55:
          champ = "Katarina";
          break;
        case 117:
          champ = "Lulu";
          break;
        case 22:
          champ = "Ashe";
          break;
        case 30:
          champ = "Karthus";
          break;
        case 12:
          champ = "Alistar";
          break;
        case 122:
          champ = "Darius";
          break;
        case 67:
          champ = "Vayne";
          break;
        case 110:
          champ = "Varus";
          break;
        case 77:
          champ = "Udyr";
          break;
        case 89:
          champ = "Leona";
          break;
        case 126:
          champ = "Jayce";
          break;
        case 134:
          champ = "Syndra";
          break;
        case 80:
          champ = "Pantheon";
          break;
        case 92:
          champ = "Riven";
          break;
        case 121:
          champ = "Khazix";
          break;
        case 42:
          champ = "Corki";
          break;
        case 268:
          champ = "Azir";
          break;
        case 51:
          champ = "Caitlyn";
          break;
        case 76:
          champ = "Nidalee";
          break;
        case 85:
          champ = "Kennen";
          break;
        case 3:
          champ = "Galio";
          break;
        case 45:
          champ = "Veigar";
          break;
        case 432:
          champ = "Bard";
          break;
        case 150:
          champ = "Gnar";
          break;
        case 90:
          champ = "Malzahar";
          break;
        case 104:
          champ = "Graves";
          break;
        case 254:
          champ = "Vi";
          break;
        case 10:
          champ = "Kayle";
          break;
        case 39:
          champ = "Irelia";
          break;
        case 64:
          champ = "LeeSin";
          break;
        case 420:
          champ = "Illaoi";
          break;
        case 60:
          champ = "Elise";
          break;
        case 106:
          champ = "Volibear";
          break;
        case 20:
          champ = "Nunu";
          break;
        case 4:
          champ = "TwistedFate";
          break;
        case 24:
          champ = "Jax";
          break;
        case 102:
          champ = "Shyvana";
          break;
        case 429:
          champ = "Kalista";
          break;
        case 36:
          champ = "DrMundo";
          break;
        case 427:
          champ = "Ivern";
          break;
        case 131:
          champ = "Diana";
          break;
        case 223:
          champ = "TahmKench";
          break;
        case 63:
          champ = "Brand";
          break;
        case 113:
          champ = "Sejuani";
          break;
        case 8:
          champ = "Vladimir";
          break;
        case 154:
          champ = "Zac";
          break;
        case 421:
          champ = "RekSai";
          break;
        case 133:
          champ = "Quinn";
          break;
        case 84:
          champ = "Akali";
          break;
        case 163:
          champ = "Taliyah";
          break;
        case 18:
          champ = "Tristana";
          break;
        case 120:
          champ = "Hecarim";
          break;
        case 15:
          champ = "Sivir";
          break;
        case 236:
          champ = "Lucian";
          break;
        case 107:
          champ = "Rengar";
          break;
        case 19:
          champ = "Warwick";
          break;
        case 72:
          champ = "Skarner";
          break;
        case 54:
          champ = "Malphite";
          break;
        case 157:
          champ = "Yasuo";
          break;
        case 101:
          champ = "Xerath";
          break;
        case 17:
          champ = "Teemo";
          break;
        case 75:
          champ = "Nasus";
          break;
        case 58:
          champ = "Renekton";
          break;
        case 119:
          champ = "Draven";
          break;
        case 35:
          champ = "Shaco";
          break;
        case 50:
          champ = "Swain";
          break;
        case 91:
          champ = "Talon";
          break;
        case 40:
          champ = "Janna";
          break;
        case 115:
          champ = "Ziggs";
          break;
        case 245:
          champ = "Ekko";
          break;
        case 61:
          champ = "Orianna";
          break;
        case 114:
          champ = "Fiora";
          break;
        case 9:
          champ = "Fiddlesticks";
          break;
        case 31:
          champ = "Chogath";
          break;
        case 33:
          champ = "Rammus";
          break;
        case 7:
          champ = "LeBlanc";
          break;
        case 16:
          champ = "Soraka";
          break;
        case 26:
          champ = "Zilean";
          break;
        case 56:
          champ = "Nocturne";
          break;
        case 222:
          champ = "Jinx";
          break;
        case 83:
          champ = "Yorick";
          break;
        case 6:
          champ = "Urgot";
          break;
        case 203:
          champ = "Kindred";
          break;
        case 21:
          champ = "MissFortune";
          break;
        case 62:
          champ = "Wukong";
          break;
        case 53:
          champ = "Blitzcrank";
          break;
        case 98:
          champ = "Shen";
          break;
        case 201:
          champ = "Braum";
          break;
        case 5:
          champ = "XinZhao";
          break;
        case 29:
          champ = "Twitch";
          break;
        case 11:
          champ = "MasterYi";
          break;
        case 44:
          champ = "Taric";
          break;
        case 32:
          champ = "Amumu";
          break;
        case 41:
          champ = "Gangplank";
          break;
        case 48:
          champ = "Trundle";
          break;
        case 38:
          champ = "Kassadin";
          break;
        case 161:
          champ = "Velkoz";
          break;
        case 143:
          champ = "Zyra";
          break;
        case 267:
          champ = "Nami";
          break;
        case 59:
          champ = "JarvanIV";
          break;
        case 81:
          champ = "Ezreal";
          break;
        default:
          champ = "Draven";
      }
      // eslint-disable-next-line no-console

      champ = champ.replace(" ", "_");
      return (
        this.api_url +
        "LeagueOfLegends/assets/champions/tiles/" +
        champ +
        "_0.jpg"
      );
    },
    getTimeSince: function(epochTimeOfMatch) {
      epochTimeOfMatch = epochTimeOfMatch / 1000;
      var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
      d.setUTCSeconds(epochTimeOfMatch);
      // var matchTime = epochTimeOfMatch;
      // var now = Date.now();
      // var diff = Math.abs(now - matchTime);
      // var difdate = Date(diff);

      // console.log(now, matchTime, diff, difdate);
      // return now;
      return d;
    },
    redTeam: function(model) {
      return model.participants.filter(x => x.teamId == 200);
    },
    blueTeam: function(model) {
      return model.participants.filter(x => x.teamId == 100);
    },
    getMatchDetails: function(game) {
      return game.gameId;
    },
    organizeGame: function(game) {
      var blueTeam = game.participants.filter(x => x.teamId == 100);
      var redTeam = game.participants.filter(x => x.teamId == 200);

      if (game.gameMode == "CLASSIC") {
        //Lets do Top-jg-mid-adc-sup then red side top...

        game.blueTop = blueTeam.filter(x => x.timeline.lane == "TOP")[0];
        game.blueTop.profile = game.participantIdentities.filter(
          x => x.participantId == game.blueTop.participantId
        )[0].player;

        game.blueJungler = blueTeam.filter(x => x.timeline.lane == "JUNGLE")[0];

        game.blueJungler.profile = game.participantIdentities.filter(
          x => x.participantId == game.blueJungler.participantId
        )[0].player;

        game.blueMid = blueTeam.filter(x => x.timeline.lane == "MIDDLE")[0];
        game.blueMid.profile = game.participantIdentities.filter(
          x => x.participantId == game.blueMid.participantId
        )[0].player;

        game.blueAdc = blueTeam.filter(
          player =>
            player.timeline.lane == "BOTTOM" &&
            player.timeline.role == "DUO_CARRY"
        )[0];
        game.blueAdc.profile = game.participantIdentities.filter(
          x => x.participantId == game.blueAdc.participantId
        )[0].player;

        game.blueSupport = blueTeam.filter(x => x.timeline.lane == "BOTTOM")[0];
        game.blueSupport.profile = game.participantIdentities.filter(
          x => x.participantId == game.blueSupport.participantId
        )[0].player;

        game.redTop = redTeam.filter(x => x.timeline.lane == "TOP")[0];
        game.redTop.profile = game.participantIdentities.filter(
          x => x.participantId == game.redTop.participantId
        )[0];

        game.redJungler = redTeam.filter(x => x.timeline.lane == "JUNGLE")[0];
        game.redJungler.profile = game.participantIdentities.filter(
          x => x.participantId == game.redJungler.participantId
        )[0].player;

        game.redMid = redTeam.filter(x => x.timeline.lane == "MIDDLE")[0];
        game.redMid.profile = game.participantIdentities.filter(
          x => x.participantId == game.redMid.participantId
        )[0].player;

        game.redAdc = redTeam.filter(
          player =>
            player.timeline.lane == "BOTTOM" &&
            player.timeline.role == "DUO_CARRY"
        )[0];
        game.redAdc.profile = game.participantIdentities.filter(
          x => x.participantId == game.redAdc.participantId
        )[0].player;

        game.redSupport = redTeam.filter(
          player =>
            player.timeline.lane == "BOTTOM" &&
            player.timeline.role == "DUO_SUPPORT"
        )[0];
        game.redSupport.profile = game.participantIdentities.filter(
          x => x.participantId == game.redSupport.participantId
        )[0].player;
      } else if (game.gameMode == "ARAM") {
        game.blueTop = blueTeam[0];
        game.blueTop.profile = game.participantIdentities.filter(
          x => x.participantId == game.blueTop.participantId
        )[0].player;

        game.blueJungler = blueTeam[1];
        game.blueJungler.profile = game.participantIdentities.filter(
          x => x.participantId == game.blueJungler.participantId
        )[0];
        game.blueMid = blueTeam[2];
        game.blueMid.profile = game.participantIdentities.filter(
          x => x.participantId == game.blueMid.participantId
        )[0].player;
        game.blueAdc = blueTeam[3];
        game.blueAdc.profile = game.participantIdentities.filter(
          x => x.participantId == game.blueAdc.participantId
        )[0].player;
        game.blueSupport = blueTeam[4];
        game.blueSupport.profile = game.participantIdentities.filter(
          x => x.participantId == game.blueSupport.participantId
        )[0].player;

        game.redTop = redTeam[0];
        game.redTop.profile = game.participantIdentities.filter(
          x => x.participantId == game.redTop.participantId
        )[0];
        game.redJungler = redTeam[1];
        game.redJungler.profile = game.participantIdentities.filter(
          x => x.participantId == game.redJungler.participantId
        )[0].player;
        game.redMid = redTeam[2];
        game.redMid.profile = game.participantIdentities.filter(
          x => x.participantId == game.redMid.participantId
        )[0].player;
        game.redAdc = redTeam[3];
        game.redAdc.profile = game.participantIdentities.filter(
          x => x.participantId == game.redAdc.participantId
        )[0].player;
        game.redSupport = redTeam[4];
        game.redSupport.profile = game.participantIdentities.filter(
          x => x.participantId == game.redSupport.participantId
        )[0].player;
      }

      return game;
    },
    getPlayer: function(game, team, role) {
      var blueTeam = game.participants.filter(x => x.teamId == 100);
      var redTeam = game.participants.filter(x => x.teamId == 200);
      var player = null;
      console.log(blueTeam[0], game);
      if (game.gameMode == "CLASSIC") {
        if (team == "blue") {
          switch (role) {
            case "top":
              player = blueTeam.filter(x => x.timeline.lane == "TOP")[0];
              player.profile = game.participantIdentities.filter(
                x => x.participantId == player.participantId
              )[0];
              console.log(player);
              break;
            case "jg":
              break;
            case "mid":
              break;
            case "adc":
              break;
            case "support":
              break;
            default:
              break;
          }
        } else if (team == "red") {
          switch (role) {
            case "top":
              player = redTeam.filter(x => x.timeline.lane == "TOP")[0];
              player.profile = redTeam.filter(
                x => x.participantId == player.participantId
              )[0];
              break;
            case "jg":
              break;
            case "mid":
              break;
            case "adc":
              break;
            case "support":
              break;
            default:
              break;
          }
        }
      }
      return player;
    }
  }
};
</script>
<style>
.ProfileSection {
  border: 5px red solid;
  color: blue;
}
.container-custom {
  padding-right: 25px;
  padding-left: 25px;
  padding-bottom: 100px;
}
.avatar {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.table {
  color: white;
}
.table thead {
  font-weight: bold;
  font-size: 16px;
}

#LeagueProfile {
  background-color: black;
}
#redSide {
  align-items: right;
}
.card {
  color: black;

  max-height: 320px;
}
.championIcon {
  max-width: 25px;
  max-height: 25px;
}
.card-img {
  filter: brightness(50%);
  max-height: 320px;
}
</style>
