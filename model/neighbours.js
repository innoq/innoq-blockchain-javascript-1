const neighbours  = [];

let sseStream = null;

function addNeighbour(id, host) {
    const neighbour = new Node(id, host);
    neighbours.push(neighbour);
    sseStream && sseStream.sendEvent("new_node", neighbour);
    return neighbour;
}

function setSseStream(sseStreamPar) {
    sseStream = sseStreamPar;
}

class Node {
    constructor(id, host) {
        this.id = id;
        this.host = host;
    }
}

exports.addNeighbour = addNeighbour;
exports.setSseStream = setSseStream;