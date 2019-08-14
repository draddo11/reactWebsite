import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class CommonBanner extends Component{

    render(){
        return(
            <section className="banner_area">
            <div className="banner_inner d-flex align-items-center">
                <div className="container">
                    <div className="banner_content text-center">
                        <h2>{this.props.hero}</h2>
                        <div className="page_link">
                            <Link to="/home">{this.props.home}</Link>
                            <Link to="/about">{this.props.current}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
export default CommonBanner;