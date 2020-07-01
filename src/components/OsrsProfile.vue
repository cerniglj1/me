<template>
  <div id="OsrsProfile">
    <div class="d-flex justify-content-center warningBanner" v-if="status.code">
      <i class="fas fa-exclamation-triangle warningTriangle"></i>
      <p>The Old School Runescape HiScores are experiencing latency issues.</p>
    </div>
    <div class="jumbotron errorBanner" v-if="status.code == 400 ">
      <div class="d-flex justify-content-center">
        <h2>
          <i class="fas fa-bomb"></i> Uh oh...
        </h2>
      </div>
      <div class="d-flex justify-content-center">
        <h2>{{status.reason}}</h2>
      </div>
      <div class="d-flex justify-content-center">
        <input
          class="form-control"
          type="search"
          placeholder="Search username..."
          aria-label="Search"
          v-model="newName"
        />
        <button
          class="btn btn-success osrsSearchBtn"
          type="submit"
          v-on:click="getUser(newName)"
        >Search</button>
      </div>
    </div>
    <div class="d-flex justify-content-center loadingBanner" v-if="status.code == 10">
      <i class="fas fa-spinner loadingSpinner"></i>
    </div>

    <div class="d-flex justify-content-sm-around p-2" v-if="status.code == 100">
      <div class="jumbotron" v-if="account">
        <div class="d-flex flex-row" v-if="status.code == 100">
          <div class="p-1 failedUpdate" v-if="failedToUpdate">
            <p class="my-auto">
              <i class="fas fa-bomb"></i> Please wait atleast 10 minutes before updating again...
            </p>
          </div>
        </div>
        <div class="d-flex flex-row bd-highlight" v-if="status.code == 100">
          <div class="p-2 bd-highlight" v-if="status.code == 100">
            <h2>{{account.name}}</h2>
          </div>
          <div class="p-2 bd-highlight" v-if="status.code == 100">
            <button class="btn btn-danger" v-on:click="updateUser(account.name)">Update</button>
          </div>
          <div class="p-2 bd-highlight" v-if="status.code == 100 ">
            <p>
              Last Updated: {{this.formatDateSinceUpdate(
              this.account.lastUpdated
              )}}
            </p>
          </div>
        </div>

        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th class="pl-2" scope="col" colspan="2">Skill</th>
              <th scope="col">Rank</th>
              <th scope="col">Level</th>
              <th scope="col">Exp</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(skill, n) in account.main.skills" v-bind:key="skill" :id="skill">
              <td>
                <img class="pr-2" :src="getSkillIcon(n)" />
              </td>
              <td>{{n}}</td>
              <td>{{skill.rank}}</td>
              <td>{{skill.level}}</td>
              <td>{{skill.xp}}</td>
            </tr>
          </tbody>
          <tbody hidden>
            <tr>
              <td>
                <img class="pr-2" :src="getSkillIcon('Stats')" />
              </td>
              <td>Overall</td>
              <td>{{account.main.skills.overall.rank}}</td>
              <td>{{account.main.skills.overall.level}}</td>
              <td>{{account.main.skills.overall.xp}}</td>
            </tr>
            <tr>
              <td>
                <img class="pr-2" :src="getSkillIcon('Attack')" />
              </td>
              <td>Attack</td>
              <td>{{account.main.skills.attack.rank}}</td>
              <td>{{account.main.skills.attack.level}}</td>
              <td>{{account.main.skills.attack.xp}}</td>
            </tr>
            <tr>
              <td>
                <img class="pr-2" :src="getSkillIcon('Defence')" />
              </td>
              <td>Defence</td>
              <td>{{account.main.skills.defence.rank}}</td>
              <td>{{account.main.skills.defence.level}}</td>
              <td>{{account.main.skills.defence.xp}}</td>
            </tr>
            <tr>
              <td>
                <img class="pr-2" :src="getSkillIcon('Strength')" />
              </td>
              <td>Strength</td>
              <td>{{account.main.skills.strength.rank}}</td>
              <td>{{account.main.skills.strength.level}}</td>
              <td>{{account.main.skills.strength.xp}}</td>
            </tr>
            <tr>
              <td>
                <img class="pr-2" :src="getSkillIcon('Hitpoints')" />
              </td>
              <td>Hitpoints</td>
              <td>{{account.main.skills.hitpoints.rank}}</td>
              <td>{{account.main.skills.hitpoints.level}}</td>
              <td>{{account.main.skills.hitpoints.xp}}</td>
            </tr>
            <tr>
              <td>
                <img class="pr-2" :src="getSkillIcon('Ranged')" />
              </td>
              <td>Ranged</td>
              <td>{{account.main.skills.ranged.rank}}</td>
              <td>{{account.main.skills.ranged.level}}</td>
              <td>{{account.main.skills.ranged.xp}}</td>
            </tr>
            <tr>
              <td>
                <img class="pr-2" :src="getSkillIcon('Prayer')" />
              </td>
              <td>Prayer</td>
              <td>{{account.main.skills.prayer.rank}}</td>
              <td>{{account.main.skills.prayer.level}}</td>
              <td>{{account.main.skills.prayer.xp}}</td>
            </tr>
            <tr>
              <td>
                <img class="pr-2" :src="getSkillIcon('Magic')" />
              </td>
              <td>Magic</td>
              <td>{{account.main.skills.magic.rank}}</td>
              <td>{{account.main.skills.magic.level}}</td>
              <td>{{account.main.skills.magic.xp}}</td>
            </tr>
            <tr>
              <td>
                <img class="pr-2" :src="getSkillIcon('Cooking')" />
              </td>
              <td>Cooking</td>
              <td>{{account.main.skills.cooking.rank}}</td>
              <td>{{account.main.skills.cooking.level}}</td>
              <td>{{account.main.skills.cooking.xp}}</td>
            </tr>
            <tr>
              <td>
                <img class="pr-2" :src="getSkillIcon('Woodcutting')" />
              </td>
              <td>Woodcutting</td>
              <td>{{account.main.skills.woodcutting.rank}}</td>
              <td>{{account.main.skills.woodcutting.level}}</td>
              <td>{{account.main.skills.woodcutting.xp}}</td>
            </tr>
            <tr>
              <td>
                <img class="pr-2" :src="getSkillIcon('Fletching')" />
              </td>
              <td>Fletching</td>
              <td>{{account.main.skills.fletching.rank}}</td>
              <td>{{account.main.skills.fletching.level}}</td>
              <td>{{account.main.skills.fletching.xp}}</td>
            </tr>
            <tr>
              <td>
                <img class="pr-2" :src="getSkillIcon('Fishing')" />
              </td>
              <td>Fishing</td>
              <td>{{account.main.skills.fishing.rank}}</td>
              <td>{{account.main.skills.fishing.level}}</td>
              <td>{{account.main.skills.fishing.xp}}</td>
            </tr>
            <tr>
              <td>
                <img class="pr-2" :src="getSkillIcon('Firemaking')" />
              </td>
              <td>Firemaking</td>
              <td>{{account.main.skills.firemaking.rank}}</td>
              <td>{{account.main.skills.firemaking.level}}</td>
              <td>{{account.main.skills.firemaking.xp}}</td>
            </tr>
            <tr>
              <td>
                <img class="pr-2" :src="getSkillIcon('Crafting')" />
              </td>
              <td>Crafting</td>
              <td>{{account.main.skills.crafting.rank}}</td>
              <td>{{account.main.skills.crafting.level}}</td>
              <td>{{account.main.skills.crafting.xp}}</td>
            </tr>
            <tr>
              <td>
                <img class="pr-2" :src="getSkillIcon('Smithing')" />
              </td>
              <td>Smithing</td>
              <td>{{account.main.skills.smithing.rank}}</td>
              <td>{{account.main.skills.smithing.level}}</td>
              <td>{{account.main.skills.smithing.xp}}</td>
            </tr>
            <tr>
              <td>
                <img class="pr-2" :src="getSkillIcon('Mining')" />
              </td>
              <td>Mining</td>
              <td>{{account.main.skills.mining.rank}}</td>
              <td>{{account.main.skills.mining.level}}</td>
              <td>{{account.main.skills.mining.xp}}</td>
            </tr>
            <tr>
              <td>
                <img class="pr-2" :src="getSkillIcon('Herblore')" />
              </td>
              <td>Herblore</td>
              <td>{{account.main.skills.herblore.rank}}</td>
              <td>{{account.main.skills.herblore.level}}</td>
              <td>{{account.main.skills.herblore.xp}}</td>
            </tr>
            <tr>
              <td>
                <img class="pr-2" :src="getSkillIcon('Thieving')" />
              </td>
              <td>Thieving</td>
              <td>{{account.main.skills.thieving.rank}}</td>
              <td>{{account.main.skills.thieving.level}}</td>
              <td>{{account.main.skills.thieving.xp}}</td>
            </tr>
            <tr>
              <td>
                <img class="pr-2" :src="getSkillIcon('Slayer')" />
              </td>
              <td>Slayer</td>
              <td>{{account.main.skills.slayer.rank}}</td>
              <td>{{account.main.skills.slayer.level}}</td>
              <td>{{account.main.skills.slayer.xp}}</td>
            </tr>
            <tr>
              <td>
                <img class="pr-2" :src="getSkillIcon('Farming')" />
              </td>
              <td>Farming</td>
              <td>{{account.main.skills.farming.rank}}</td>
              <td>{{account.main.skills.farming.level}}</td>
              <td>{{account.main.skills.farming.xp}}</td>
            </tr>
            <tr>
              <td>
                <img class="pr-2" :src="getSkillIcon('Runecraft')" />
              </td>
              <td>Runecraft</td>
              <td>{{account.main.skills.runecraft.rank}}</td>
              <td>{{account.main.skills.runecraft.level}}</td>
              <td>{{account.main.skills.runecraft.xp}}</td>
            </tr>
            <tr>
              <td>
                <img class="pr-2" :src="getSkillIcon('Hunter')" />
              </td>
              <td>Hunter</td>
              <td>{{account.main.skills.hunter.rank}}</td>
              <td>{{account.main.skills.hunter.level}}</td>
              <td>{{account.main.skills.hunter.xp}}</td>
            </tr>
            <tr>
              <td>
                <img class="pr-2" :src="getSkillIcon('Construction')" />
              </td>

              <td>Construction</td>
              <td>{{account.main.skills.construction.rank}}</td>
              <td>{{account.main.skills.construction.level}}</td>
              <td>{{account.main.skills.construction.xp}}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="row" hidden>
        <div class="col-4"></div>
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
      api_url1: "http://localhost:4000/",
      api_url: "https://jamescerniglia.herokuapp.com/",
      namePretty: "",
      questData: null,
      account2: null,
      newName: "",
      status: { name: "Starting", code: 0 },
      failedToUpdate: false
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
      //here we determine which skill to get
   
     
      return this.api_url + "Osrs/assets/skills/" + skillName.toLowerCase() + "_icon.png";
    },
    getUser: function(name) {
      this.$router.push({ path: `/osrs/u/${name}` });
    },
    updateUser: function(nameToUpdate) {
      fetch(this.api_url + "osrs/update/?username=" + nameToUpdate)
        .then(response => response.json())
        .then(result => {
          if (result.success == false) {
            this.failedToUpdate = true;
            //fade the error message out
            setTimeout(() => {
              this.failedToUpdate = false;
            }, 4000);
          }
          if (result.success != false) {
            this.status = { name: "Success", code: 100 };
            this.account = result;
            for (var n in this.account.main.bosses) {
              this.bosses.push({
                name: this.prettyBoss(n),
                data: this.account.main.bosses[n]
              });
            }
          }
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.error("Error:", { error });
          if (error.message == "Failed to fetch") {
            this.status = {
              name: error,
              code: 400,
              reason: "Failed to find a user: " + this.userName
            };
          } else {
            this.status = { name: error, code: 400, reason: "" };
          }
        });
    },
    formatDateSinceUpdate: function(time) {
      var t = new Date(time);
      var now = new Date();
      // var diff = new Date(new Date().getTime() - t.getTime());

      if (!time) {
        return "just now...";
      }
      // eslint-disable-next-line no-console
      console.log({
        m1: now.getMonth(),
        m2: t.getMonth(),
        h1: now.getHours(),
        h2: t.getHours()
      });
      /** if they are updated within the same month */
      if (now.getMonth() == t.getMonth()) {
        if (now.getDate() == t.getDate()) {
          if (now.getHours() - t.getHours() <= 1) {
            return Math.abs(now.getMinutes() - t.getMinutes()) + " minutes ago";
          } else {
            return Math.abs(now.getHours() - t.getHours()) + " minutes ago";
          }
        } else {
          return now.getDate() - t.getDate() == 1
            ? "1 day ago"
            : now.getDate() - t.getDate() + " days ago";
        }
      }
    }
  },
  props: ["userName"],

  mounted() {
    // eslint-disable-next-line no-console
    console.log(this.props);
    if (this.userName != "") {
      this.namePretty = this.userName.replace("_", " ");
      document.title = this.namePretty;
      this.status = { name: "Loading", code: 10 };
      fetch(this.api_url + "osrs/u/?username=" + this.userName)
        .then(response => response.json())
        .then(result => {
          this.status = { name: "Success", code: 100 };
          this.account = result;
          for (var n in this.account.main.bosses) {
            this.bosses.push({
              name: this.prettyBoss(n),
              data: this.account.main.bosses[n]
            });
          }
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.error("Error:", { error });
          if (error.message == "Failed to fetch") {
            this.status = {
              name: error,
              code: 400,
              reason: "Failed to find a user: " + this.userName
            };
          } else {
            this.status = { name: error, code: 400, reason: "" };
          }
        });
    }
  },
  functions: {}
};
</script>
<style scoped>
.table {
  color: white;
}

