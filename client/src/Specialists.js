import React from 'react';

const Specialists = ({ specialists }) => {
  const specList = specialists.map(specialist => {
    return (
      <ul>
        <img src={specialist.image} alt='Profile picture' />
        <li>
          Name: {specialist.first_name} {specialist.last_name}
        </li>
        <li>Expertise: {specialist.expertise}</li>
      </ul>
    );
  });
  return (
    <div>
      <h1>Our Specialists:</h1>
      {specList}
    </div>
  );
};

export default Specialists;
