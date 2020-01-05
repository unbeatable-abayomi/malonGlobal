import React, { Component } from 'react';

class Location extends Component {
	render() {
		return (
			<div className="location_component">
				<div className="row">
					<div class="teams-slides col-lg-4 col-md-4 col-sm-12 col-xs-12">
						<center>
                        <address className='malon_address'>
                      
                        Visit us at:<br />
                        <span className="house_number">4</span>Law Close<br />
                        Unilag Estate,<br/>
                        Magodo Phase One,<br/>
                        Lagos State,Nigeria
						</address>
						Developed by <a href="mailto:igwubor@gmail.com">Abayomi Igwubor</a>.<br/>
						</center>
					</div>
					<div class="teams-slides col-lg-8 col-md-8 col-sm-12 col-xs-12">
						<center>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.15192514902!2d3.391751214297246!3d6.628044423779125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93146321429f%3A0x164216083e4eb07d!2sLaw%20Cl%2C%20Olowora%2C%20Lagos!5e0!3m2!1sen!2sng!4v1578141748792!5m2!1sen!2sng" width="800" height="470" frameborder="5" title="new" allowfullscreen=""></iframe>
                        
                        </center>
					</div>
				</div>
			</div>
		);
	}
}
export default Location;
