const information = require("./services/Information");
const blocks = require("./services/Blocks");
const mine = require("./services/Mine");

const express = require('express');
const app = express();

app.get('/', information.getInfo);
app.get('/blocks', blocks.getBlocks);
app.get('/mine', mine.mineBlock);

app.listen(3005);
