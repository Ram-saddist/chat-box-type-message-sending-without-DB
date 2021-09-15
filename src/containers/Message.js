import React from 'react';
import './Message.css';

export default class Message extends React.Component{ 
	constructor(props){
		super(props);
		this.state={
			time:new Date().toLocaleTimeString(),
		}
	}
	render(){
		
		return this.props.msg?(
			<center><div className="msg">
				<span>{this.props.msg}</span>
				<span className="time">{this.state.time}</span>
			</div></center>
		) :null; 
	}
}