import React from "react"
import { connect } from 'react-redux'
import { sendMessage } from '../redux/actions'

class MessageInputBox extends React.Component {
    constructor(props) {
        super(props)
        this.input = React.createRef()

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();

        let inputText = this.input.current.value;
        if (!inputText.trim()) return

        console.log("sendMessage, ", inputText)
        this.props.dispatch(sendMessage(inputText))
        this.input.current.value = ''
    }

    componentDidMount() {
        this.input.current.focus()
    }

    render() {
        return <form className="messageInputBox" onSubmit={this.handleSubmit}>
            <div className="messageInputBox__inputContainer">
                <input ref={this.input} className="messageInputBox__input" type="text" placeholder="Type your message here" />
            </div>
        </form>
    }
}

MessageInputBox = connect()(MessageInputBox)
export default MessageInputBox