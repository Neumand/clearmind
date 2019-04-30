import React from 'react';
import { Button, Modal, Image, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { setMinutes, setHours, addDays, getHours, getMinutes } from 'date-fns';
import axios from 'axios';

class Specialists extends React.Component {
  constructor() {
    super();

    this.state = {
      activeModal: null,
      startDate: addDays(new Date(), 1),
      sessionDetails: '',
      excludedTimes: [],
    };
  }

  handleClose = () => {
    this.setState({ activeModal: null });
  };

  handleShow = (e, specialist) => {
    this.setState({ activeModal: specialist });
  };

  handleChange = (date, apts) => {
    this.setState({
      startDate: date,
      excludedTimes: this.specSchedule(apts),
    });
  };

  // Update the local state when a client enters session detail information.
  onDetailsChange = e => {
    this.setState({ sessionDetails: e.target.value });
  };

  // Send booking information to the back-end and close the booking modal.
  submitBooking = (e, clinicId, specialistId) => {
    axios
      .post('api/v1/appointments', {
        user_id: 1,
        clinic_id: clinicId,
        specialist_id: specialistId,
        date_time: this.state.startDate,
        session_details: this.state.sessionDetails,
      })
      .then(res => {
        console.log(res.data);
        this.setState({ startDate: new Date(), sessionDetails: '' });
        this.handleClose();
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
        <div className='col-md-4'>
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
                      excludeTimes={this.state.excludedTimes}
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
                      this.submitBooking(
                        e,
                        input.clinic.id,
                        input.specialist.id,
                      )
                    }
                  >
                    Confirm
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
