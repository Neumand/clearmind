import React from 'react';
import axios from 'axios';
import { Table, Container, Button } from 'react-bootstrap';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { appointments: [], loaded: false };
  }

  componentDidMount() {
    let token = 'Bearer ' + localStorage.getItem('jwt');
    let user_id = localStorage.getItem('user id');
    let url = '/api/v1/users/' + user_id;
    axios
      .get(url, { headers: { Authorization: token } })
      .then(res => this.setState({ appointments: res.data, loaded: true }))
      .catch(err => console.log(err));
  }

  render() {
    let outputArray;
    if (this.state.loaded) {
      outputArray = this.state.appointments.map(apt => {
        return (
          <tr key={apt.details.id}>
            <td>{new Date(apt.details.date_time).toDateString()}</td>
            <td>
              {new Date(apt.details.date_time).toLocaleTimeString('en-CA')}
            </td>
            <td>{apt.clinic}</td>
            <td>{apt.specialist}</td>
            {apt.details.cancelled ? (
              <td>Cancelled</td>
            ) : (
              <td>
                <Button>Cancel</Button>
              </td>
            )}
          </tr>
        );
      });
    }
    return (
      <Container style={{ marginTop: `5REM` }}>
        <Table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Clinic</th>
              <th>Specialist</th>
              <th />
            </tr>
          </thead>
          <tbody>{outputArray}</tbody>
        </Table>
      </Container>
    );
  }
}

export default Profile;
