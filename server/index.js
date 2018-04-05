const WebSocket = require('ws')
const serverPort = 4242;


//
// Starting server
//
const server = new WebSocket.Server({
    port: serverPort,
    clientTracking: true,
})
server.on('listening', () =>
    console.log("Basic chat server listening on port " + serverPort)
)
server.broadcast = function(data, ws = null) {
    this.clients.forEach(client => {
        // Skip current websocket if given as argument
        if (ws !== null && ws === client)
            return

        if (client.readyState === WebSocket.OPEN)
            client.send(data);
    });
}

// Handle connection
server.on('connection', (ws) => {
    // @TODO User is connected
    server.broadcast(JSON.stringify({
        type: 'USER_ENTERED',
        user: {},
    }), ws)

    // @TODO User is leaving
    ws.on('close', () => {
        server.broadcast(JSON.stringify({
            type: 'USER_LEFT',
            userId: null,
        }))
    })


    // Message handling
    ws.on('message', (message) => {
        const data = JSON.parse(message)
        console.log(message)

        switch (data.type) {
          case 'MSG_SEND_REQUEST':
            server.broadcast(JSON.stringify({
                ...data,
                type: 'MSG_SEND_SUCCESS',
            }))
            break

          default:
            break
        }
    })
})