class Block {
    constructor(previousBlockHash, index) {
        this.index = index;
        this.timestamp = Date.now();
        this.proof = null;
        this.transactions = [];
        this.previousBlockHash = previousBlockHash;
    }
}

exports.Block = Block;