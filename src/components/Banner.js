import React, {Component} from 'react'
import Header from './Header'
import image from '../assets/img/banner/home-right.png'

class Banner extends Component{
    
    render(){
        return(
            <Header
                greetings = "Hello"
                intro = "I am Michael"
                position = "Software Engineer"
                hire = "Hire me"
                cv = "Get CV"
                image = {image}
            />
        )
    }
}

export default Banner;