const bodyParser = require("body-parser");
const addNeighbour = require("../model/neighbours").addNeighbour

const register = function(req, res) {
    const nodeId = req.body.nodeId;
    const host = req.body.host;
    if (nodeId != null && host != null) {
        const node = addNeighbour(nodeId, host);
        res.send({"message": "New node added", node});
    } else {
        res.status(400).send();
    }
}

exports.register = register;