const TransactionView = {
	getTransactionForm: function() {
		return '<form action="/transaction" method="POST"><input id="payload" name="payload" type="text" placeholder="payload"><input type="submit" value="Save payload"></form>';
	},

	postTransactionResult: function(payload) {
		return "New transaction with following payload: " + payload;
	}
}

exports.TransactionView = TransactionView;