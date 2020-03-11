<template>
  <div id="LeagueGame">
    <div class="container-custom p-2">
      <div v-if="matchData != null" class="jumbotron">
        <div v-if="matchData.gameMode === 'CLASSIC'">
          <h3 class="pt-1">Summoner's Rift</h3>
        </div>
        <div v-else-if="matchData.gameMode === 'ARAM'">
          <h3 class="pt-1">Howling Abyss</h3>
        </div>
        <div v-else-if="matchData.gameMode === 'C'">C</div>
        <div v-else>Not A/B/C</div>

        <div class="card-body">
          <div class="row">
            <div class="col m-1" id="blueSide">
              <div class="row m-1" v-for="player in matchData.blueTeam" :key="player.participantId">
                <button type="button" class="btn playerbtn">
                  <div class="row">
                    <div class="col">
                      <img class="championIcon" :src="getChampionPicture(player.championId)" />
                    </div>
                    <div class="col">
                      <p>{{player.profile.summonerName}}</p>
                    </div>
                    <div class="col">
                      <p>{{player.stats.kills}}/{{player.stats.deaths}}/{{player.stats.assists}}</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div class="col m-1" id="redSide">
              <div class="row m-1" v-for="player in matchData.redTeam" :key="player.participantId">
                <button type="button" class="btn playerbtn">
                  <div class="row">
                    <div class="col">
                      <p>{{player.stats.kills}}/{{player.stats.deaths}}/{{player.stats.assists}}</p>
                    </div>
                    <div class="col">
                      <p>{{player.profile.summonerName}}</p>
                    </div>
                    <div class="col">
                      <img class="championIcon" :src="getChampionPicture(player.championId)" />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <p class="card-text">{{getTimeSince(matchData.gameCreation)}}</p>
      </div>
    </div>

    <canvas id="myChart" width="200" height="200"></canvas>
    <p v-if="currentPlayerData !=null">{{currentPlayerData}}</p>

    <p>{{gameId}}</p>
    <p>{{matchData}}</p>
    <div v-if="gameId.length <4">
      <h4>BAD GAME ID</h4>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js";

