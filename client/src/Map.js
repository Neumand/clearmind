import React from "react";
import MapWrapper from "./MapWrapper";
import { Marker } from "react-google-maps";

class MapComponent extends React.Component {
  render() {
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
            lng: Number(clinic.longitude)
          }}
        />
      );
    });
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
