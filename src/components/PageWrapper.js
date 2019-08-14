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
          <Link className="navbar-brand logo_h" to="/" style={{fontSize: "40px", fontWeight: "Bold", color: "blue"}}>MA</Link>
					<Link className="navbar-brand logo_inner_page" to="index.html"><img src="img/logo2.png" alt="" /></Link>      
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
					 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<div className="collapse navbar-collapse offset" id="navbarSupportedContent" >
						<ul className="nav navbar-nav menu_nav">
							<li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/portfolio">Portfolio</Link></li>
							<li className="nav-item"><Link className="nav-link" to="contact.html">Contact</Link></li>
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