import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Gravatar from 'gravatar'

const MessageList = ({ messages }) => (
    <section className="messageList">
        {messages.map((msg) => (
            <div className="message" key={msg.id}>
                <div className="message__gutter">
                    <img src={Gravatar.url(msg.user.email, {size: 50})} />
                </div>
                <div className="message__content">
                    <div className="message__header">
                        <span className="message__author">{msg.user.username}</span>
                        <span className="message__timestamp">{moment(msg.ts).format('HH[ h ]mm')}</span>
                    </div>
                    <span className="message__body">{msg.text}</span>
                </div>
            </div>
        ))}
    </section>
)
MessageList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        userId: PropTypes.number.isRequired,
        user: PropTypes.shape({
            id: PropTypes.number.isRequired,
            username: PropTypes.string.isRequired,
        }),
        ts: PropTypes.number.isRequired,
    })),
}

export default MessageList