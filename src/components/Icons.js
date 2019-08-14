import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Icons extends Component{

    render(){
        return(
			<a href={this.props.href}><i className={`${this.props.icon}`}></i></a>
        )   
    }
}
export default Icons;