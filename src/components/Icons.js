import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Icons extends Component{

    render(){
        return(
			<Link to={this.props.to}><i className={`${this.props.icon}`}></i></Link>
        )   
    }
}
export default Icons;