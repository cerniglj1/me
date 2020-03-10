/* eslint-disable no-console */
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://James:lol123@cluster0-ookoi.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    var LeagueOfLegendsPlayers = client.db("LeagueOfLegends")
    LeagueOfLegendsPlayers.collection("players").findOne({ summonerName: 'ShadowStar325' }, function(err, result) {
        if (err) { throw err }
        console.log(result);
    });
    if (err) { throw err }

});