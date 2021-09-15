import React from 'react';
import "./MessageArea.css"

class MessageArea extends React.Component{
	state={
		text:"",
		pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpc9jhHMrrSdahBS_tciIc9oPaiSkZE0icGQ&usqp=CAU"
	}
	handleChange=(e)=>{
		this.setState({
			[e.target.name]:[e.target.value]
		})
	}
	submit=(e)=>{
		e.preventDefault();
		this.props.onSubmit({
			text:this.state.text
		})
		this.setState({
			text:""
		})
	}
	render(){
		return(
			<div className="line">
				<input type="text" 
					name="text"
					value={this.state.text}
					onChange={this.handleChange}
					placeholder="Type a message"
				/>
				<img 
					onClick={this.submit} 
					className="pic" 
					src={this.state.pic} 
					alt="send"
				/>
			</div>
		)
	}
}
export default MessageArea;
