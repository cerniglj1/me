<template>
  <div id="OsrsProfile">
    <div class="container">
      <p>User Name: {{userName}}</p>
      <!-- <p>account: {{account}}</p> -->
      <div class="row">
        <div class="col-6">
          <table class="table table-dark table-striped" v-if="account != null">
            <thead>
              <tr>
                <td colspan="3">Skills</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Attack: {{account.main.skills.attack.level}}</td>
                <td>Hitpoints: {{account.main.skills.hitpoints.level}}</td>
                <td>Mining: {{account.main.skills.mining.level}}</td>
              </tr>
              <tr>
                <td>Strength:{{ account.main.skills.strength.level}}</td>
                <td>Agility: {{account.main.skills.agility.level}}</td>
                <td>Smithing: {{account.main.skills.smithing.level}}</td>
              </tr>
              <tr>
                <td>Defence:{{account.main.skills.defence.level}}</td>
                <td>Herblore: {{account.main.skills.herblore.level}}</td>
                <td>Fishing: {{account.main.skills.fishing.level}}</td>
              </tr>
              <tr>
                <td>Ranged: {{account.main.skills.ranged.level}}</td>
                <td>Thieving: {{account.main.skills.thieving.level}}</td>
                <td>Cooking: {{account.main.skills.cooking.level}}</td>
              </tr>
              <tr>
                <td>Prayer: {{account.main.skills.prayer.level}}</td>
                <td>Crafting: {{account.main.skills.crafting.level}}</td>
                <td>Firemaking: {{account.main.skills.firemaking.level}}</td>
              </tr>
              <tr>
                <td>Magic: {{account.main.skills.magic.level}}</td>
                <td>Fletching: {{account.main.skills.fletching.level}}</td>
                <td>Woodcutting:{{account.main.skills.woodcutting.level}}</td>
              </tr>
              <tr>
                <td>Runecrafting: {{account.main.skills.runecraft.level}}</td>
                <td>Slayer: {{account.main.skills.slayer.level}}</td>
                <td>Farming:{{account.main.skills.farming.level}}</td>
              </tr>
              <tr>
                <td>Construction: {{account.main.skills.construction.level}}</td>
                <td>Hunter: {{account.main.skills.hunter.level}}</td>
                <td>Total Level:{{account.main.skills.overall.level}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-6">
          <table class="table" v-if="account != null" hidden>
            <thead>
              <tr>
                <td colspan="3">Boss KCs</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>abyssalSire: {{account.main.bosses.abyssalSire.score.score}}</td>
                <td>alchemicalHydra: {{account.main.bosses.alchemicalHydra.score}}</td>
                <td>barrows: {{account.main.bosses.barrows.score}}</td>
                <td>bryophyta: {{account.main.bosses.bryophyta.score}}</td>
              </tr>
              <tr>
                <td>callisto: {{account.main.bosses.callisto.score}}</td>
                <td>cerberus: {{account.main.bosses.cerberus.score}}</td>
                <td>chambersOfXeric: {{account.main.bosses.chambersOfXeric.score}}</td>
                <td>chambersOfXericChallengeMode: {{account.main.bosses.chambersOfXericChallengeMode.score}}</td>
                <td>chaosElemental: {{account.main.bosses.chaosElemental.score}}</td>
              </tr>
              <tr>
                <td>chaosFanatic: {{account.main.bosses.chaosFanatic.score}}</td>
                <td>commanderZilyana: {{account.main.bosses.commanderZilyana.score}}</td>
                <td>corporealBeast: {{account.main.bosses.corporealBeast.score}}</td>
                <td>crazyArchaeologist: {{account.main.bosses.crazyArchaeologist.score}}</td>
                <td>dagannothPrime: {{account.main.bosses.dagannothPrime.score}}</td>
              </tr>
              <tr>
                <td>dagannothRex: {{account.main.bosses.dagannothRex.score}}</td>
                <td>dagannothSupreme: {{account.main.bosses.dagannothSupreme.score}}</td>
                <td>derangedArchaeologist: {{account.main.bosses.derangedArchaeologist.score}}</td>
                <td>generalGraardor: {{account.main.bosses.generalGraardor.score}}</td>
                <td>giantMole: {{account.main.bosses.giantMole.score}}</td>
              </tr>
              <tr>
                <td>giantMole: {{account.main.bosses.giantMole.score}}</td>
                <td>grotesqueGuardians: {{account.main.bosses.grotesqueGuardians.score}}</td>
                <td>hespori: {{account.main.bosses.hespori.score}}</td>
                <td>kalphiteQueen: {{account.main.bosses.kalphiteQueen.score}}</td>
                <td>kingBlackDragon: {{account.main.bosses.kingBlackDragon.score}}</td>
              </tr>
              "hespori": {
              "rank": -1,
              "score": -1
              },
              "kalphiteQueen": {
              "rank": 53350,
              "score": 35
              },
              "kingBlackDragon": {
              "rank": 145193,
              "score": 65
              },
              "kraken": {
              "rank": 17344,
              "score": 2832
              },
              "kreeArra": {
              "rank": 90664,
              "score": 4
              },
              "krilTsutsaroth": {
              "rank": -1,
              "score": -1
              },
              "mimic": {
              "rank": -1,
              "score": -1
              },
              "obor": {
              "rank": -1,
              "score": -1
              },
              "sarachnis": {
              "rank": 163771,
              "score": 1
              },
              "scorpia": {
              "rank": -1,
              "score": -1
              },
              "skotizo": {
              "rank": -1,
              "score": -1
              },
              "gauntlet": {
              "rank": 17580,
              "score": 44
              },
              "corruptedGauntlet": {
              "rank": -1,
              "score": -1
              },
              "theatreOfBlood": {
              "rank": -1,
              "score": -1
              },
              "thermonuclearSmokeDevil": {
              "rank": -1,
              "score": -1
              },
              "tzKalZuk": {
              "rank": 67700,
              "score": 58
              },
              "tzTokJad": {
              "rank": -1,
              "score": -1
              },
              "venenatis": {
              "rank": 118041,
              "score": 2
              },
              "vetion": {
              "rank": 110085,
              "score": 3
              },
              "vorkath": {
              "rank": 29934,
              "score": 15
              },
              "wintertodt": {
              "rank": 68758,
              "score": 265
              },
              "zalcano": {
              "rank": 297560,
              "score": 42
              },
              "zulrah": {
              "rank": -1,
              "score": -1
              }
              }
            </tbody>
          </table>
          <table class="table table-dark table-striped" v-if="account != null">
            <thead>
              <tr>
                <td colspan="3">Boss KCs</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td v-for="obj in bosses.slice(0,4)" v-bind:key="obj.data.name">
                  {{obj.name}}:
                  <div v-if="obj.data.score > 0">{{obj.data.score}}</div>
                  <div v-else-if="obj.data.score == -1">0</div>
                </td>
              </tr>
              <tr>
                <td v-for="obj in bosses.slice(5,9)" v-bind:key="obj.data.name">
                  {{obj.name}}:
                  <div v-if="obj.data.score > 0">{{obj.data.score}}</div>
                  <div v-else-if="obj.data.score == -1">0</div>
                </td>
              </tr>
              <tr>
                <td v-for="obj in bosses.slice(10,14)" v-bind:key="obj.data.name">
                  {{obj.name}}:
                  <div v-if="obj.data.score > 0">{{obj.data.score}}</div>
                  <div v-else-if="obj.data.score == -1">0</div>
                </td>
              </tr>
              <tr>
                <td v-for="obj in bosses.slice(15,19)" v-bind:key="obj.data.name">
                  {{obj.name}}:
                  <div v-if="obj.data.score > 0">{{obj.data.score}}</div>
                  <div v-else-if="obj.data.score == -1">0</div>
                </td>
              </tr>
              <tr>
                <td
                  v-for="obj in bosses.slice(20,24)"
                  v-bind:key="obj.data.name"
                >{{obj.name}}: {{obj.data.score}}</td>
              </tr>
              <tr>
                <td v-for="obj in bosses.slice(25,29)" v-bind:key="obj.data.name">
                  {{obj.name}}:
                  <div v-if="obj.data.score > 0">{{obj.data.score}}</div>
                  <div v-else-if="obj.data.score == -1">0</div>
                </td>
              </tr>
              <tr>
                <td v-for="obj in bosses.slice(30,34)" v-bind:key="obj.data.name">
                  {{obj.name}}:
                  <div v-if="obj.data.score > 0">{{obj.data.score}}</div>
                  <div v-else-if="obj.data.score == -1">0</div>
                </td>
              </tr>
              <tr>
                <td v-for="obj in bosses.slice(35,39)" v-bind:key="obj.data.name">
                  {{obj.name}}:
                  <div v-if="obj.data.score > 0">{{obj.data.score}}</div>
                  <div v-else-if="obj.data.score == -1">0</div>
                </td>
              </tr>
              <tr>
                <td
                  v-for="obj in bosses.slice(40,44)"
                  v-bind:key="obj.data.name"
                >{{obj.name}}: {{obj.data.score}}</td>
              </tr>
              <tr>
                <td v-for="obj in bosses.slice(45,49)" v-bind:key="obj.data.name">
                  {{obj.name}}:
                  <div v-if="obj.data.score > 0">{{obj.data.score}}</div>
                  <div v-else-if="obj.data.score == -1">0</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const API_URL = "http://localhost:4000/osrs/";
export default {
  name: "OsrsProfile",
  data() {
    return {
      account: null,
      bosses: []
    };
  },
  methods() {
    function prettyBoss(x) {
      switch (x) {
        case "abyssalSire":
          return "Abyssal Sire";
        default:
          return "boss";
      }
    }},
  props: ["userName"],
  mounted() {
    fetch(API_URL + this.userName)
      .then(response => response.json())
      .then(result => {
        this.account = result;
        for (var n in this.account.main.bosses) {
          this.bosses.push({ name: this.prettyBoss(n), data: this.account.main.bosses[n] });
        }
      });
  }
  }
};
</script>
<style>
.table {
  color: white;
}
#OsrsProfile {
  background-image: linear-gradient(rgba(65, 65, 65, 1) 40%, rgb(61, 77, 73));
}
</style>
