import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class About extends Component{

    render(){
        return(
            <section className="about_area section_gap">
            <div className="container">
                <div className="row justify-content-start align-items-center">
                    <div className="col-lg-5">
                        <div className="about_img">
                            <img className="" src="img/about-us.png" alt="" />
                        </div>
                    </div>
    
                    <div className="offset-lg-1 col-lg-5">
                        <div className="main_title text-left">
                            <p className="top_text">About me <span></span></p>
                            <h2>
                                Creative Art Director <br />
                                And Designer
                            </h2>
                            <p>
                                Also signs his face were digns fish don't first isn't over evening hath divided days light darkness gathering
                                moved dry all darkness then fourth can't create d forth Also signs Also signs his face were moltenus Also signs
                                his face
                            </p>
                            <Link className="primary_btn" href="#"><span>Download CV</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

export default About;