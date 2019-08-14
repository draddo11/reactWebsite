import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Icons from '../components/Icons'


const icons =[
	{to:'/#', icon: 'ti-twitter'},
	{to:'/#', icon: 'ti-facebook'},
	{to:'/#', icon: 'ti-instagram'},
	{to:'/#', icon: 'ti-linkedin'}
]

class Header extends Component {

    render(){
        return(
		<div>
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
									{icons.map((icons, index) =>{
										console.log (icons,index);
										return <Icons {...icons} key={index} />
									})}
								</div>
								<Link className="primary_btn" to="/#"><span>{this.props.hire}</span></Link>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="home_right_img">
								<img className="img-fluid" src={this.props.image} alt="" />
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
export default Header;