import React from "react"
import MessageListContainer from "./redux/containers/MessageListContainer"
import UserListContainer from "./redux/containers/UserListContainer"
import MessageInputBox from "./components/MessageInputBox"


export default class App extends React.Component {
    render() {
        return (
            <div className="chatContainer">
                <MessageListContainer />
                <MessageInputBox />
                <UserListContainer />
            </div>
        )
    }
}