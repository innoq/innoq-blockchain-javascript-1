const hasher = require("hash.js");

const hashBlock = function(block) {
    return hasher.sha256().update(JSON.stringify(block)).digest("hex");
}

exports.hashBlock = hashBlock;