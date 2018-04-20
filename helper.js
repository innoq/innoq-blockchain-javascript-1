const hasher = require("hash.js");

const hashBlock = function(blockString) {
    return hasher.sha256().update(blockString).digest("hex");
}

exports.hashBlock = hashBlock;
