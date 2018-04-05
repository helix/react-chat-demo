import React from 'react'
import { connect } from 'react-redux'
import MessageList from '../../components/MessageList'

const mapStateToProps = (state) => ({
    messages: state.messages.map(msg => ({
        ...msg,
        user: state.usersById[msg.userId]
    }))
})
const MessageListContainer = connect(mapStateToProps)(MessageList)
export default MessageListContainer