import axios from "axios";
export default {
  name: "LeagueGame",
  data() {
    return {
      api_url: "http://localhost:4000/",
      matchData: null,
      currentPlayerData: null
    };
  },
  props: ["gameId"],

  mounted() {
    /* eslint-disable no-console */

    if (this.gameId != "") {
      document.title = "Match " + this.gameId;
      axios
        .get(this.api_url + "LeagueOfLegends/matchDetails/" + this.gameId)
        .then(response => {
          // var matchObject = response.data;
          // matchObject.account = this.matchHistory.filter(
          //   game => (game.gameId = response.data.gameId)
          // )[0];
          this.matchData = this.organizeGame(response.data);
          this.currentPlayerData = this.matchData.blueTeam[0];
        });
    }
  },
  methods: {
    organizeGame: function(game) {
      var blueTeam = game.participants.filter(x => x.teamId == 100);
      var redTeam = game.participants.filter(x => x.teamId == 200);
      /**
       * Order: Top Jg Mid Adc Sup
       */
      var blueTop = null;
      var blueJungler = null;
      var blueMid = null;
      var blueAdc = null;
      var blueSupport = null;
      var redTop = null;
      var redJungler = null;
      var redMid = null;
      var redAdc = null;
      var redSupport = null;

      var blueTeamInOrder = [];
      var redTeamInOrder = [];

      if (game.gameMode == "CLASSIC") {
        //Lets do Top-jg-mid-adc-sup then red side top...
        console.log(redTeam, game.gameId, game.participantIdentities);
        blueTop = blueTeam.filter(
          x => x.timeline.lane == "TOP" && x.timeline.role == "SOLO"
        )[0];
        blueTop.profile = game.participantIdentities.filter(
          x => x.participantId == blueTop.participantId
        )[0].player;

        blueJungler = blueTeam.filter(x => x.timeline.lane == "JUNGLE")[0];

        blueJungler.profile = game.participantIdentities.filter(
          x => x.participantId == blueJungler.participantId
        )[0].player;

        blueMid = blueTeam.filter(x => x.timeline.lane == "MIDDLE")[0];
        blueMid.profile = game.participantIdentities.filter(
          x => x.participantId == blueMid.participantId
        )[0].player;

        blueAdc = blueTeam.filter(
          x => x.timeline.lane == "BOTTOM" && x.timeline.role == "DUO_CARRY"
        )[0];
        blueAdc.profile = game.participantIdentities.filter(
          x => x.participantId == blueAdc.participantId
        )[0].player;
        blueSupport = blueTeam.filter(
          x => x.timeline.lane == "BOTTOM" && x.timeline.role == "DUO_SUPPORT"
        )[0];
        blueSupport.profile = game.participantIdentities.filter(
          x => x.participantId == blueSupport.participantId
        )[0].player;

        redTop = redTeam.filter(
          x => x.timeline.lane == "TOP" && x.timeline.role == "SOLO"
        )[0];
        redTop.profile = game.participantIdentities.filter(
          x => x.participantId == redTop.participantId
        )[0].player;

        redJungler = redTeam.filter(x => x.timeline.lane == "JUNGLE")[0];
        redJungler.profile = game.participantIdentities.filter(
          x => x.participantId == redJungler.participantId
        )[0].player;

        redMid = redTeam.filter(x => x.timeline.lane == "MIDDLE")[0];
        redMid.profile = game.participantIdentities.filter(
          x => x.participantId == redMid.participantId
        )[0].player;

        redAdc = redTeam.filter(
          player =>
            player.timeline.lane == "BOTTOM" &&
            player.timeline.role == "DUO_CARRY"
        )[0];
        redAdc.profile = game.participantIdentities.filter(
          x => x.participantId == redAdc.participantId
        )[0].player;

        redSupport = redTeam.filter(
          player =>
            player.timeline.lane == "BOTTOM" &&
            player.timeline.role == "DUO_SUPPORT"
        )[0];
        redSupport.profile = game.participantIdentities.filter(
          x => x.participantId == redSupport.participantId
        )[0].player;
        blueTeamInOrder.push(blueTop);
        blueTeamInOrder.push(blueJungler);
        blueTeamInOrder.push(blueMid);
        blueTeamInOrder.push(blueAdc);
        blueTeamInOrder.push(blueSupport);
        redTeamInOrder.push(redTop);
        redTeamInOrder.push(redJungler);
        redTeamInOrder.push(redMid);
        redTeamInOrder.push(redAdc);
        redTeamInOrder.push(redSupport);
      } else if (game.gameMode == "ARAM") {
        blueTop = blueTeam[0];
        blueTop.profile = game.participantIdentities.filter(
          x => x.participantId == blueTop.participantId
        )[0].player;

        blueJungler = blueTeam[1];
        blueJungler.profile = game.participantIdentities.filter(
          x => x.participantId == blueJungler.participantId
        )[0].player;
        blueMid = blueTeam[2];
        blueMid.profile = game.participantIdentities.filter(
          x => x.participantId == blueMid.participantId
        )[0].player;
        blueAdc = blueTeam[3];
        blueAdc.profile = game.participantIdentities.filter(
          x => x.participantId == blueAdc.participantId
        )[0].player;
        blueSupport = blueTeam[4];
        blueSupport.profile = game.participantIdentities.filter(
          x => x.participantId == blueSupport.participantId
        )[0].player;

        redTop = redTeam[0];
        redTop.profile = game.participantIdentities.filter(
          x => x.participantId == redTop.participantId
        )[0].player;
        redJungler = redTeam[1];
        redJungler.profile = game.participantIdentities.filter(
          x => x.participantId == redJungler.participantId
        )[0].player;
        redMid = redTeam[2];
        redMid.profile = game.participantIdentities.filter(
          x => x.participantId == redMid.participantId
        )[0].player;
        redAdc = redTeam[3];
        redAdc.profile = game.participantIdentities.filter(
          x => x.participantId == redAdc.participantId
        )[0].player;
        redSupport = redTeam[4];
        redSupport.profile = game.participantIdentities.filter(
          x => x.participantId == redSupport.participantId
        )[0].player;
        blueTeamInOrder.push(blueTop);
        blueTeamInOrder.push(blueJungler);
        blueTeamInOrder.push(blueMid);
        blueTeamInOrder.push(blueAdc);
        blueTeamInOrder.push(blueSupport);
        redTeamInOrder.push(redTop);
        redTeamInOrder.push(redJungler);
        redTeamInOrder.push(redMid);
        redTeamInOrder.push(redAdc);
        redTeamInOrder.push(redSupport);
      }
      game.blueTeam = blueTeamInOrder;
      game.redTeam = redTeamInOrder;
      return game;
    },
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
        case 555:
          champ = "Pyke";
          break;
        case 246:
          champ = "Qiyana";
          break;
        case 57:
          champ = "Maokai";
          break;
        case 142:
          champ = "Zoe";
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
        case 518:
          champ = "Neeko";
          break;
        case 875:
          champ = "Sett";
          break;
        default:
          champ = id;
      }
      // eslint-disable-next-line no-console
      if (typeof champ == String) champ = champ.replace(" ", "_");
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
    getCurrentPlayerData: function(obj) {
      var ctx = document.getElementById("myChart").getContext("2d");
      var myChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "# of Votes",
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)"
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)"
              ],
              borderWidth: 1
            }
          ]
        },
        options: {}
      });
      if (myChart != null) {
        console.log(1);
      }
      return obj;
    }
  }
};
</script>

<style scoped>
.jumbotron {
  background-color: rgb(11, 61, 61);
}
.playerbtn {
  color: white;
  width: 100%;
  background-color: rgb(11, 61, 61);
  transition: all 0.5s;
}
</style>