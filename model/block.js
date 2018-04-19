class Block {
    constructor(index) {
        this.index = index;
        this.timestamp = Date.now();
        this.proof = null;
        this.transactions = [];
        this.previousBlockHash = null;
    }
}

exports.Block = Block;