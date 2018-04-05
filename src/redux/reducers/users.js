import * as Actions from '../actionTypes'

const defaultUsers = {
    2: {id: 2, username: 'Julien', displayName: 'Julien Huang', email: 'contact@julienhuang.com'},
    3: {id: 3, username: 'Damien', displayName: 'Damien'},
    4: {id: 4, username: 'Etienne', displayName: 'Etienne Poulain'},
}

export function usersById(state = defaultUsers, action) {
    return state
}

export function users(state = Object.keys(defaultUsers).map(uid => parseInt(uid)), action) {
    // switch (action.type) {
    //     default:
    //         ;
    // }

    return state
}