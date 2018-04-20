const { chain } = require("../model/chain");
const uuidv4 = require('uuid/v4');

const getInfo = function(req, res) {
	res.send(JSON.stringify({"nodeId": uuidv4(), "currentBlockHeight": chain.length}));
}

exports.getInfo = getInfo;
