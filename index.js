/* eslint-disable no-console */
/**
 * First attempt at MEVN Stack
 * https://vegibit.com/vue-js-express-tutorial/
 */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const urllib = require('urllib');
const osrshiscores = require('osrs-json-hiscores');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Behold The MEVN Stack!'
    });
});

app.get('/osrsAccounts/:userName', (req, res) => {
    
    console.log(req.params.userName);
    // req.params.userName.replace('_', ' ')
    osrshiscores
        .getStats(req.params.userName)
        .then(function (res1) {
            res.json({
                account: res1
            });
        })
        .catch(err => console.error(err));


});


const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}, try clicking this http://localhost:4000/notpoop`);
});