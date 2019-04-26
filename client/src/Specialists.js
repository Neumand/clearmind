import React from 'react';

const Specialists = ({ specialists }) => {
  const specList = specialists.map(specialist => {
    return (
      <div className='col-md-4'>
        <div className='card'>
          <img src={specialist.image} className='card-img-top' alt='' />
          <div className='card-body'>
            <h5 className='card-title'>
              {specialist.first_name} {specialist.last_name}
            </h5>
            <p className='card-text'>Expertise: {specialist.expertise}</p>
            <a href='#' className='btn btn-dark'>
              Book
            </a>
          </div>
          <div className='card-footer'>
            <small className='text-muted' />
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <h1>Our Specialists:</h1>
      <div className='container'>
        <div className='row'>
          <div className='card-deck'>{specList}</div>
        </div>
      </div>
    </div>
  );
};

export default Specialists;
