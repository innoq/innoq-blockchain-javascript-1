const SSE = require("sse-nodejs");
const chainModule = require("../model/chain");
const transactionService = require("./Transaction");

const createSse = function(req, res){
    const sseStream = SSE(res);
    chainModule.setSseStream(sseStream);
    transactionService.setSseStream(sseStream);
    sseStream.disconnect(() => console.log("disconnected"));
};

exports.createSse = createSse;