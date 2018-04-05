import { connect } from 'react-redux'
import UserList from '../../components/UserList';

const mapStateToProps = (state) => {
    // console.log("UserListContainer", state)
    return {
        users: state.users.map(userId => state.usersById[userId])
    }
}
const UserListContainer = connect(mapStateToProps)(UserList)
export default UserListContainer