const hashBlock = require("../helper").hashBlock;
const chain = require("../model/chain");

const mineBlock = function(req, res) {
    const blockCandidate = chain.nextBlockCandidate();

    let newHash = null;
    let tryNumber = 0;
    const startTime = Date.now();
    do {
        blockCandidate.proof = tryNumber;
        newHash = hashBlock(blockCandidate);
        tryNumber++;
    } while (newHash.substring(0,6) !== "000000");
    const elapsedTimeMillis = Date.now() - startTime;

    chain.saveBlock(blockCandidate);
    const seconds = elapsedTimeMillis / 1000
    res.send({
        "message": "Mined a new block in " + seconds + "s. Hashing power: " +  hashRate(tryNumber + 1, seconds) + " hashes/s.",
        "block": blockCandidate 
    });
}

function hashRate(tries, seconds) {
    return Math.floor(tries / seconds);
}

exports.mineBlock = mineBlock;
