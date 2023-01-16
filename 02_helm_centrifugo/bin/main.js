const Centrifuge = require('centrifuge');
global.WebSocket = require('ws'); 

var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0MiJ9.cYo84rqiyvYovXGPGxY7a4qWLa5HA857Nb2uMrkVcHs";

var centrifugeInst = new Centrifuge.Centrifuge('ws://localhost:8000/connection/websocket', {
    debug: true,
    token: token,
})

centrifugeInst.connect();
