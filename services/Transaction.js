const Transaction = require("../model/transaction").Transaction;
const transactionView = require("../views/Transactions").TransactionView;

let transactionCollection = [];
let sseStream = null;

const getForm = function(req, res) {
	res.send(transactionView.getTransactionForm());
};

const setSseStream = function(sseStreamPar) {
    sseStream = sseStreamPar;
};

const save = function(req, res) {
	const payload = req.body ? req.body.payload : "";
	const transaction = new Transaction(payload);
	transactionCollection.push({"transaction": transaction, "blockedForMiningProcess": false});
	sseStream && sseStream.sendEvent("new_transaction", transaction);
	res.send(transactionView.postTransactionResult(payload));
};

const getUpToFiveTransactions = function() {
    return transactionCollection
        .filter(elem => elem.blockedForMiningProcess === false)
        .slice(0, 5)
        .map(elem => {
            elem.blockedForMiningProcess = true;
            return elem.transaction;
        });
};

const hasUnconfirmedTransactions = function() {
    return transactionCollection
        .filter(elem => elem.blockedForMiningProcess === false)
        .length > 0;
};

const removeProcessedTransactions = function(confirmedTransactions) {
    console.log("Remove confirmed transactions", confirmedTransactions.map(transaction => transaction.id).join(", "));
    transactionCollection = transactionCollection.filter(transaction => {
        confirmedTransactionIds = confirmedTransactions.map(trans => trans.id);
        return !confirmedTransactionIds.includes(transaction.id);
    });
};

exports.getForm = getForm;
exports.getUpToFiveTransactions = getUpToFiveTransactions;
exports.hasUnconfirmedTransactions = hasUnconfirmedTransactions;
exports.save = save;
exports.removeProcessedTransactions = removeProcessedTransactions;
exports.transactionCollection = transactionCollection;
exports.setSseStream = setSseStream;
