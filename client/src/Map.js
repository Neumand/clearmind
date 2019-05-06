import React from 'react';
import MapWrapper from './MapWrapper';
import { Marker } from 'react-google-maps';

class MapComponent extends React.Component {
  // React-google-maps starts out its life as a function component
  // We destructured it to a class component to be able to pass it props.
  // This allows us to dynamically create markers instead of hard coding location.
  render() {
    // Array of clinics stored in props converted to markers
    const clinicMarkers = this.props.clinics.map(clinic => {
      return (
        <Marker
          key={clinic.id}
          clickable={true}
          onClick={e => {
            this.props.borderChanger(clinic.name);
          }}
          position={{
            lat: Number(clinic.latitude),
            lng: Number(clinic.longitude),
          }}
        />
      );
    });
    // Calls MapWrapper.js function component
    // Passes it map properties and markers
    return (
      <MapWrapper
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDrU7R8DWzFJpIkjjuqVgpcurKSZtiJ9xI"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `500px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        defaultZoom={12}
        defaultCenter={{ lat: 45.560473, lng: -73.5683051 }}
      >
        {clinicMarkers}
      </MapWrapper>
    );
  }
}

export default MapComponent;
