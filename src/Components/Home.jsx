import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
	render() {
		return (
			<div className="home_component">
				<div className="low_div">
					<img className="img-fluid low_div_image" src="../img/slider-img-1.jpg" width="100%" alt="jsk" />
				</div>
				<center>
					<div className="malon_div">
						<h2 className="malon_tasty_meal">
							<span className="malon_alone_word">Malon</span> Dishes
						</h2>
						<p className="malon_div_txt">Best Taste</p>
						<p className="malon_div_txt">Always Served Hot & Fresh</p>
						<p className="malon_div_txt">Get the best Healthy Food You Deserve</p>
						<Link to="services">
							<button className="malon_div_button">Our Services</button>
						</Link>
					</div>
				</center>
			</div>
		);
	}
}
export default Home;
