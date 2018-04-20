const Block = require("./block").Block;
const hashBlock = require("../helper").hashBlock;
const transactionService = require("../services/Transaction");
const Transaction = require("../model/transaction").Transaction;

const chain  = createChain();

function createChain() {
    return [createGenesisBlock()];
}

function createGenesisBlock() {
    const transaction = new Transaction({"id":"b3c973e2-db05-4eb5-9668-3e81c7389a6d","timestamp":0,"payload":"I am Heribert Innoq"});
    const transactionList = [transaction];
    const b = new Block(transactionList, "0", 1);
    b.timestamp = 0;
    b.proof = 1917336;
    return b;
}

exports.chain = chain;

exports.nextBlockCandidate = function() {
    if (transactionService.hasUnconfirmedTransactions()) {
        return new Block(
            transactionService.getUpToFiveTransactions(),
            hashBlock(chain[chain.length - 1]),
            chain.length + 1
        );
    } else {
        return null;
    }
}

exports.saveBlock = function(newBlock) {
    chain.push(newBlock);
    return chain;
}
