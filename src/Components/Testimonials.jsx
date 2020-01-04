import React, { Component } from 'react';

class Testimonials extends Component {
	render() {
		return (
			<div className="testimonails_component">
				<div id="teams" className="row testimonails_component_row_div">
					<div class="teams-slides col-lg-4 col-md-4 col-sm-12 col-xs-12">
						<center>
							<img src="../img/img-teams/team2.jpg" className="img-fluid testimonals" alt="nsns" />
							<p class="client-info">Chris Willam</p>
							<p className="client-info-two">Lorem ipsum dolor sit amet, consectetur adipisic</p>
						</center>
					</div>

					<div class="teams-slides col-lg-4 col-md-4 col-sm-12 col-xs-12">
						<center>
							<img src="../img/img-teams/team2.jpg" className="img-fluid testimonals" alt="ja" />
							<p class="client-info">Randy Dode</p>
							<p className="client-info-two">Lorem ipsum dolor sit amet, consectetur adipisic</p>
						</center>
					</div>

                    <div class="teams-slides col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <center>
						<img src="../img/img-teams/team3.jpg" className="img-fluid testimonals" alt="lll" />
						<p class="client-info">Michel Kimte</p>
						<p className="client-info-two">Lorem ipsum dolor sit amet, consectetur adipisic</p>
                        </center>
                        </div>
				</div>
			</div>
		);
	}
}
export default Testimonials;
