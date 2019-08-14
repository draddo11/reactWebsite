import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import image from '../../assets/img/mike.png';
import CommonBanner from '../common/CommonBanner';

class About extends Component{

    render(){
        return(
            <div>
                <CommonBanner 
                    hero="About me"
                    home="home"
                    current="about"
                />
            <section className="about_area section_gap">
            <div className="container">
                <div className="row justify-content-start align-items-center">
                    <div className="col-lg-5">
                        <div className="about_img">
                            <img className="" src={image} alt="" />
                        </div>
                    </div>
    
                    <div className="offset-lg-1 col-lg-5">
                        <div className="main_title text-left">
                            <p className="top_text">About me <span></span></p>
                            <h2>
                                Sofware Engineer
            
                            </h2>
                            <p>
                                       I am a passionate software engineer and technical lead with demonstrated history in project management, web applications development, integration and service delivery, I have a solid understanding of object oriented design & analysis and software development life cycle to develop and maintain quality softwares. 

                                        Tech stacks: C#.net, Javascript (VanillaJs & VueJs), Php, Vb.net, Bootstrap, Foundation, WordPress, SQL, Unix, Git, heroku etc. 

                                        Other competencies include, Analysis & Problem Solving Skills, Information Gathering, Efficiency, Systematic Thinking, Thoroughness, Creativity, Learning by Doing, Analysis of Alternatives (cost/benefit).

 
                            </p>
                            <Link className="primary_btn" href="#"><span>Download CV</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
        )
    }
}

export default About;