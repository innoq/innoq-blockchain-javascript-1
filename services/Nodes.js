const bodyParser = require("body-parser");
const addNeighbour = require("../model/neighbours").addNeighbour

const register = function(req, res) {
    const node = addNeighbour(req.body.nodeId, req.body.host);
    res.send({"message": "New node added", node});
}

exports.register = register;