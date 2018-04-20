//const transactionCollection = require("../model/transactionCollection");
const transactionView = require("../views/Transactions").TransactionView;

const getForm = function(req, res) {
	console.log("hi", transactionView);
	res.send(transactionView.getTransactionForm());
}

const save = function(req, res) {
	const payload = req.body ? req.body.payload : "";
	//transactionCollection.addNewTransaction(payload);
	res.send(transactionView.postTransactionResult(payload));
}

exports.getForm = getForm;
exports.save = save;