import { combineReducers } from 'redux'
import messages from './messages'
import {usersById, users} from './users'


const rootReducer = combineReducers({
    messages,
    usersById,
    users,
})
export default rootReducer;