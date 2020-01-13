import React, { Component, Fragment } from 'react'
import {
      Button,
      TextField,
      Dialog,
      DialogContent
      } from '@material-ui/core'
  
// import { Container, Paper, Chip } from '@material-ui/core'
// import GoogleMapReact from 'google-map-react'
// import Geocode from 'react-geocode'
// // import LocationOnIcon from '@material-ui/core/LocationOn'
// import Geocoder from 'react-native-geocoding'

// Geocoder.init("REACT_APP_KEY", {language : "en"});

class ReportPage extends Component {
  state = {
    open: false,
    username: '',
    comments: '',
    lat: '',
    lng: '',
    marker: '',
    timestamp: ''
  }


  toggleDialog = () => this.setState ({ open: !this.state.open})

  handleTextChange = (e) => {
    const newState = { ...this.state}
    newState[e.target.id] = e.target.value 
    console.log(newState)
    this.setState(newState)
  }

  handleSubmit = (e) => {
    e.preventDefault()
  const newReport = { ...this.state}
  newReport.id = this.props.incidentReport +1
  this.props.incidentReport(newReport)
  this.props.history.push('/')
  }


  showPosition = (position) => {
    this.setState ({ lat: position.coords.latitude, lng: position.coords.longitude})
  }
  

  getLocation = () => {
    const success = (pos) => {
      console.log(pos.coords)
      this.setState({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
        timestamp: pos.timestamp
      })
      // debugger
      return pos.coords;
    }
    const coords = navigator.geolocation.getCurrentPosition(success);
  }

  geoError = () => {
    console.log("Position Not Found, You're nowhere")
  }

  render() {
    return (
      <Fragment>
        { console.log(this.state)}
          <div style={{ textAlign: 'center' }}>
            <Button
            variant='contained'
            className='add-report'
            onClick={this.toggleDialog}
            >Report it
            </Button>
          </div>
          <div>
            <Dialog open={this.state.open}
            onClose={this.toggleDialog}>
              <DialogContent>
                <form
                    onSubmit={this.handleSubmit}
                              style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                              <TextField 
                                  id="username" 
                                  placeholder="Reported by" 
                                  value={this.state.username}onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="comments" 
                                    placeholder="Describe Incident" 
                                    value={this.state.comments} 
                                    onChange={this.handleTextChange} 
                                    required />
                                    <br />
                                <Button 
                                    variant="contained" 
                                    className='geolcation' 
                                    color="primary" 
                                    type="submit"  
                                    onClick={this.getLocation}
                                    >Submit It</Button>         
                </form>
              </DialogContent>
            </Dialog>
          </div>
      </Fragment>
    )
  }
}

export default ReportPage

