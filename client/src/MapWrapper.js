import React from "react";
import { GoogleMap, withGoogleMap } from "react-google-maps";

const MapWrapper = withGoogleMap(props => {
  return (
    <GoogleMap {...props} ref={props.onMapMounted}>
      {props.children}
    </GoogleMap>
  );
});
export default MapWrapper;
