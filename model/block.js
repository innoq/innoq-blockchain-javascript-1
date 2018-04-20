class Block {
    constructor(transactions, previousBlockHash, index) {
        this.index = index;
        this.timestamp = Date.now();
        this.proof = null;
        this.transactions = transactions;
        this.previousBlockHash = previousBlockHash;
    }
}

exports.Block = Block;
