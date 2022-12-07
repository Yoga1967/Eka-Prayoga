import React from 'react';

class Message extends React.Component {
	render() {
		return (
			<div>
				{this.props.sender}:
				<p>{this.props.content}</p>
				<hr/>
			</div>
		);
	}
}

let chat = (
	<div>
		<Message sender="yoga" content="Hallo" />
		<Message sender="agoy" content="Halo jugaa" />
	</div>
);

reactDOM.render(chat, document.getElementById("root"));