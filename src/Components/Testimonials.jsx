import React, { Component } from 'react';

class Testimonials extends Component {
	render() {
		return (
			<div className="testimonails_component">
				<div id="teams" className="row testimonails_component_row_div">
					<div class="teams-slides col-lg-4 col-md-4 col-sm-12 col-xs-12">
						<center>
							<img src="../img/6116-08915748en_Masterfile.jpg" className="img-fluid testimonals" alt="nsns" />
							<p class="client-info">Chris Willam</p>
							<p className="client-info-two">A single trial will keep you asking for more </p>
						</center>
					</div>

					<div class="teams-slides col-lg-4 col-md-4 col-sm-12 col-xs-12">
						<center>
							<img src="../img/img-teams/team1.jpg" className="img-fluid testimonals" alt="ja" />
							<p class="client-info">Randy Dode</p>
							<p className="client-info-two">Malon Dishes have the best dishes you'll love</p>
						</center>
					</div>

                    <div class="teams-slides col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <center>
						<img src="../img/happy-woman-eating-summer-salad.jpg" style = {{ height : '18rem' }} className="img-fluid testimonals" alt="lll" />
						<p class="client-info">Michel Kimte</p>
						<p className="client-info-two">I am so stuck to Malon Dishes,they have delicious meals</p>
                        </center>
                        </div>
				</div>
			</div>
		);
	}
}
export default Testimonials;
