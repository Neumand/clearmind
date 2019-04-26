import React from 'react';

const Team = ({ profs }) => {
  const profsList = profs.map(prof => {
    return (
    <ul>
      <li>
        Name: {prof.first_name} {prof.last_name}
      </li>
      <li>Expertise: {prof.expertise}</li>
      <img src={prof.image} alt='Profile picture' />
    </ul>);
  });
  return (
    <div>
      <h1>Our Team:</h1>
      {profsList}
    </div>
  );
};

export default Team;
