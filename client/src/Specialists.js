import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Modal, Image, Form, Spinner } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { setMinutes, setHours, addDays, getHours, getMinutes } from 'date-fns';
import { post } from 'axios';

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
        <Spinner animation='border' variant='light' size='sm' role='status'>
          <span className='sr-only'>Loading...</span>
        </Spinner>
      ),
    });
    post('api/v1/appointments', {
      user_id: 1,
      clinic_id: clinic.id,
      specialist_id: specialist.id,
      date_time: this.state.startDate,
      session_details: this.state.sessionDetails,
    })
      .then(res => {
        const { date_time, end_time } = res.data;
        const bookedSpec = `${specialist.first_name} ${specialist.last_name}`;
        console.log(res.data);
        this.setState({
          confirmData: {
            bookedSpec,
            startTime: date_time,
            endTime: end_time,
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
        <div key={input.specialist.id} className='col-md-4'>
          <div className='card'>
            <img src={input.specialist.image} className='card-img-top' alt='' />
            <div className='card-body'>
              <h5 className='card-title'>
                {input.specialist.first_name} {input.specialist.last_name}
              </h5>
              <p className='card-text'>
                Expertise: {input.specialist.expertise}
              </p>
              <Button
                variant='primary'
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
                      dateFormat='MMMM d, yyyy h:mm aa'
                      placeholderText='Please choose a date and time'
                    />
                    <Form.Group>
                      <Form.Label>Session Details</Form.Label>
                      <Form.Control
                        placeholder='Is there anything we should know before the session?'
                        as='textarea'
                        rows='3'
                        value={this.state.sessionDetails}
                        onChange={this.onDetailsChange}
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant='secondary' onClick={this.handleClose}>
                    Close
                  </Button>
                  <Button
                    variant='primary'
                    onClick={e =>
                      this.submitBooking(e, input.clinic, input.specialist)
                    }
                  >
                    {this.state.confirmButton}
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
            <div className='card-footer'>
              <small className='text-muted'>Clinic: {input.clinic.name} </small>
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
  }
}

export default Specialists;
