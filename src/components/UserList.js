import React from "react"
import PropTypes from "prop-types"
import Gravatar from "gravatar"

const UserList = ({users}) => (
    <aside className="userList">
        <section className="userList__header">
            <h2>Users</h2>
        </section>
        <ul>
            {users.map(user => <li key={user.id}>
                <img src={Gravatar.url(user.email, {size: 30})} />
                <span>{user.username}</span>
            </li>)}
        </ul>
    </aside>
)
UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
        displayName: PropTypes.string,
    }))
}


export default UserList