.table td {
  padding: 0.4rem;
}
.table thead {
  font-weight: bold;
  font-size: 16px;
}

#OsrsProfile {
  background-color: transparent;
}
.rsfont {
  font-family: "runescape_chat_bold_07regular";
  font-size: 18px;
  color: #ffff00;
  text-shadow: 1px 1px black;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
    color: white;
  }
  10% {
    color: red;
  }
  20% {
    color: orange;
  }
  30% {
    color: yellow;
  }
  40% {
    color: greenyellow;
  }
  50% {
    color: green;
  }
  60% {
    color: cyan;
  }
  70% {
    color: blue;
  }
  80% {
    color: purple;
  }
  90% {
    color: red;
  }
  100% {
    transform: rotate(360deg);
    color: white;
  }
}
.errorBanner {
  background: #e98585;
  color: white;
}
.errorBanner input {
  width: 20%;
  background: #bebebe;
  color: white;
}
.errorBanner .btn {
  margin-left: 15px;
}
.loadingBanner {
  padding-top: 100px;
  padding-bottom: 100px;
}
.loadingSpinner {
  color: White;
  font-size: 64px;
  -webkit-animation-name: spin;
  animation-name: spin;
  animation-duration: 1500ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.warningBanner {
  background: #e9df85;
  padding-top: 5px;

  padding-bottom: 5px;
}
.warningBanner p {
  margin-top: auto;
  margin-bottom: auto;
  padding-left: 5px;
}
.warningTriangle {
  font-size: 36px;
}
.failedUpdate {
  background: #e98585;
  color: white;
  border-radius: 10px;
  visibility: visible;
  opacity: 1;
  transition: opacity 2s linear;
}
</style>
