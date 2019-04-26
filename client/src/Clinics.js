import React from "react";
import MapComponent1 from "./Map1";
import MapComponent2 from "./Map2";

const Clinics = ({ clinics }) => {
  const clinicsList = clinics.map(clinic => {
    console.log(clinic.longitude);
    console.log(clinic.latitude);
    if (clinic.name === "Mindwell") {
      return (
        <ul>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{clinic.name}</h5>
              <p className="card-text">
                {clinic.description} <br />
              </p>
              <p className="card-text">{clinic.address} </p>
              <p className="card-text">{clinic.phone_number} </p>
            </div>
            <MapComponent1 isMarkerShown />
          </div>
        </ul>
      );
    }
    if (clinic.name === "La Maison St. Pierre") {
      return (
        <ul>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{clinic.name}</h5>
              <p className="card-text">
                {clinic.description} <br />
              </p>
              <p className="card-text">{clinic.address} </p>
              <p className="card-text">{clinic.phone_number} </p>
            </div>
            <MapComponent2 isMarkerShown />
          </div>
        </ul>
      );
    }
  });
  return (
    <div>
      <h1>Our Clinics:</h1>
      {clinicsList}
    </div>
  );
};

export default Clinics;
