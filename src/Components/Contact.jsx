import React, { Component } from 'react';

class Contact extends Component {
	render() {
		return (
			<div className="contact_component">
				<div class="container">
					<div class="row">
						<div class="col-md-12 col-sm-12 col-xs-12 section-header wow fadeInDown">
							<h2>
								<span class="highlight-text">Contact Us</span>
							</h2>

							<p class="col-md-8 col-sm-10 col-xs-12 col-md-offset-2 col-sm-offset-1">
								We love feedback. Fill out the form below and we'll get back to you as soon as possible.
							</p>
						</div>

						<div class="contact-details">
							<div class="contact-form wow bounceInRight">
								<form name="sentMessage" id="contactForm" novalidate>
									<div class="col-md-6">
										<input
											type="text"
											class="form-control"
											placeholder="Full Name"
											id="name"
											required
											data-validation-required-message="Please enter your name"
										/>
										<p class="help-block" />
									</div>
									<div class="col-md-6">
										<input
											type="email"
											class="form-control form-control-two"
											placeholder="Email"
											id="email"
											required
											data-validation-required-message="Please enter your email"
										/>
									</div>

									<div class="col-md-12">
										<textarea
											rows="10"
											cols="100"
											class="form-control"
											placeholder="Message"
											id="message"
											required
											data-validation-required-message="Please enter your message"
											minlength="5"
											data-validation-minlength-message="Min 5 characters"
										>
											{' '}
										</textarea>
									</div>

									<div class="col-md-8 col-md-offset-2">
										{' '}
										<br /> <div id="success"> </div>
										<button type="submit" class="btn btn-danger">
											Submit Message
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Contact;
