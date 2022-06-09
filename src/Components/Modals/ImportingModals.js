import React from 'react';
import {Button , Modal, Container, Row, Col} from 'react-bootstrap';
import ButtonR from '@mui/material/Button';
import {FiDownload} from 'react-icons/fi';



const inputStyle = {
    border: "1px solid rgb(185, 185, 185)",
    height: "50px",
    borderRadius: "4px",
    width: "100%",
    padding: "10px"
}
function handleFile (){
    console.log('click');
}
const ImportingModals = ({
    onHide,
    show,
    title,
    para
}) => {
return (
    <Modal show={show} 
    onHide = {onHide}
    size="lg" 
    aria-labelledby="example-modal-sizes-title-lg"
    >
        <Modal.Header closeButton style={{backgroundColor : '#F7F7F7'}}>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='show-grid'>
            <p><i style={{color:'red'}}>The field marked with * are required input fields.</i></p>
            <p>{para}</p>
            <Container>
                <Row>
                    <Col xs={10} md={6}>
                        <h6>Upload CSV File*</h6>
                        <input type="file" name='myfile' onChange={handleFile()} style = {inputStyle}/>
                    </Col>
                    <Col xs = {8} md = {6}>
                        <h6>Sample File</h6>
                        <ButtonR variant="contained" startIcon={<FiDownload/>} style = {{width:"100%" , marginTop: "5px"}}>
                        File Download
                        </ButtonR>
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
)
}

export default ImportingModals