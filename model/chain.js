const Block = require("./block").Block;
const hashBlock = require("./helper").hashBlock;

const chain  = [];

const b = new Block("0", 1);
b.timestamp = 0;
b.proof = 1917336;
chain.push(b);

exports.chain = chain;

exports.nextBlockCandidate = function() {
    return new Block(
        hashBlock(chain[chain.length -1]),
        chain.length
    );
}