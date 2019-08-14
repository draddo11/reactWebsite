import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class PageWrapper extends Component{

    render(){
        return(
        <div>
       <header className="header_area">
		<div className="main_menu">
			<nav className="navbar navbar-expand-lg navbar-light">
				<div className="container">
          <Link className="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt="" /></Link>
					<Link className="navbar-brand logo_inner_page" href="index.html"><img src="img/logo2.png" alt="" /></Link>      
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
					 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<div className="collapse navbar-collapse offset" id="navbarSupportedContent">
						<ul className="nav navbar-nav menu_nav">
							<li className="nav-item active"><Link className="nav-link" href="index.html">Home</Link></li>
							<li className="nav-item"><Link className="nav-link" href="about.html">About</Link></li>
							<li className="nav-item"><Link className="nav-link" href="portfolio.html">Portfolio</Link></li>
							<li className="nav-item submenu dropdown">
								<Link href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
								 aria-expanded="false">Pages</Link>
								<ul className="dropdown-menu">
									<li className="nav-item"><Link className="nav-link" href="services.html">Services</Link></li>
									<li className="nav-item"><Link className="nav-link" href="portfolio-details.html">Portfolio Details</Link></li>
								</ul>
							</li>
							<li className="nav-item submenu dropdown">
								<Link href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
								 aria-expanded="false">Blog</Link>
								<ul className="dropdown-menu">
									<li className="nav-item"><Link className="nav-link" href="blog.html">Blog</Link></li>
									<li className="nav-item"><Link className="nav-link" href="single-blog.html">Blog Details</Link></li>
								</ul>
							</li>
							<li className="nav-item"><Link className="nav-link" href="contact.html">Contact</Link></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
        </header>
        {this.props.children}
    </div>



        ) 
    }  
}

export default PageWrapper;