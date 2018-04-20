class Block {
    constructor(transactions, previousBlockHash, index) {
        this.index = index;
        this.timestamp = Date.now();
        this.proof = ">!#";         // placeholder to insert proof into string during mining
        this.transactions = transactions;
        this.previousBlockHash = previousBlockHash;
    }
}

exports.Block = Block;
