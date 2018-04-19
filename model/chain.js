const Block = require("./block").Block;
const hashBlock = require("./helper").hashBlock;

const chain  = [];

const b = new Block("0", 1);
b.timestamp = 0;
b.proof = 1917336;
b.transactions.push({"id":"b3c973e2-db05-4eb5-9668-3e81c7389a6d","timestamp":0,"payload":"I am Heribert Innoq"});
chain.push(b);

exports.chain = chain;

exports.nextBlockCandidate = function() {
    return new Block(
        hashBlock(chain[chain.length -1]),
        chain.length
    );
}
