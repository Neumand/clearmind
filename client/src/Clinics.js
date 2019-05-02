import React from 'react';
import MapComponent from './Map';
import { Container } from 'react-bootstrap';

class Clinics extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeCard: null };
  }

  borderChanger = input => {
    this.setState({ activeCard: input });
  };

  render() {
    const clinicsList = this.props.clinics.map(clinic => {
      return (
        <ul key={clinic.id}>
          <div
            className={
              this.state.activeCard === clinic.name
                ? 'card border-dark'
                : 'card'
            }
            id={clinic.name}
          >
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
      <Container>
        <br />
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <div className="card-body">{clinicsList}</div>
            </div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  <MapComponent
                    isMarkerShown
                    clinics={this.props.clinics}
                    borderChanger={this.borderChanger}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Clinics;
