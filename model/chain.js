const Block = require("./block").Block

const chain  = [];

const b = new Block();
b.index = 1;
b.timestamp = 0;
b.proof = 1917336
b.previousBlockHash = "0";
chain.push(b);

exports.chain = chain;