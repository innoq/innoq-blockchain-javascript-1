const SSE = require("sse-nodejs");
const chainModule = require("../model/chain");
const transactionService = require("./Transaction");
const neighboursModule = require("../model/neighbours");

const createSse = function(req, res){
    const sseStream = SSE(res);
    chainModule.setSseStream(sseStream);
    transactionService.setSseStream(sseStream);
    neighboursModule.setSseStream(sseStream);
    sseStream.disconnect(() => console.log("disconnected"));
};

exports.createSse = createSse;