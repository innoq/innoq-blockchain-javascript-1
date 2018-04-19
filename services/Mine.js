const hashBlock = require("../helper").hashBlock;
const chain = require("../model/chain");

const mineBlock = function(req, res) {
    const blockCandidate = chain.nextBlockCandidate();

    let newHash = null;
    let proof = 0;
    do {
        blockCandidate.proof = proof;
        newHash = hashBlock(blockCandidate);
        proof++;
    } while (newHash.substring(0,6) !== "000000");

    chain.saveBlock(blockCandidate);
    res.send({"blockCandidate": blockCandidate, "newHash": newHash});
}

exports.mineBlock = mineBlock;
