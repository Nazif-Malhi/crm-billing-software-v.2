import React from 'react';
import {Button , Modal, Container, Row, Col} from 'react-bootstrap';
import  TextField  from '@mui/material/TextField';


export const AddPeopleModal = ({
    onHide,
    show
}) => {
  return (
    <div className='addmodal_div'>
    <Modal show={show} onHide={onHide}
    size="lg" 
    aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton style={{backgroundColor : '#F7F7F7'}}>
        <Modal.Title>Add Expense</Modal.Title>
      </Modal.Header>
      <Modal.Body className='show-grid'>
      <p><i style={{color:'red'}}>The field marked with * are required input fields.</i></p>
      <Container>
          <Row>
              <Col>
              <h6>Name *</h6>
              <TextField id="outlined-basic" label="Name" variant="outlined" size="small"/>
              </Col>
              <Col>
              <h6>Email *</h6>
              <TextField type='email' id="outlined-basic" label="Email" variant="outlined" size="small"/>
              </Col>
          </Row>
          <Row>
              <Col>
              <h6>Phone Number *</h6>
              <TextField id="outlined-basic" label="Phone Number" variant="outlined" size="small"/>
              </Col>
              <Col>
              <h6>Address</h6>
              <TextField  id="outlined-basic" label="Address" variant="outlined" size="small"/>
              </Col>
          </Row>
          <Row>
              <Col>
              <h6>City</h6>
              <TextField id="outlined-basic" label="City" variant="outlined" size="small"/>
              </Col>
              <Col>
              <h6>State</h6>
              <TextField  id="outlined-basic" label="State" variant="outlined" size="small"/>
              </Col>
          </Row>
      </Container>
      
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={onHide}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}
