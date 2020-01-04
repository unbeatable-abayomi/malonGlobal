import React, { Component } from 'react';

class Services extends Component {
	render() {
		return (
            <div className='services_component'>
            <div class="row meals_types">
          
                <div class="col-md-4 col-sm-4 col-xs-12 text-xs-center">
                <center>
                <div class="card-deck mt-5" id='container_projects'>
                <div class="first-project">
                  <div class="card card-projects" style = {{ width : '20rem' }}>
                     <div class="card-body">
                     <img class="card-img-top" src="../img/breakfast.jpg" className='img-fluid about_img' alt="project"/>
                     <div class="card-body">
                       <h5 class="card-title">Breakfast</h5>
                       <p class="card-text"></p>
            
                       <a href="../img/breakfast.jpg" class="heartbeat btn btn-danger">View</a>
                     </div>
                  </div>
                   </div>
                 </div>
                
                </div>
                </center>
				</div>
                <div class="col-md-4 col-sm-4 col-xs-12 text-xs-center">
                <center>
                <div class="card-deck mt-5" id='container_projects'>
                <div class="first-project">
                  <div class="card card-projects" style = {{ width : '20rem' }}>
                     <div class="card-body">
                     <img class="card-img-top" src="../img/lunch.jpg" className='img-fluid about_img' alt="project"/>
                     <div class="card-body">
                       <h5 class="card-title">Lunch</h5>
                       <p class="card-text"></p>
            
                       <a href="../img/lunch.jpg" class="heartbeat btn btn-danger">View</a>
                     </div>
                  </div>
                   </div>
                 </div>
                
                </div>
                </center>
				</div>
                <div class="col-md-4 col-sm-4 col-xs-12 text-xs-center">
                <center>
                <div class="card-deck mt-5" id='container_projects'>
                <div class="first-project">
                  <div class="card card-projects" style = {{ width : '20rem' }}>
                     <div class="card-body">
                     <img class="card-img-top" src="../img/dinner.jpg" className='img-fluid about_img' alt="project"/>
                     <div class="card-body">
                       <h5 class="card-title">Breakfast</h5>
                       <p class="card-text"></p>
            
                       <a href="../img/dinner.jpg" class="heartbeat btn btn-danger">View</a>
                     </div>
                  </div>
                   </div>
                 </div>
                
                </div>
                </center>
                </div>
                

                

            </div>
            </div>
		);
	}
}
export default Services;
