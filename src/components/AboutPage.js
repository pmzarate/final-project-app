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
                        AlertATX is a user friendly platform for reporting 
                        potentially <br/>hazardous  conditions within
                        our local community. <br/>  Users can report anonymously
                        if they wish,<br/> but please  be aware information posted 
                        will be shared<br/> with law enforcement and/or governmental
                        officials.<br/>  It is time to start documenting ALL the events
                        that happen, <br/>not just the ones that are horrendous enough 
                        to make the news.
                        <br/>
                        <br/>
                        TO USE:    simply click on the report button and <br/>choose which 
                        report you would like to make. <br/> Please offer a brief description
                        detailing the incident,<br/> such as south side of street or by the entrance of the building.<br/>  Once you submit the report, the incident<br/> will be recorded and an icon will<br/> mark the spot for future views.  
                        <br/><br/>
                        Thank You for caring about your city and taking an active role for everyone's safety.  
                        <br/><br/>
                        Be Aware - Stay Alert!
                        
        


                        
                    </p>
              
                </Container>
            </div>
        )
    }
}