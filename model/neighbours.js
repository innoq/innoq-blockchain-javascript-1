const neighbours  = [];

function addNeighbour(id, host) {
    const neighbour = new Node(id, host)
    neighbours.push(neighbour);
    return neighbour;
}

class Node {
    constructor(id, host) {
        this.id = id;
        this.host = host;
    }
}

exports.addNeighbour = addNeighbour;