import React from 'react';
import './Contact.css';
import { AiOutlineMail } from "react-icons/ai";


export default class extends React.Component {
  constructor(props) {
	super(props);
	this.state = { feedback: '', name: '', email: 'kjingham91@gmail.com', title: "Submit" };
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
	return (
  	<form className="test-mailing">
    	<h2>Drop me an email!</h2>
        <h2>Please include your contact details</h2>
    	<div className="textbox">  
          <br />
      	<textarea
        	id="message-mailing"
        	name="message-mailing"
        	onChange={this.handleChange}
        	placeholder="Your Message Here"
        	required
        	value={this.state.feedback}
        	style={{width: '50%', height: '150px'}}
      	/>
    	</div>
		<div className="btnContainer">
    	<input type="button" value={this.state.title} className="btn--submit" onClick={this.handleSubmit} />
		<div className="emailsign"><AiOutlineMail /></div>
		</div>
  	</form>
	)
  }

  handleChange(event) {
	this.setState({feedback: event.target.value})

  }

  changeTitle = () => {
	this.setState({ title: "Thank You" });
 };

 changeMessage = () => {
	this.setState({ feedback: "Message Sent" });
 };


  handleSubmit (event) {
	const templateId = 'template_zIWqYaqP';
	this.changeTitle()
	this.changeMessage()
	this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})

  }

  sendFeedback (templateId, variables) {
	window.emailjs.send(
  	'gmail', templateId,
  	variables
  	).then(res => {
    	console.log('Email successfully sent!')
  	})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))}
}