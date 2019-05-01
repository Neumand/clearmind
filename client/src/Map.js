import React from "react";
import { compose, withProps } from "recompose";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDrU7R8DWzFJpIkjjuqVgpcurKSZtiJ9xI",
    loadingElement: <div style={{ height: `600px` }} />,
    containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `600px` }} />
  }),
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={12} defaultCenter={{ lat: 45.5517, lng: -73.5836 }}>
    {props.isMarkerShown && (
      <Marker
        options={{ clickable: true }}
        onClick={() => {
          console.log(event.target);
        }}
        position={{ lat: 45.611626, lng: -73.5554274 }}
      />
    )}
    {props.isMarkerShown && (
      <Marker
        options={{
          clickable: true,
          icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
          }
        }}
        onClick={() => {
          console.log("This");
        }}
        position={{ lat: 45.5053204, lng: -73.5811828 }}
      />
    )}
  </GoogleMap>
));

export default MapComponent;
