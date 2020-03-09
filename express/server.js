/* eslint-disable no-console */
/**
 * First attempt at MEVN Stack
 * https://vegibit.com/vue-js-express-tutorial/
 * Need to find service for hosting server (heroku) 2-26-2020
 * https://stormy-springs-24454.herokuapp.com/ | https://git.heroku.com/stormy-springs-24454.git
 * https://medium.com/@grantspilsbury/build-and-deploy-a-node-express-server-to-heroku-in-10-steps-70c936ab15dc
 * API_URL = "https://stormy-springs-24454.herokuapp.com/osrs/not_poop"
 * heroku logs --tail
 * 
 * serverless.com
 * arn:aws:iam::515897288344:role/SFProRole
 */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const osrshiscores = require('osrs-json-hiscores');
const notpoop = require('./notpoop.json');
const zezima = require('./zezima.json');
// const LeagueAccounts = require('./LeagueAccounts.json');
const app = express();

const request = require('request');
const riotApiKey = 'RGAPI-56d2cd77-e976-4598-be42-6ae272abd43a';
const ddragonRevision = "10.5.1"
app.use(cors());
app.use(bodyParser.json());
console.log(ddragonRevision);
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/server.html');

});

app.use('/LeagueOfLegends/assets', express.static(__dirname + '/static/LeagueOfLegends'));

app.get('/LeagueOfLegends/matchDetails/:matchId', function (req, res) {
    var matchId = req.params.matchId;
    var apiCall = 'https://na1.api.riotgames.com/lol/match/v4/matches/' + matchId + '?api_key=' + riotApiKey
    console.log('Calling Match details for match: ' + matchId);
    request({
        'uri': apiCall,
        'json': true
    }, function (error, response, matchDetailsJson) {
        if (!error && response.statusCode === 200) {
            console.log(matchDetailsJson);
            res.json(matchDetailsJson);
        }
        else {
            res.json({
                "status": {
                    "message": "Not Found",
                    "status_code": 404
                }
            });
        }
    });

});
app.get('/LeagueOfLegends/:accountId/matches', function (req, res) {
    var accountId = req.params.accountId;
    var matchesCallURI = 'https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/' + accountId + '?api_key=' + riotApiKey
    console.log('Calling Match details for accountId: ' + accountId);
    request({
        'uri': matchesCallURI,
        'json': true
    }, function (error, response, matches) {
        if (!error && response.statusCode === 200) {
            console.log(typeof (matches));
            res.json(matches);
        }
        else {
            res.json({
                "status": {
                    "message": "Not Matches Found for accountId: " + accountId,
                    "status_code": 404
                }
            });
        }
    });

});


app.get('/:game/user/:username', (req, res) => {
    /**
    * Way that currently works:
    * API_URL=https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=woox
    * console.log(req.params.userName);
    */

    console.log(req.params.game, req.params.username);
    if (req.params.username.includes(',')) {
        var usernameArray = req.params.username.split(','); console.log(usernameArray);
    }

    switch (req.params.game) {

        case 'osrs':
            var namePretty = req.params.username.replace('_', ' ');
            if (namePretty.toLowerCase() == 'not poop') {
                return notpoop;
            } else if (namePretty.toLowerCase() == 'zezima') {
                return zezima;
            } else {
                console.log('Requesting: ', namePretty);
                osrshiscores
                    .getStats(namePretty)
                    .then(function (res1) {
                        console.log('Resolved: ', namePretty)
                        return res1;
                    })
                    .catch(err => console.error(err));
            }
            break
        case 'LeagueOfLegends':

            var apiCall = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + encodeURIComponent(req.params.username.toLowerCase()) + '?api_key=' + riotApiKey

            request({
                'uri': apiCall,
                'json': true
            }, function (error, response, accountJson) {
                if (!error && response.statusCode === 200) {
                    console.log(accountJson);
                    res.json(accountJson);
                }

                else {
                    res.json({
                        "status": {
                            "message": "No Account found for username: " + req.params.username.toLowerCase(),
                            "status_code": 404
                        }
                    });
                }
            });
            break

        default:
            res.json({
                'No game found': 404,
                "wong game": req.params.game
            });
            break
    }
});


const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}, try clicking this https://jamescerniglia.herokuapp.com/osrs/users/not_poop or this http://localhost:4000/osrs/users/not_poop`);
});