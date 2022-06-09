import React from 'react';
import {Card, Button, Container, Col, Row} from 'react-bootstrap';
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





const QuotationForm = () => {
  return (<>
  <Card>
  <Card.Header as="h5">Add Quotation</Card.Header>
  <Card.Body>
    <Card.Text>
        <p><i>The field labels marked with * are required input fields.</i></p>
        <Container>
            <Row>
                <Col>
                <h6>Brand</h6>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    size = 'small'
                    renderInput={(params) => <TextField {...params} label="Movie" />}
                />
                </Col>
                <Col>
                <h6>Brand</h6>
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
                <Col>
                <h6>Brand</h6>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    size = 'small'
                    renderInput={(params) => <TextField {...params} label="Movie" />}
                />
                </Col>
                <Col>
                <h6>Brand</h6>
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
            <h6>Select Product</h6>
                <Col>
                
                <TextField type='text' id="outlined-basic" label="Product Name" variant="outlined" size="small" style={{width:'100%'}}/>
                </Col>
            </Row>
            <Row>
                <h5>Order Table *</h5>
            </Row>
            <Row>
                <Col>
                <h6>Brand</h6>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    size = 'small'
                    renderInput={(params) => <TextField {...params} label="Movie" />}
                />
                </Col>
                <Col>
                <h6>Brand</h6>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    size = 'small'
                    renderInput={(params) => <TextField {...params} label="Movie" />}
                />
                </Col>
                <Col>
                <h6>Brand</h6>
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
                <Col>
                <h6>Brand</h6>
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
                <ButtonR startIcon={<MdOutlineHelpOutline />} style ={{marginTop:-5}}>
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
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
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
                    <div class="pull-left" style={{width:'120px'}}>
                        Order Discount
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
                        Shipping Cost
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
  </>
  )
}

export default QuotationForm