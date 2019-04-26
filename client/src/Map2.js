import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MapComponent2 = compose(
  withProps({
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     */
    googleMapURL:
      "https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyDrU7R8DWzFJpIkjjuqVgpcurKSZtiJ9xI",
    loadingElement: <div style={{ height: `300px` }} />,
    containerElement: <div style={{ height: `300px` }} />,
    mapElement: <div style={{ height: `300px` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 45.5053204, lng: -73.5811828 }}
  >
    {props.isMarkerShown && (
      <Marker position={{ lat: 45.5053204, lng: -73.5811828 }} />
    )}
  </GoogleMap>
));

export default MapComponent2;
