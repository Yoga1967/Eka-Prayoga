import React from 'react';

class Message extends React.Component {
	render() {
		return (
			<div>
				<small>{this.props.sender}:</small>
				<p>{this.props.content}</p>
				<hr />
			</div>
		);
	}
}

class ChatBox extends React.Component {
	render() {
		return (
			<div>
				<hr />
				<p>Berikut adalah contoh chatbox yang dibuat dengan menggunakan props</p>
				<hr />
				<Message sender="dian" content="Sudah belajar React?" />
				<Message sender="petanikode" content="Ini lagi belajar React" />
				<Message sender="dian" content="OK, selamat belajar" />
			</div>
		);
	}
}

export default ChatBox;