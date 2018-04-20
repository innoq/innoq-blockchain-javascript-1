const getBlocks = function(req, res) {
	const chain = require("../model/chain").chain;
	res.send({
		blocks : chain,
		blockHeight: chain.length
	});
};

exports.getBlocks = getBlocks;