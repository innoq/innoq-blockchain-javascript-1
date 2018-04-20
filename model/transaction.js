const uuidv4 = require('uuid/v4');

class Transaction {
    constructor(payload) {
        this.id = uuidv4();
        this.payload = payload;
        this.timestamp = Date.now();
    }
}

exports.Transaction = Transaction;
