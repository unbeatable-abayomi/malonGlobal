import React, { Component } from 'react'

 class About extends Component {
    render() {
        return (
            <div className="about_component">
            
    <section id="about" class="about-sec section-wrapper description">
    <div class="container">
        <div class="row">
            
            <div class="col-md-12 col-sm-12 col-xs-12 section-header wow fadeInDown">
            <center>   
            <h2><span class="highlight-text">About</span></h2>
             
                <p class="col-md-8 col-sm-10 col-xs-12 col-md-offset-2 col-sm-offset-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, nam corporis quas, saepe minima error aperiam dolorum aliquam, quis deserunt eos eius quisquam odio itaque.</p>
                </center>
                </div>
            

            <div class="col-md-6 col-sm-6 col-xs-12 custom-sec-img wow fadeInDown">
                <img src="../img/features.jpg" className='img-fluid about_img' alt="CustomImage" />
            </div>

            <div class="col-md-6 col-sm-6 col-xs-12 customized-text wow fadeInDown black-ed">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa sit, numquam amet voluptatibus obcaecati ea maiores totam nostrum, ad iure rerum quas harum ipsum.  lobcaecati ea maiores totam nostrum, ad iure rerum quas harum ipsum. Rem ea ducimus quos quae quo.</p>
                <div class="row"> 
                    <div class="col-md-11">
                        <strong>Bootstrap</strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam iusto, natus est ducimus saepe laborum</p>
                    </div>
                </div>
                <div class="row"> 
                    <div class="col-md-11">
                        <strong>Responisve Theme</strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam iusto, natus est ducimus saepe laborum Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div class="row"> 
                    <div class="col-md-11">
                        <strong>HTML5/CSS3</strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam iusto, natus est ducimus saepe laborum Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</section> 
            </div>
        )
    }
}
export default About