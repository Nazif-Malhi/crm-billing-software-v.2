import React, {useState} from 'react';
import ButtonR from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import {Button , Modal, Container, Row, Col} from 'react-bootstrap';

// For date 
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import  TextField  from '@mui/material/TextField';
import { top100Films } from '../Data/Top100FilmsData';
import Autocomplete from '@mui/material/Autocomplete';

export const AddExpenseCategoryModal = ({
    onHide,
    show
}) => {
  return (<>
  <div className='addmodal_div'>
      <Modal show={show} onHide={onHide}
      size="lg" 
      aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton style={{backgroundColor : '#F7F7F7'}}>
          <Modal.Title>Add Expense Category</Modal.Title>
        </Modal.Header>
        <Modal.Body className='show-grid'>
        <p><i style={{color:'red'}}>The field marked with * are required input fields.</i></p>
        <Container>
          
            <Row>
              <Col xs={10} md={6}>
              <h6>Code *</h6>
                <TextField id ="outlined-basics" label= "Product Code" variant='outlined' size='small'
                  InputProps={{
                    
                    style :{
                      paddingRight: '0px',
                      width:270
                    },
                    endAdornment: (
                      <InputAdornment position="end" >
                        <ButtonR  variant="contained"
                          style = {{height: '38px', marginBottom:1}}>
                            Generate
                        </ButtonR>
                      </InputAdornment>
                    )
                  }}
                  />
              </Col>
              <Col xs = {8} md = {6}>
                <h6>Name *</h6>
                <TextField type='number' id="outlined-basic" label="Product Name" variant="outlined" size="small" style={{width:220}}/>
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
  </>
  )
}


export const AddExpenseModal = ({
    onHide,
    show
}) => {
    const [value, setValue] = useState(new Date());
  return (<>
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
              <Col xs={10} md={6}>
              <h6>Date *</h6>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label="For desktop"
                value={value}
                
                minDate={new Date('2017-01-01')}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField size='small' {...params} />}
              />
        </LocalizationProvider>
              </Col>
              <Col xs = {8} md = {6}>
                <h6>Expense Category *</h6>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={top100Films}
                  sx={{ width: 220 }}
                  size = 'small'
                  renderInput={(params) => <TextField {...params} label="Movie" />}
                />
              </Col>
              </Row>
              <Row>
              <Col xs = {8} md = {6}>
                <h6>Ware House *</h6>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={top100Films}
                  sx={{ width: 220 }}
                  size = 'small'
                  renderInput={(params) => <TextField {...params} label="Movie" />}
                />
              </Col>
              <Col xs = {8} md = {6}>
                <h6>Amount *</h6>
              <TextField id="outlined-basic" label="Product Name" variant="outlined" size="small" style={{width:220}}/>
              </Col>
              </Row>
              <Row>
              <Col xs = {8} md = {6}>
                <h6>Account</h6>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={top100Films}
                  sx={{ width: 220 }}
                  size = 'small'
                  renderInput={(params) => <TextField {...params} label="Movie" />}
                />
              </Col>
              </Row>
              <Row>
                <Col xs = {18} md = {12}>
                <h6>Description</h6>
                <TextField
                  id="outlined-multiline-static"
                  label="Description"
                  multiline
                  rows={4}
                  style = {{width:'100%'}}
                />
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
  </>
  )
}
