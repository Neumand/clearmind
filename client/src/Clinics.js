import React from "react";
import MapComponent from "./Map";

class Clinics extends React.Component {
  render() {
    const clinicsList = this.props.clinics.map(clinic => {
      return (
        <ul key={clinic.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{clinic.name}</h5>
              <p className="card-text">
                {clinic.description} <br />
              </p>
              <p className="card-text">{clinic.address} </p>
              <p className="card-text">{clinic.phone_number} </p>
            </div>
          </div>
        </ul>
      );
    });

    return (
      <div style={{ width: "90%", justifyContent: "center" }}>
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <div className="card-body">{clinicsList}</div>
            </div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  <MapComponent isMarkerShown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Clinics;
