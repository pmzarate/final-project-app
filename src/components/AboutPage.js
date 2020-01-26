import React, { Component } from 'react'
import { Container } from '@material-ui/core'
import '../App.css'

export default class AboutPage extends Component {


    render() {
        return (
            <div className="about-page">
                <Container>
                    {/* <h1 style={{ textAlign: 'center' }}>{this.state.heading}</h1> */}
                    <p>
                        FakeCars.com was created to solve a specific problem.
                        That problem is quick and reliable access to details 
                        about many different models, all in one place. We had
                        to use the word "Fake" in our name so that we don't 
                        get sued by the real&nbsp; 
                        {/* <a style={{ color: 'mediumblue' }}
                        href="https://www.cars.com"
                        rel="noopener noreferrer"
                        target="_blank">Cars.com</a> */}
                        &nbsp;but we won't worry too much about that. We've provided a 
                        link to the actual cars.com above and we did not 
                        receive any money from them to do so. Although, there's 
                        an argument that maybe we should since we are a top-notch
                        coding bootcamp and anyone would want to be associated with
                        us 
                        
                    </p>
              
                </Container>
            </div>
        )
    }
}