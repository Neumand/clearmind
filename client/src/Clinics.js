import React from "react";

const Clinics = ({ clinics }) => {
  const clinicsList = clinics.map(clinic => {
    return (
      <ul>
        <li>Name: {clinic.name}</li>
        <li>Description: {clinic.description}</li>
        <li>Phone Number: {clinic.phone_number}</li>
        <li>Address: {clinic.address}</li>
      </ul>
    );
  });
  return (
    <div>
      <h1>Our Clinics:</h1>
      {clinicsList}
    </div>
  );
};

export default Clinics;
