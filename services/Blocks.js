const SSE = require("sse-nodejs");
const chainModule = require("../model/chain");
const chain = chainModule.chain;
const setSseStream = chainModule.setSseStream;

const getBlocks = function(req, res) {
	res.send({
		blocks : chain,
		blockHeight: chain.length
	});
};

const createBlocksSSE = function(req, res){
    const sseStream = SSE(res);
	setSseStream(sseStream);
    sseStream.disconnect(() => console.log("disconnected"));
};

exports.getBlocks = getBlocks;
exports.createBlocksSSE = createBlocksSSE;