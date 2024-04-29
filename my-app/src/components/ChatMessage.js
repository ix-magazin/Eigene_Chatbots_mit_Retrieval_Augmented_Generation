import React from "react";

export default class ChatMessage extends React.Component {
    render() {
        console.log(this.props.url)
        return (
            <div className="chatMessage">
                <img className="chatbot-logo" alt="Logo des Nutzers" src={this.props.logo} />
                <div className="message-box">
                    <p className="username">{this.props.username}</p>
                    <p className="msg">{this.props.message}
                    {this.props.url ? <p className="url">&#40;Quelle: <a href={this.props.url} target="_blank" rel="noreferrer">{this.props.url}</a>&#41;</p> : <p></p>}
                    </p>
                </div>
            </div>
        );
    }
}