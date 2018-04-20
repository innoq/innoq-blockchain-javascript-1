const Transaction = require("../model/transaction").Transaction;
const transactionView = require("../views/Transactions").TransactionView;

let transactionCollection = [];

const getForm = function(req, res) {
	res.send(transactionView.getTransactionForm());
}

const save = function(req, res) {
	const payload = req.body ? req.body.payload : "";
	transactionCollection.push({"transaction": new Transaction(payload), "blockedForMiningProcess": false});
	res.send(transactionView.postTransactionResult(payload));
}

const getUpToFiveTransactions = function() {
    return transactionCollection.slice(0, 5)
        .filter(elem => elem.blockedForMiningProcess === false)
        .map(elem => {
            elem.blockedForMiningProcess = true;
            return elem.transaction;
        });
}

const hasUnconfirmedTransactions = function() {
    return transactionCollection
        .filter(elem => elem.blockedForMiningProcess === false)
        .length > 0;
}

const removeProcessedTransactions = function(confirmedTransactions) {
    console.log("Remove confirmed transactions");
    transactionCollection = transactionCollection.filter(transaction => !confirmedTransactions.includes(transaction));
}

exports.getForm = getForm;
exports.getUpToFiveTransactions = getUpToFiveTransactions;
exports.hasUnconfirmedTransactions = hasUnconfirmedTransactions;
exports.save = save;
exports.removeProcessedTransactions = removeProcessedTransactions;
exports.transactionCollection = transactionCollection;
