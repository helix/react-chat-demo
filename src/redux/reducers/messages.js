import * as Actions from '../actionTypes'

const defaultMessageList = [
    {id: 1, text: "Message 2", userId: 2, ts: Date.now()  - 600 * 1000},
    {id: 2, text: "Message 3", userId: 3, ts: Date.now() - 300 * 1000},
    {id: 3, text: "Message 4", userId: 4, ts: Date.now()},
]

export default function messages(state = defaultMessageList, action) {
    switch (action.type) {
        case Actions.MSG_SEND_SUCCESS:
            return state.concat({
                id: state.length+1,
                text: action.payload.msg,
                ts: Date.now(),
                userId: 2,
            });
            break;

        // case Actions.MSG_SEND_REQUEST:
        default:
            ;
    }

    return state;
}