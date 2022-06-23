import React, {useState} from 'react';
import  TextField  from '@mui/material/TextField';
import {Button , Modal, Container, Row, Col} from 'react-bootstrap';
import { useTheme } from '@mui/material/styles';


const inputStyle = {
    border: "1px solid rgb(185, 185, 185)",
    height: "50px",
    borderRadius: "4px",
    width: "220px",
    padding: "10px"
}

// Data will be come through Map.Array => () to use in Select Box -> erase when Database attached


export const ChangeProfile = ({
    onHide,
    show
}) => {

    // Changing the Name's
    const theme = useTheme();
    const [personName, setPersonName] = useState([]);
    const handleChange = (event) => {
        const {
          target: { value },
        } = event;
        setPersonName(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
    };

    function getStyles(name, personName, theme) {
        return {
        fontWeight:
            personName.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
        };
    }

    

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
    PaperProps: {
        style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        },
    },
    };



return (
    <div className='addmodal_div'>
        <Modal show={show} 
        onHide={onHide}
        size="lg" 
        aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton style={{backgroundColor : '#F7F7F7'}}>
                <Modal.Title>Update User Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body className='show-grid'>
                <p>
                    <i style={{color:'red'}}>The field marked with * are required input fields.</i>
                </p>
            <Container>
                <Row>
                    <Col xs={10} md={6}>
                        <h6>Name*</h6>
                        <TextField id="outlined-basic" label="User Name..." variant="outlined" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={10} md={6}>
                        <h6>Email*</h6>
                        <TextField id="outlined-basic" label="User Name..." variant="outlined" />
                    </Col>
                </Row>

                <Row>
                    <Col xs={10} md={6}>
                        <h6>Old Password</h6>
                        <TextField id="outlined-basic" label="User Name..." variant="outlined" />
                    </Col>
                </Row>

                <Row>
                    <Col xs={10} md={6}>
                        <h6>New Password</h6>
                        <TextField id="outlined-basic" label="User Name..." variant="outlined" />
                    </Col>
                </Row>

                <Row>
                    <Col xs={10} md={6}>
                        <h6>Confirm Password</h6>
                        <TextField id="outlined-basic" label="User Name..." variant="outlined" />
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
