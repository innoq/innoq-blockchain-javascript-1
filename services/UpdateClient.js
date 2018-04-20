var EventSource = require("eventsource");

const nodeEventSources = [];

function addNodeEventSource(host){
    const source = new EventSource(ensureSlash(host) + "events");

    source.addEventListener('new_node', function (e) {
        console.log(e);
    });

    source.addEventListener('new_block', function (e) {
        console.log(e);
    });

    source.addEventListener('new_transaction', function (e) {
        console.log(e);
    });
};

exports.addNodeEventSource = addNodeEventSource;

function ensureSlash(url){
    return url.indexOf(url.length-1) === "/" ? url : url + "/";
}