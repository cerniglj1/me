/* eslint-disable no-console */
/**
 * First attempt at MEVN Stack
 * https://vegibit.com/vue-js-express-tutorial/
 * Need to find service for hosting server (heroku) 2-26-2020
 * https://stormy-springs-24454.herokuapp.com/ | https://git.heroku.com/stormy-springs-24454.git
 * https://medium.com/@grantspilsbury/build-and-deploy-a-node-express-server-to-heroku-in-10-steps-70c936ab15dc
 * API_URL = "https://stormy-springs-24454.herokuapp.com/osrs/not_poop"
 */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const osrshiscores = require('osrs-json-hiscores');
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Behold The MEVN Stack!'
    });
});
app.get('/not_poop', (req, res) => {
    res.json({
        "name": "not poop",
        "mode": "main",
        "dead": false,
        "deulted": false,
        "deironed": false,
        "main": {
            "skills": {
                "overall": {
                    "rank": 179495,
                    "level": 1846,
                    "xp": 92820851
                },
                "attack": {
                    "rank": 202092,
                    "level": 93,
                    "xp": 7892876
                },
                "defence": {
                    "rank": 368777,
                    "level": 82,
                    "xp": 2438132
                },
                "strength": {
                    "rank": 207359,
                    "level": 99,
                    "xp": 13089612
                },
                "hitpoints": {
                    "rank": 168261,
                    "level": 99,
                    "xp": 15115409
                },
                "ranged": {
                    "rank": 211241,
                    "level": 98,
                    "xp": 11990864
                },
                "prayer": {
                    "rank": 284619,
                    "level": 74,
                    "xp": 1098950
                },
                "magic": {
                    "rank": 204880,
                    "level": 95,
                    "xp": 9029732
                },
                "cooking": {
                    "rank": 195919,
                    "level": 91,
                    "xp": 6143403
                },
                "woodcutting": {
                    "rank": 386162,
                    "level": 75,
                    "xp": 1245749
                },
                "fletching": {
                    "rank": 343913,
                    "level": 79,
                    "xp": 1930005
                },
                "fishing": {
                    "rank": 382792,
                    "level": 75,
                    "xp": 1210836
                },
                "firemaking": {
                    "rank": 467611,
                    "level": 70,
                    "xp": 785982
                },
                "crafting": {
                    "rank": 400393,
                    "level": 70,
                    "xp": 769566
                },
                "smithing": {
                    "rank": 316634,
                    "level": 70,
                    "xp": 803895
                },
                "mining": {
                    "rank": 334349,
                    "level": 72,
                    "xp": 899498
                },
                "herblore": {
                    "rank": 182824,
                    "level": 78,
                    "xp": 1651115
                },
                "agility": {
                    "rank": 378756,
                    "level": 70,
                    "xp": 783123
                },
                "thieving": {
                    "rank": 272488,
                    "level": 70,
                    "xp": 805362
                },
                "slayer": {
                    "rank": 63042,
                    "level": 97,
                    "xp": 10912484
                },
                "farming": {
                    "rank": 215350,
                    "level": 80,
                    "xp": 2003184
                },
                "runecraft": {
                    "rank": 138102,
                    "level": 69,
                    "xp": 703846
                },
                "hunter": {
                    "rank": 276464,
                    "level": 70,
                    "xp": 770546
                },
                "construction": {
                    "rank": 292945,
                    "level": 70,
                    "xp": 746682
                }
            },
            "leaguePoints": {
                "rank": -1,
                "score": -1
            },
            "bountyHunter": {
                "rogue": {
                    "rank": -1,
                    "score": -1
                },
                "hunter": {
                    "rank": -1,
                    "score": -1
                }
            },
            "lastManStanding": {
                "rank": 58995,
                "score": 500
            },
            "clues": {
                "all": {
                    "rank": 81460,
                    "score": 249
                },
                "beginner": {
                    "rank": 394330,
                    "score": 1
                },
                "easy": {
                    "rank": 107216,
                    "score": 21
                },
                "medium": {
                    "rank": 182264,
                    "score": 24
                },
                "hard": {
                    "rank": 42478,
                    "score": 190
                },
                "elite": {
                    "rank": 102011,
                    "score": 11
                },
                "master": {
                    "rank": 99356,
                    "score": 2
                }
            },
            "bosses": {
                "abyssalSire": {
                    "rank": 81776,
                    "score": 3
                },
                "alchemicalHydra": {
                    "rank": 24866,
                    "score": 481
                },
                "barrows": {
                    "rank": 260501,
                    "score": 31
                },
                "bryophyta": {
                    "rank": -1,
                    "score": -1
                },
                "callisto": {
                    "rank": 104335,
                    "score": 3
                },
                "cerberus": {
                    "rank": 90367,
                    "score": 8
                },
                "chambersOfXeric": {
                    "rank": 147279,
                    "score": 1
                },
                "chambersOfXericChallengeMode": {
                    "rank": -1,
                    "score": -1
                },
                "chaosElemental": {
                    "rank": 31626,
                    "score": 30
                },
                "chaosFanatic": {
                    "rank": -1,
                    "score": -1
                },
                "commanderZilyana": {
                    "rank": -1,
                    "score": -1
                },
                "corporealBeast": {
                    "rank": 101745,
                    "score": 2
                },
                "crazyArchaeologist": {
                    "rank": 58426,
                    "score": 35
                },
                "dagannothPrime": {
                    "rank": 140758,
                    "score": 8
                },
                "dagannothRex": {
                    "rank": 184506,
                    "score": 7
                },
                "dagannothSupreme": {
                    "rank": 139395,
                    "score": 9
                },
                "derangedArchaeologist": {
                    "rank": -1,
                    "score": -1
                },
                "generalGraardor": {
                    "rank": 123350,
                    "score": 32
                },
                "giantMole": {
                    "rank": 87080,
                    "score": 35
                },
                "grotesqueGuardians": {
                    "rank": 59693,
                    "score": 34
                },
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
        }
    });
});

app.get('/osrs/:userName', (req, res) => {
    /**
    * Way that currently works:
    // API_URL=https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=woox
    console.log(req.params.userName);*/
    var namePretty = req.params.userName.replace('_', ' ');
    console.log('Requested: ', namePretty);
    osrshiscores
        .getStats(namePretty)
        .then(function (res1) {
            console.log('Resolved: ', namePretty)
            res.json(res1);
        })
        .catch(err => console.error(err));


    // var api_url = "https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player="
    // var namePretty = req.params.userName.replace('_', ' ');
    // var urlName = encodeURIComponent(namePretty);
    // var call = api_url.concat(urlName)

    // fetch(call)
    //     .then(res => res.text())
    //     .then(function (body) {
    //         createAccount(namePretty, body);

    //     });


});

// function createAccount(namePretty, body) {
//     var account = {};
//     console.log(typeof (body));
//     console.log(body);
//     return account;
// }

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}, try clicking this https://stormy-springs-24454.herokuapp.com/osrs/not_poop
    \n or this http://localhost:4000/osrs/not_poop`);
});