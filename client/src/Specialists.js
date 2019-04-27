import React from 'react';
import { Button, Modal } from 'react-bootstrap';

class Specialists extends React.Component {
  constructor() {
    super();

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      activeModal: null,
    };
  }

  handleClose() {
    this.setState({ activeModal: null });
  }

  handleShow(e, specialist) {
    this.setState({ activeModal: specialist });
  }

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
                onClick={e => this.handleShow(e, input.specialist.first_name)}
              >
                Book
              </Button>

              <Modal
                id={input.specialist.first_name}
                show={this.state.activeModal === input.specialist.first_name}
                onHide={this.handleClose}
              >
                <Modal.Header closeButton>
                  <Modal.Title>
                    {input.specialist.first_name} {input.specialist.last_name}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant='secondary' onClick={this.handleClose}>
                    Close
                  </Button>
                  <Button variant='primary' onClick={this.handleClose}>
                    Save Changes
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
