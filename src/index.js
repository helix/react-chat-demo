/*
 * Init global state management
 */
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './redux/reducers'
import { messageSendSuccess } from './redux/actions'

// Initialize native browser WebSocket to chat server
const socket = new WebSocket('ws://localhost:4242/');
socket.onopen = () => console.log('Connection with server established')
socket.onclose = (closeEvent) => console.error(`Connection to server closed, status code: ${closeEvent.code} (https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent)`)
socket.onmessage = (event) => {
    console.log(event.data)
    const {payload:{user, msg}} = JSON.parse(event.data)
    store.dispatch(messageSendSuccess(user, msg))
}

// Redux store
const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware.withExtraArgument({socket}),
        createLogger()
    )
);


/*
 * Render components tree
 */
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)