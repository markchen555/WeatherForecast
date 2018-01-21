import React, { Component } from 'react';

// Google map intergration
// Aready included the google map js file in index.html
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
    // the ref in the div use the ref system in react, it allow us to get a reference,
    // a direct reference to an HTML element that has been rendered to the page.
    // this.refs.map (anywhere else in this component, this.refs.map and 
    // it will return a direct reference to this <div ref="map"> HTML element).
    return <div ref="map" />
  }

}

export default GoogleMap;