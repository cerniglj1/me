/* eslint-disable no-console */
/**
 * First attempt at MEVN Stack
 * https://vegibit.com/vue-js-express-tutorial/
 * Need to find service for hosting server (heroku) 2-26-2020
 */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const urllib = require('urllib');
const osrshiscores = require('osrs-json-hiscores');
const app = express();
const fetch = require("node-fetch");
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Behold The MEVN Stack!'
    });
});

app.get('/osrs/:userName', (req, res) => {
    /*
    * Way that currently works:
    // API_URL=https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=woox
    console.log(req.params.userName);
    // req.params.userName.replace('_', ' ')*/
    console.log('Requested: ', req.params.userName);
    osrshiscores
        .getStats(req.params.userName)
        .then(function (res1) {
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

function createAccount(namePretty, body) {
    var account = {};
    console.log(typeof (body));
    console.log(body);
    return account;
}

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}, try clicking this http://localhost:4000/osrs/not_poop`);
});