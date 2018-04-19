const informationsHandler = require("./services/Information");
const blocksHandler = require("./services/Blocks");
const mineHandler = require("./services/Mine");

const express = require('express');
const app = express();

app.get('/', informationsHandler);
app.get('/blocks', blocksHandler);
app.get('/mine', mineHandler);

app.listen(3000);
