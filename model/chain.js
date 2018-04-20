const Block = require("./block").Block;
const hashBlock = require("../helper").hashBlock;
const transactionService = require("../services/Transaction");
const Transaction = require("../model/transaction").Transaction;

const chain  = createChain();
let sseStream = null;

function createChain() {
    return [createGenesisBlock()];
}

function createGenesisBlock() {
    const transaction = new Transaction("I am Heribert Innoq");
    transaction.id = "b3c973e2-db05-4eb5-9668-3e81c7389a6d";
    transaction.timestamp = 0;

    const transactionList = [transaction];
    const b = new Block(transactionList, "0", 1);
    b.timestamp = 0;
    b.proof = 1917336;
    return b;
}

exports.chain = chain;

exports.nextBlockCandidate = function() {
    return new Block(
        transactionService.getUpToFiveTransactions(),
        hashBlock(JSON.stringify(chain[chain.length - 1])),
        chain.length + 1
    );
};

exports.saveBlock = function(newBlock) {
    chain.push(newBlock);
    sseStream.sendEvent("new_block", newBlock);
    return chain;
};

exports.setSseStream = (sseStreamPar) => {
    sseStream = sseStreamPar;
};