import React from 'react';
import axios from 'axios';
import { Table, Container, Button, Modal, Form } from 'react-bootstrap';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
      loaded: false,
      activeModal: null,
      cancellationReason: '',
    };
  }

  handleClose = () => {
    this.setState({ activeModal: null });
  };

  handleShow = (e, appointment) => {
    this.setState({ activeModal: appointment });
  };

  onReasonChange = e => {
    this.setState({ cancellationReason: e.target.value });
  };

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
          <tr key={apt.details.id} style={{ minHeight: `3 rem` }}>
            <td>{new Date(apt.details.date_time).toDateString()}</td>
            <td>
              {new Date(apt.details.date_time).toLocaleTimeString('en-CA')}
            </td>
            <td>{apt.clinic}</td>
            <td>{apt.specialist}</td>
            {apt.details.cancelled ? (
              <td>Cancelled</td>
            ) : new Date(apt.details.date_time) >= Date.now() ? (
              <td>
                <Button
                  onClick={e => {
                    this.handleShow(e, apt.details.id);
                  }}
                >
                  Cancel
                </Button>

                <Modal
                  id={apt.details.id}
                  show={this.state.activeModal === apt.details.id}
                  onHide={this.handleClose}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Your Appointment</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group>
                        <Form.Label>
                          May we ask why you are cancelling your appointment on{' '}
                          {new Date(apt.details.date_time).toDateString()} at{' '}
                          {new Date(apt.details.date_time).toLocaleTimeString(
                            'en-CA',
                          )}
                          ?
                        </Form.Label>
                        <Form.Control
                          placeholder="Cancellation Reason"
                          as="textarea"
                          rows="3"
                          value={this.state.sessionDetails}
                          onChange={this.onReasonChange}
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                      Close
                    </Button>
                    <Button variant="primary">Submit</Button>
                  </Modal.Footer>
                </Modal>
              </td>
            ) : (
              <td> Past </td>
            )}
          </tr>
        );
      });
    }
    return (
      <Container style={{ marginTop: `5REM` }}>
        <h1 style={{ paddingBottom: `2 rem` }}>Your appointments</h1>
        <Table borderless responsive="sm">
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
