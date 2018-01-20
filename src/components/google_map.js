import React, { Component } from 'react';

// Google map intergration
class GoogleMap extends Component {

  // one of lifecycle methods that gets called automatically 
  // after this component has been rendered to the screen.
  componentDidMount() {
    // this is how to create embedded Google map inside of our document.
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }
  
  render() {
    // this.refs.map
    return <div ref="map" />
  }

}

export default GoogleMap;