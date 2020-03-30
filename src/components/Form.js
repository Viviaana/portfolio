import React from 'react';

export default class extends React.Component {
  constructor(props) {
	super(props);
	this.state = { feedback: '', name: 'Name', email: 'kjingham91@gmail.com' };
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
	return (
  	<form className="test-mailing">
    	<h2>Drop me an email!</h2>
        <h3>Please include your contact details</h3>
    	<div>  
        <textarea
        	id="name-mailing"
        	name="name-mailing"
        	onChange={this.handleChange}
        	placeholder="Name"
        	required
        	value={this.state.name}
        	style={{width: '50%', height: '50px'}}
      	/>
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
    	<input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
  	</form>
	)
  }

  handleChange(event) {
    this.setState({feedback: event.target.value})
    this.setState({name: event.target.value})

  }

  handleSubmit (event) {
	const templateId = 'template_zIWqYaqP';

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