const information = require("./services/Information");
const blocks = require("./services/Blocks");
const mine = require("./services/Mine");
const transaction = require("./services/Transaction");
const bodyParser = require('body-parser');

const express = require('express');
const app = express();


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', information.getInfo);
app.get('/blocks', blocks.getBlocks);
app.get('/mine', mine.mineBlock);
app.get('/transaction', transaction.getForm);
app.post('/transaction', transaction.save);

app.get('/events', blocks.createBlocksSSE);

app.listen(3005);
