<template>
  <div id="OsrsProfile">
    <div class="container-custom">
      <h2>{{namePretty}}</h2>

      <div class="row">
        <div class="col-4">
          <table class="table table-dark table-striped" v-if="account != null">
            <thead>
              <tr>
                <td colspan="3">Skills</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <img :src="getSkillIcon('Attack')" />
                  {{account.main.skills.attack.level}}
                </td>
                <td>
                  <img :src="getSkillIcon('Hitpoints')" />
                  {{account.main.skills.hitpoints.level}}
                </td>
                <td>
                  <img :src="getSkillIcon('Mining')" />
                  {{account.main.skills.mining.level}}
                </td>
              </tr>
              <tr>
                <td>
                  <img :src="getSkillIcon('Strength')" />
                  {{ account.main.skills.strength.level}}
                </td>
                <td>
                  <img :src="getSkillIcon('Agility')" />
                  {{account.main.skills.agility.level}}
                </td>
                <td>
                  <img :src="getSkillIcon('Smithing')" />
                  {{account.main.skills.smithing.level}}
                </td>
              </tr>
              <tr>
                <td>
                  <img :src="getSkillIcon('Defence')" />
                  {{account.main.skills.defence.level}}
                </td>
                <td>
                  <img :src="getSkillIcon('Herblore')" />
                  {{account.main.skills.herblore.level}}
                </td>
                <td>
                  <img :src="getSkillIcon('Fishing')" />
                  {{account.main.skills.fishing.level}}
                </td>
              </tr>
              <tr>
                <td>
                  <img :src="getSkillIcon('Ranged')" />
                  {{account.main.skills.ranged.level}}
                </td>
                <td>
                  <img :src="getSkillIcon('Thieving')" />
                  {{account.main.skills.thieving.level}}
                </td>
                <td>
                  <img :src="getSkillIcon('Cooking')" />
                  {{account.main.skills.cooking.level}}
                </td>
              </tr>
              <tr>
                <td>
                  <img :src="getSkillIcon('Prayer')" />
                  {{account.main.skills.prayer.level}}
                </td>
                <td>
                  <img :src="getSkillIcon('Crafting')" />
                  {{account.main.skills.crafting.level}}
                </td>
                <td>
                  <img :src="getSkillIcon('Firemaking')" />
                  {{account.main.skills.firemaking.level}}
                </td>
              </tr>
              <tr>
                <td>
                  <img :src="getSkillIcon('Magic')" />
                  {{account.main.skills.magic.level}}
                </td>
                <td>
                  <img :src="getSkillIcon('Fletching')" />
                  {{account.main.skills.fletching.level}}
                </td>
                <td>
                  <img :src="getSkillIcon('Woodcutting')" />
                  {{account.main.skills.woodcutting.level}}
                </td>
              </tr>
              <tr>
                <td>
                  <img :src="getSkillIcon('Runecraft')" />
                  {{account.main.skills.runecraft.level}}
                </td>
                <td>
                  <img :src="getSkillIcon('Slayer')" />
                  {{account.main.skills.slayer.level}}
                </td>
                <td>
                  <img :src="getSkillIcon('Farming')" />
                  {{account.main.skills.farming.level}}
                </td>
              </tr>
              <tr>
                <td>
                  <img :src="getSkillIcon('Construction')" />
                  {{account.main.skills.construction.level}}
                </td>
                <td>
                  <img :src="getSkillIcon('Hunter')" />
                  {{account.main.skills.hunter.level}}
                </td>
                <td class="rsfont" style>Total Level: {{account.main.skills.overall.level}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-8">
          <table class="table table-dark table-striped" v-if="account != null">
            <thead>
              <tr>
                <td colspan="4">Boss Killcounts</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td v-for="obj in bosses.slice(0,4)" v-bind:key="obj.data.name">
                  <div v-if="obj.data.score > 0">{{obj.name}}: {{obj.data.score}}</div>
                  <div v-else-if="obj.data.score == -1">{{obj.name}}: 0</div>
                </td>
              </tr>
              <tr>
                <td v-for="obj in bosses.slice(5,9)" v-bind:key="obj.data.name">
                  <div v-if="obj.data.score > 0">{{obj.name}}: {{obj.data.score}}</div>
                  <div v-else-if="obj.data.score == -1">{{obj.name}}: 0</div>
                </td>
              </tr>
              <tr>
                <td v-for="obj in bosses.slice(10,14)" v-bind:key="obj.data.name">
                  <div v-if="obj.data.score > 0">{{obj.name}}: {{obj.data.score}}</div>
                  <div v-else-if="obj.data.score == -1">{{obj.name}}: 0</div>
                </td>
              </tr>
              <tr>
                <td v-for="obj in bosses.slice(15,19)" v-bind:key="obj.data.name">
                  <div v-if="obj.data.score > 0">{{obj.name}}: {{obj.data.score}}</div>
                  <div v-else-if="obj.data.score == -1">{{obj.name}}: 0</div>
                </td>
              </tr>
              <tr>
                <td v-for="obj in bosses.slice(20,24)" v-bind:key="obj.data.name">
                  <div v-if="obj.data.score > 0">{{obj.name}}: {{obj.data.score}}</div>
                  <div v-else-if="obj.data.score == -1">{{obj.name}}: 0</div>
                </td>
              </tr>
              <tr>
                <td v-for="obj in bosses.slice(25,29)" v-bind:key="obj.data.name">
                  <div v-if="obj.data.score > 0">{{obj.name}}: {{obj.data.score}}</div>
                  <div v-else-if="obj.data.score == -1">{{obj.name}}: 0</div>
                </td>
              </tr>
              <tr>
                <td v-for="obj in bosses.slice(30,34)" v-bind:key="obj.data.name">
                  <div v-if="obj.data.score > 0">{{obj.name}}: {{obj.data.score}}</div>
                  <div v-else-if="obj.data.score == -1">{{obj.name}}: 0</div>
                </td>
              </tr>
              <tr>
                <td v-for="obj in bosses.slice(35,39)" v-bind:key="obj.data.name">
                  <div v-if="obj.data.score > 0">{{obj.name}}: {{obj.data.score}}</div>
                  <div v-else-if="obj.data.score == -1">{{obj.name}}: 0</div>
                </td>
              </tr>
              <tr>
                <td v-for="obj in bosses.slice(40,44)" v-bind:key="obj.data.name">
                  <div v-if="obj.data.score > 0">{{obj.name}}: {{obj.data.score}}</div>
                  <div v-else-if="obj.data.score == -1">{{obj.name}}: 0</div>
                </td>
              </tr>
              <tr>
                <td v-for="obj in bosses.slice(45,49)" v-bind:key="obj.data.name">
                  <div v-if="obj.data.score > 0">{{obj.name}}: {{obj.data.score}}</div>
                  <div v-else-if="obj.data.score == -1">{{obj.name}}: 0</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row text-center">
        <h2 class>Quest Data</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OsrsProfile",
  data() {
    return {
      account: null,
      bosses: [],
      api_url2: "http://localhost:4000/",
      api_url: "https://jamescerniglia.herokuapp.com/",
      namePretty: "",
      questData: null
    };
  },
  methods: {
    prettyBoss: function(x) {
      switch (x) {
        case "abyssalSire":
          return "Abyssal Sire";
        case "alchemicalHydra":
          return "Alchemical Hydra";
        case "barrows":
          return "Barrows";
        case "bryophyta":
          return "Bryophyta";
        case "cerberus":
          return "Cerberus";
        case "callisto":
          return "Callisto";
        case "chambersOfXeric":
          return "Chambers Of Xeric";
        case "chambersOfXericChallengeMode":
          return "Chambers Of Xeric Challenge Mode";
        case "chaosElemental":
          return "Chaos Elemental";
        case "commanderZilyana":
          return "Commander Zilyana";
        case "corporealBeast":
          return "Corporeal Beast";
        case "crazyArchaeologist":
          return "Crazy Archaeologist";
        case "dagannothPrime":
          return "DagannothPrime";
        case "dagannothSupreme":
          return "Dagannoth Supreme";
        case "derangedArchaeologist":
          return "Deranged Archaeologist";
        case "generalGraardor":
          return "General Graardor";
        case "giantMole":
          return "Giant Mole";
        case "hespori":
          return "Hespori";
        case "kalphiteQueen":
          return "Kalphite Queen";
        case "kingBlackDragon":
          return "King Black Dragon";
        case "kraken":
          return "Kraken";
        case "krilTsutsaroth":
          return "K'ril Tsutsaroth";
        case "mimic":
          return "Mimic";
        case "nightmare":
          return "Nightmare";
        case "obor":
          return "Obor";
        case "sarachnis":
          return "Sarachnis";
        case "skotizo":
          return "Skotizo";
        case "gauntlet":
          return "Gauntlet";
        case "corruptedGauntlet":
          return "Corrupted Gauntlet";
        case "theatreOfBlood":
          return "Theatre Of Blood";
        case "thermonuclearSmokeDevil":
          return "Thermonuclear Smoke Devil";
        case "tzKalZuk":
          return "tz-Kal-Zuk";
        case "tzTokJad":
          return "tz-Tok-Jad";
        case "venenatis":
          return "Venenatis";
        case "vetion":
          return "Vet'ion";
        case "vorkath":
          return "Vorkath";
        case "wintertodt":
          return "Wintertodt";
        case "zalcano":
          return "Zalcano";
        case "zulrah":
          return "Zulrah";

        default:
          return "UNKNONWN NAME";
      }
    },
    getSkillIcon: function(skillName) {
      // eslint-disable-next-line no-console
      return this.api_url + "Osrs/assets/skills/" + skillName + "_icon.png";
    }
  },
  props: ["userName"],

  mounted() {
    // eslint-disable-next-line no-console
    console.log(this.props);
    if (this.userName != "") {
      this.namePretty = this.userName.replace("_", " ");
      document.title = this.namePretty;
      fetch(this.api_url + "osrs/user/" + this.userName)
        .then(response => response.json())
        .then(result => {
          this.account = result;
          for (var n in this.account.main.bosses) {
            this.bosses.push({
              name: this.prettyBoss(n),
              data: this.account.main.bosses[n]
            });
          }
        });
      fetch(this.api_url + "osrs/user/" + this.userName)
        .then(response => response.json())
        .then(result => {
          this.account = result;
          for (var n in this.account.main.bosses) {
            this.bosses.push({
              name: this.prettyBoss(n),
              data: this.account.main.bosses[n]
            });
          }
        });
    }
  }
};
</script>
<style>
.container-custom {
  padding-right: 25px;
  padding-left: 25px;
}
.table {
  color: white;
}
.table thead {
  font-weight: bold;
  font-size: 16px;
}

#OsrsProfile {
  background-color: black;
}
.rsfont {
  font-family: "runescape_chat_bold_07regular";
  font-size: 18px;
  color: #ffff00;
  text-shadow: 1px 1px black;
}
</style>
