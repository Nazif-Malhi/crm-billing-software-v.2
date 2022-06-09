import React from 'react';
import {Button , Modal, Container, Row, Col} from 'react-bootstrap';
import Autocomplete from '@mui/material/Autocomplete';
import { top100Films } from '../Data/Top100FilmsData';
import  TextField  from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import ButtonR from '@mui/material/Button';
import {MdOutlineHelpOutline} from 'react-icons/md';

const styleOfOverallCol = {
    border:'1px solid', height:'40px' , alignItems:'center', display:'flex' , borderColor:'#cecece'
}
const styleOfRight = {
    textAlign:'right', paddingLeft:'5px'
}

// This is for uploading image's
function handleImage() {
    console.log("Image")
}


export const ReturnSalesModal = ({
    onHide,
    show
}) => {
  return (<>
    <Modal fullscreen show={show} onHide = {onHide}>  
  <Modal.Header closeButton style={{backgroundColor : '#F7F7F7'}}>  
    <Modal.Title>Return Sales</Modal.Title>  
  </Modal.Header>  
  
  <Modal.Body className='show-grid' >
  <Container>
            <Row>
                <Col>
                <h6>Customer *</h6>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    size = 'small'
                    renderInput={(params) => <TextField {...params} label="Movie" />}
                />
                </Col>
                <Col>
                <h6>WareHouse *</h6>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    size = 'small'
                    renderInput={(params) => <TextField {...params} label="Movie" />}
                />
                </Col>
                <Col>
                <h6>Biller *</h6>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    size = 'small'
                    renderInput={(params) => <TextField {...params} label="Movie" />}
                />
                </Col>
            </Row>
            <Row>
                <h5>Order Table *</h5>
            </Row>
            <Row>
                <Col>
                <h6>Order tax</h6>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    size = 'small'
                    renderInput={(params) => <TextField {...params} label="Movie" />}
                />
                </Col>
                <Col>
                <div className='con' style={{display:"flex"}}>
                    <h6>Tax Method</h6>
                    <Tooltip title="Add" placement="top-start">
                    <ButtonR startIcon={<MdOutlineHelpOutline />}>
                    </ButtonR>
                    </Tooltip>
                    </div>
                    <TextField type='file' id="outlined-basic" label=' ' variant="outlined" size="small" onChange={handleImage()}/>
                </Col>
            </Row>
            <Row>
                <Col> 
                <h6>Note</h6>
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
        <div className='ToalDescription' style={{paddingTop:'40px'}}>
        <Container>
            <Row>
                <Col style={styleOfOverallCol}>
                    <Col>
                    <div class="pull-left">
                        Items
                    </div>
                    </Col>
                    <Col>
                    <div style={styleOfRight}>
                        0.000
                    </div>
                    </Col>
                </Col>
                <Col style={styleOfOverallCol}>
                    <Col>
                    <div class="pull-left">
                        Total
                    </div>
                    </Col>
                    <Col>
                    <div style={styleOfRight}>
                        0.000
                    </div>
                    </Col>
                </Col>
                <Col style={styleOfOverallCol}>
                    <Col>
                    <div class="pull-left">
                        Order tax
                    </div>
                    </Col>
                    <Col>
                    <div style={styleOfRight}>
                        0.000
                    </div>
                    </Col>
                </Col>
                <Col style={styleOfOverallCol}>
                    <Col>
                    <div class="pull-left" style={{width:'100px'}}>
                        Grand Total
                    </div>
                    </Col>
                    <Col>
                    <div style={styleOfRight}>
                        0.000
                    </div>
                    </Col>
                </Col>
                
            </Row>
        </Container>
        </div>
  </Modal.Body>  
  
  <Modal.Footer>  
    <Button variant="secondary" onClick={onHide}>Close Modal</Button>  
    <Button variant="primary" onClick={onHide}>Save changes</Button>  
  </Modal.Footer>  
</Modal>

</>  )
}

export default function ReturnPurchaseModals({
    onHide,
    show
}) {
  return (<>
  <Modal fullscreen show={show} onHide = {onHide}>  
  <Modal.Header closeButton style={{backgroundColor : '#F7F7F7'}}>  
    <Modal.Title>Return Purchase</Modal.Title>  
  </Modal.Header>  
  
  <Modal.Body className='show-grid' >
  <Container>
            <Row>
                <Col>
                <h6>WareHouse *</h6>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    size = 'small'
                    renderInput={(params) => <TextField {...params} label="Movie" />}
                />
                </Col>
                <Col>
                <h6>Supplier *</h6>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    size = 'small'
                    renderInput={(params) => <TextField {...params} label="Movie" />}
                />
                </Col>
            </Row>
            <Row>
                <h5>Order Table *</h5>
            </Row>
            <Row>
                <Col>
                <h6>Order tax</h6>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    size = 'small'
                    renderInput={(params) => <TextField {...params} label="Movie" />}
                />
                </Col>
                <Col>
                <div className='con' style={{display:"flex"}}>
                    <h6>Tax Method</h6>
                    <Tooltip title="Add" placement="top-start">
                    <ButtonR startIcon={<MdOutlineHelpOutline />}>
                    </ButtonR>
                    </Tooltip>
                    </div>
                    <TextField type='file' id="outlined-basic" label=' ' variant="outlined" size="small" onChange={handleImage()}/>
                </Col>
            </Row>
            <Row>
                <Col> 
                <h6>Note</h6>
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
        <div className='ToalDescription' style={{paddingTop:'40px'}}>
        <Container>
            <Row>
                <Col style={styleOfOverallCol}>
                    <Col>
                    <div class="pull-left">
                        Items
                    </div>
                    </Col>
                    <Col>
                    <div style={styleOfRight}>
                        0.000
                    </div>
                    </Col>
                </Col>
                <Col style={styleOfOverallCol}>
                    <Col>
                    <div class="pull-left">
                        Total
                    </div>
                    </Col>
                    <Col>
                    <div style={styleOfRight}>
                        0.000
                    </div>
                    </Col>
                </Col>
                <Col style={styleOfOverallCol}>
                    <Col>
                    <div class="pull-left">
                        Order tax
                    </div>
                    </Col>
                    <Col>
                    <div style={styleOfRight}>
                        0.000
                    </div>
                    </Col>
                </Col>
                <Col style={styleOfOverallCol}>
                    <Col>
                    <div class="pull-left" style={{width:'100px'}}>
                        Grand Total
                    </div>
                    </Col>
                    <Col>
                    <div style={styleOfRight}>
                        0.000
                    </div>
                    </Col>
                </Col>
                
            </Row>
        </Container>
        </div>
  </Modal.Body>  
  
  <Modal.Footer>  
    <Button variant="secondary" onClick={onHide}>Close Modal</Button>  
    <Button variant="primary" onClick={onHide}>Save changes</Button>  
  </Modal.Footer>  
</Modal>
  </>
  )
}
