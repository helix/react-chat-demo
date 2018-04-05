# React Chat Demo

This is a **work in progress** chat app made with :

* React
* Redux
* WebSocket (server: node.js library / client: native)

## Getting started


```
# Install the dependencies
yarn install

# Start the WebSocket server
node server/index.js

# Open the chat client in the browser (uses 'webpack-dev-server')
yarn start
```

## Notes

A lot of things are still missing:

* User info form
* User entered/left the room
* Channels
* Direct messages
* Handle errors
	* Auto-reconnect
	* Message not sent