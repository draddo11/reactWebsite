import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {

    render(){
        return(
			<section className="home_banner_area">
			<div className="banner_inner">
				<div className="container">
					<div className="row align-items-center justify-content-between">
						<div className="col-lg-6">
							<div className="banner_content">
								<h3>{this.props.greetings}</h3>
								<h1 className="text-uppercase">{this.props.intro}</h1>
								<h5 className="text-uppercase">{this.props.position}</h5>
								<div className="social_icons my-5">
									<Link to="/#"><i className="ti-twitter"></i></Link>
									<Link to="/#"><i className="ti-skype"></i></Link>
									<Link to="/#"><i className="ti-instagram"></i></Link>
									<Link to="/#"><i className="ti-dribbble"></i></Link>
									<Link to="/#"><i className="ti-vimeo"></i></Link>
								</div>
								<Link className="primary_btn" to="/#"><span>{this.props.hire}</span></Link>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="home_right_img">
								<img className="img-fluid" src="img/banner/home-right.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        )
    }
}
export default Header;