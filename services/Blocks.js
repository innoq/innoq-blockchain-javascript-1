const Block = require("../model/block").Block
const getBlocks = function(req, res) {
	
	
	b = new Block(1);
	
	res.send(b);
}

exports.getBlocks = getBlocks;