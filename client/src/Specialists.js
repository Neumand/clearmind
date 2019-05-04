import React, { Component } from 'react';
import {
  Button,
  Modal,
  Image,
  Form,
  Spinner,
  Container,
  Card,
  CardDeck,
  Col,
  Row,
} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import { setMinutes, setHours, addDays, getHours, getMinutes } from 'date-fns';
import { post } from 'axios';
import './Specialists.css';

class Specialists extends Component {
  constructor() {
    super();

    this.state = {
      activeModal: null,
      startDate: addDays(new Date(), 1),
      sessionDetails: '',
      confirmData: null,
      confirmButton: 'Confirm',
    };
  }

  handleClose = () => {
    this.setState({ activeModal: null });
  };

  handleShow = (e, specialist) => {
    this.setState({ activeModal: specialist });
  };

  handleChange = date => {
    this.setState({
      startDate: date,
    });
  };

  // Update the local state when a client enters session detail information.
  onDetailsChange = e => {
    this.setState({ sessionDetails: e.target.value });
  };

  // Send booking information to the back-end and close the booking modal.
  submitBooking = (e, clinic, specialist) => {
    this.setState({
      confirmButton: (
        <Spinner animation="border" variant="light" size="sm" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ),
    });
    let token = 'Bearer ' + localStorage.getItem('jwt');
    post(
      'api/v1/appointments',
      {
        user_id: this.props.currentUser.id,
        clinic_id: clinic.id,
        specialist_id: specialist.id,
        date_time: this.state.startDate,
        session_details: this.state.sessionDetails,
      },
      { headers: { Authorization: token } },
    )
      .then(res => {
        const { date_time, end_time } = res.data;
        const bookedSpec = `${specialist.first_name} ${specialist.last_name}`;
        console.log(res.data);
        this.setState({
          confirmData: {
            bookedSpec,
            startTime: new Date(date_time),
            endTime: new Date(end_time),
            clinic: clinic.name,
            location: clinic.address,
          },
        });
        this.setState({ startDate: new Date(), sessionDetails: '' });
        setTimeout(() => {
          this.props.history.push({
            pathname: '/confirmation',
            state: this.state.confirmData,
          });
        }, 2000);
      })
      .catch(error => console.log(error));
  };

  // Populate exclude times for a given specialist's schedule.
  specSchedule = aptArr => {
    if (aptArr === undefined) {
      return [];
    }
    let timesArr = [];
    for (const booking of aptArr) {
      let date = new Date(booking.date_time);
      const stateDate = `${this.state.startDate.toDateString()}`;
      const selectedDate = `${date.toDateString()}`;
      let time = setHours(setMinutes(date, getMinutes(date)), getHours(date));
      if (stateDate === selectedDate) {
        timesArr.push(time);
      }
    }
    return timesArr;
  };

  render() {
    const specList = this.props.specialists.map(input => {
      return (
        <Col md={4}>
          <Card className="card-margin">
            <Card.Img variant="top" src={input.specialist.image} />
            <Card.Body>
              <Card.Title>
                <h5>
                  {input.specialist.first_name} {input.specialist.last_name}
                </h5>
              </Card.Title>
              <Card.Text>Expertise: {input.specialist.expertise}</Card.Text>
              <Button
                variant="primary"
                onClick={e => {
                  this.handleShow(e, input.specialist.first_name);
                }}
              >
                Book
              </Button>

              <Modal
                id={input.specialist.first_name}
                show={this.state.activeModal === input.specialist.first_name}
                onHide={this.handleClose}
              >
                <Modal.Header closeButton>
                  <Image src={input.specialist.image} rounded />
                  <Modal.Title>
                    Booking a session with: {input.specialist.first_name}{' '}
                    {input.specialist.last_name}
                  </Modal.Title>
                </Modal.Header>
                {this.props.currentUser.id ? (
                  <Modal.Body>
                    <Form>
                      <DatePicker
                        selected={this.state.startDate}
                        onChange={date => this.handleChange(date, input.apts)}
                        showTimeSelect
                        filterDate={this.isWeekday}
                        timeIntervals={60}
                        maxTime={setHours(setMinutes(new Date(), 0), 16)}
                        minTime={setHours(setMinutes(new Date(), 0), 9)}
                        minDate={addDays(new Date(), 1)}
                        excludeTimes={this.specSchedule(input.apts)}
                        dateFormat="MMMM d, yyyy h:mm aa"
                        placeholderText="Please choose a date and time"
                      />
                      <Form.Group>
                        <Form.Label>Session Details</Form.Label>
                        <Form.Control
                          placeholder="Is there anything we should know before the session?"
                          as="textarea"
                          rows="3"
                          value={this.state.sessionDetails}
                          onChange={this.onDetailsChange}
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                ) : (
                  <Modal.Body>
                    Please <Link to="/login">login</Link> to book an
                    appointment.
                  </Modal.Body>
                )}
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>
                    Close
                  </Button>
                  {this.props.currentUser.id ? (
                    <Button
                      variant="primary"
                      onClick={e =>
                        this.submitBooking(e, input.clinic, input.specialist)
                      }
                    >
                      {this.state.confirmButton}
                    </Button>
                  ) : (
                    <Button variant="primary" disabled>
                      {this.state.confirmButton}
                    </Button>
                  )}
                </Modal.Footer>
              </Modal>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Clinic: {input.clinic.name} </small>
            </Card.Footer>
          </Card>
        </Col>
      );
    });

    return (
      <Container className="margin-top">
        <h1>Our specialists</h1>
        <Row>
          <CardDeck>{specList}</CardDeck>
        </Row>
      </Container>
    );
  }
}

export default Specialists;
