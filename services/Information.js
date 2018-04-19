const { chain } = require("../model/chain");
const uuidv1 = require('uuid/v1');

const getInfo = function(req, res) {
	res.send(JSON.stringify({"nodeId": uuidv1(), "currentBlockHeight": chain.length}));
}

exports.getInfo = getInfo;
