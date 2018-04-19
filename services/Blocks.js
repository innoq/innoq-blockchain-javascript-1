const Block = require("../model/block").Block
const chain = require("../model/chain").chain
const getBlocks = function(req, res) {
	res.send({ 
		blocks : chain,
		blockHeight: chain.length
	});
}

exports.getBlocks = getBlocks;