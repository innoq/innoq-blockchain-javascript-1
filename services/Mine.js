const hashBlock = require("../helper").hashBlock;
const chain = require("../model/chain");
const transactionService = require("../services/Transaction");

const mineBlock = function(req, res) {
    if (transactionService.hasUnconfirmedTransactions()) {
        const blockCandidate = chain.nextBlockCandidate();

        let newHash = null;
        let tryNumber = 0;
        const startTime = Date.now();

        const blockCandidateString = JSON.stringify(blockCandidate);
        const firstPart = blockCandidateString.substring(0, blockCandidateString.indexOf(">!#") - 1);
        const firstPartArrayBuffer = Buffer.from(firstPart);
        const lastPart = blockCandidateString.substring(blockCandidateString.indexOf(">!#") + 4, blockCandidateString.length);
        const lastPartArrayBuffer = Buffer.from(lastPart);
        do {
            const tryNumberArrayBuffer = Buffer.from(tryNumber.toString());
            const blockCandidateArrayBuffer = Buffer.concat([firstPartArrayBuffer, tryNumberArrayBuffer, lastPartArrayBuffer]);
            newHash = hashBlock(blockCandidateArrayBuffer);

            blockCandidate.proof = tryNumber;
            tryNumber++;
        } while (newHash.substring(0,3) !== "000");
        const elapsedTimeMillis = Date.now() - startTime;

        chain.saveBlock(blockCandidate);
        transactionService.removeProcessedTransactions(blockCandidate.transactions);
        const seconds = elapsedTimeMillis / 1000
        res.send({
            "message": "Mined a new block in " + seconds + "s. Hashing power: " +  hashRate(tryNumber + 1, seconds) + " hashes/s.",
            "block": blockCandidate
        });
    } else {
        res.send({
            "message": "There are no transactions to mine a new block for!"
        })
    }

}

function hashRate(tries, seconds) {
    return Math.floor(tries / seconds);
}

exports.mineBlock = mineBlock;
