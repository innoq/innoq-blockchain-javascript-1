
const bodyParser = require('body-parser');
const information = require("./services/Information");
const blocks = require("./services/Blocks");
const mine = require("./services/Mine");
const transaction = require("./services/Transaction");
const nodes = require("./services/Nodes");
const events = require("./services/Events");
const express = require('express');
const app = express();

const neighboursModule = require("./model/neighbours");

function getArg(argName){
    const argDef = process.argv.filter(arg => arg.startsWith(argName + "="))[0];
    return argDef ? argDef.split("=")[1] : null;
}

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', information.getInfo);
app.get('/blocks', blocks.getBlocks);
app.get('/mine', mine.mineBlock);
app.get('/transaction', transaction.getForm);
app.post('/transaction', transaction.save);
app.post('/nodes/register', nodes.register);

app.get('/events', events.createSse);

const port = getArg("port") || 3005;
const neighbour = getArg("neighbour") || null;

app.listen(port);

neighbour && neighboursModule.addNeighbour("id", neighbour);

if (neighboursModule.neighbours.length > 0) {
    request(neighboursModule.neighbours[0].host + "/blocks", { json: true }, (err, res, body) => {
        if (err) { 
            return console.log(err); 
        }
        chainModule.replaceChain(body.blocks);
    })
};