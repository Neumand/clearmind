import React from 'react';
import MapComponent from './Map';
import { Container, Card } from 'react-bootstrap';

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
        <Card
          key={clinic.id}
          style={{ marginBottom: `2rem`, marginRight: `2rem` }}
          id={clinic.name}
          border={this.state.activeCard === clinic.name ? 'dark' : 'light'}
        >
          <Card.Body>
            <Card.Title>{clinic.name}</Card.Title>
            <Card.Text>
              {clinic.description} <br /> <br /> {clinic.address} <br />
              {clinic.phone_number}
            </Card.Text>
          </Card.Body>
        </Card>
      );
    });

    return (
      <Container style={{ marginTop: `5REM` }}>
        <h1 style={{ paddingBottom: `2 rem` }}>Our clinics</h1>
        <p>
          You can click on the map marker to highlight that clinic's
          information.
        </p>
        <div className="row no-gutters">
          <div className="col-md-4">{clinicsList}</div>
          <div className="col-md-8">
            <Card>
              <MapComponent
                isMarkerShown
                clinics={this.props.clinics}
                borderChanger={this.borderChanger}
              />
            </Card>
          </div>
        </div>
      </Container>
    );
  }
}

export default Clinics;
