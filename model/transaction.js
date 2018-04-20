const uuidv4 = require('uuid/v4');

class Transaction {
    constructor(payload) {
        this.id = uuidv4();
        this.timestamp = Date.now();
        this.payload = payload;
    }
}

exports.Transaction = Transaction;
