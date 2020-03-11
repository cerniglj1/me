/* eslint-disable no-console */
/**
 * First attempt at MEVN Stack
 * https://vegibit.com/vue-js-express-tutorial/
 * Need to find service for hosting server (heroku) 2-26-2020
 * https://jamescerniglia.herokuapp.com/ | https://git.heroku.com/jamescerniglia.git
 * https://medium.com/@grantspilsbury/build-and-deploy-a-node-express-server-to-heroku-in-10-steps-70c936ab15dc
 * API_URL = "https://jamescerniglia.herokuapp.com/osrs/not_poop"
 * heroku logs --tail
 * 
 */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const osrshiscores = require('osrs-json-hiscores');
const app = express();
const request = require('request');
const riotApiKey = 'RGAPI-69e54282-fb8e-4460-b890-53ee267cc440';

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://James:lol123@cluster0-ookoi.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/server.html');

});

app.use('/LeagueOfLegends/assets', express.static(__dirname + '/static/LeagueOfLegends'));
// app.use('/Osrs/assets', express.static(__dirname + '/static/Osrs'));
// app.use('/Cerniglia', express.static(__dirname + '/static/Cerniglia/'));
app.get('/LeagueOfLegends/:accountId/matches', function(req, res) {
    var accountId = req.params.accountId;
    var matchesCallURI = 'https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/' + accountId + '?api_key=' + riotApiKey
        // console.log('Calling Match details for accountId: ' + accountId);
    request({
        'uri': matchesCallURI,
        'json': true
    }, function(error, response, matches) {
        if (!error && response.statusCode === 200) {
            // console.log(typeof(matches));
            res.json(matches);
        } else {
            res.json({
                "status": {
                    "message": "No Matches Found for accountId: " + accountId,
                    "statusCode": 404
                }
            });
        }
    });

});

app.get('/LeagueOfLegends/matchDetails/:matchId', function(req, res) {

    var matchId = Number(req.params.matchId);

    client.connect(err => {
        var LeagueOfLegends = client.db("LeagueOfLegends")
        LeagueOfLegends.collection("matches").findOne({ "gameId": matchId }, function(err, databaseResult) {
            if (err) { throw err }

            console.log('result:', databaseResult, err);
            if (databaseResult != null) {

                res.json(databaseResult);
                return databaseResult;
            } else if (databaseResult == null) {
                var apiCall = 'https://na1.api.riotgames.com/lol/match/v4/matches/' + matchId + '?api_key=' + riotApiKey
                request({
                    'uri': apiCall,
                    'json': true
                }, function(error, response, matchDetailsJson) {
                    if (!error && response.statusCode === 200) {
                        // console.log(matchDetailsJson);
                        // var databaseObject = matchDetailsJson;
                        LeagueOfLegends.collection("matches").insertOne(matchDetailsJson, function(err, res) {
                            if (err) { throw err }
                            if (res == null) {
                                err = null
                            }
                            client.close();
                        });

                        res.json(matchDetailsJson);
                        return matchDetailsJson;

                    } else {
                        res.json({
                            "status": {
                                "message": "Not Found",
                                "statusCode": 404
                            }
                        });
                    }
                });
            }
        });
        if (err) { throw err }
    });

});

app.get('/:game/user/:username', (req, res) => {
    /**
     * Way that currently works:
     * API_URL=https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=woox
     * console.log(req.params.userName);
     */

    // console.log(req.params.game, req.params.username);
    if (req.params.username.includes(',')) {
        var usernameArray = req.params.username.split(',');
        console.log(usernameArray);
    }

    switch (req.params.game) {
        case 'osrs':
            var namePretty = req.params.username.replace('_', ' ').toLowerCase();

            client.connect(err => {
                var OsrsPlayers = client.db("Osrs")
                OsrsPlayers.collection("players").findOne({ "nameLowercase": namePretty },
                    function(err, databaseResult) {
                        if (err) { throw err }
                        console.log('result:', databaseResult);

                        if (databaseResult != null) {
                            res.json(databaseResult);
                        } else if (databaseResult == null) {
                            osrshiscores
                                .getStats(namePretty)
                                .then(function(res1) {
                                    console.log('res1: ', res1);
                                    var databaseObject = res1;
                                    databaseObject.nameLowercase = namePretty;
                                    OsrsPlayers.collection("players").insertOne(databaseObject, function(err, res) {
                                        console.log(res);
                                        client.close();
                                    });

                                    res.json(res1);
                                })
                                .catch(err => console.error(err));
                        }
                    });
                if (err) { throw err }
            });
            break
        case 'LeagueOfLegends':
            client.connect(err => {
                var LeagueOfLegends = client.db("LeagueOfLegends")
                LeagueOfLegends.collection("players").findOne({ "summonerName": req.params.username.toLowerCase() }, function(err, databaseResult) {
                    if (err) { throw err }
                    console.log('result:', databaseResult);
                    if (databaseResult != null) {
                        res.json(databaseResult);

                    } else if (databaseResult == null) {
                        var apiCall = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + encodeURIComponent(req.params.username.toLowerCase()) + '?api_key=' + riotApiKey

                        request({
                            'uri': apiCall,
                            'json': true
                        }, function(error, response, accountJson) {
                            if (!error && response.statusCode === 200) {
                                var databaseObject = accountJson;
                                databaseObject.summonerName = accountJson.name.toLowerCase();
                                LeagueOfLegends.collection("players").insertOne(databaseObject, function(err, res) {

                                    console.log(res);
                                    client.close();
                                });
                                res.json(accountJson);
                            } else {
                                res.json({
                                    "status": {
                                        "message": "No Account found for username: " + req.params.username.toLowerCase(),
                                        "statusCode": 404
                                    }
                                });
                            }
                        });

                    }

                });
                if (err) { throw err }

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

const port = process.env.PORT || 8081;
app.listen(port, () => {
    console.log(`listening on ${port}, try clicking this https://jamescerniglia.herokuapp.com/osrs/user/not_poop or this http://localhost:8081/osrs/user/not_poop`);
});