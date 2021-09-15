import React from 'react';
import MessageArea from './MessageArea';
import Message from './Message';


class MessageList extends React.Component{
	constructor(){
		super();
		this.state={
			mlist:[],
		}
	}
	addMessage=text=>{
		this.setState({
			mlist:[...this.state.mlist,text]
		});
	}
	render(){
		return(
			<div className="main">
				<MessageArea onSubmit={this.addMessage}/>
				
				{
					this.state.mlist.map(msg=>(
						<Message msg={msg.text}/>
					))
				}
			</div>
		)
	}
}
export default MessageList;
