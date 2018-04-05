import * as Actions from './actionTypes'

export function messageSendRequest(user, msg) {
    return {
        type: Actions.MSG_SEND_REQUEST,
        payload: {user, msg},
    }
}

export function messageSendSuccess(user, msg) {
    return {
        type: Actions.MSG_SEND_SUCCESS,
        payload: {user, msg},
    }
}

export function sendMessage(msgText) {
    return function(dispatch, getState, { socket }) {
        const action = messageSendRequest({}, msgText)
        socket.send(JSON.stringify(action))
 
        dispatch(action)
    }
}