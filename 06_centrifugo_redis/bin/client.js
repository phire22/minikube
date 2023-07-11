const Centrifuge = require('centrifuge');
global.WebSocket = require('ws');

// hmac token
var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0MiJ9.79CVgMIG_JB921dVUeJDWNJubJojFodH3-XtC_1C408"

var host = 'ws://localhost:8000/connection/websocket'

var centrifugeInst = new Centrifuge.Centrifuge(host, {
    debug: true,
    token: token,
});

centrifugeInst.connect();

var topic = 'chat';

const sub = centrifugeInst.newSubscription(topic);

sub.on('publication', function(ctx) {
    console.log('Message:' + JSON.stringify(ctx));
});

sub.subscribe();
