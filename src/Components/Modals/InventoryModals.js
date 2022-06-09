import React, {useState} from 'react';
import  TextField  from '@mui/material/TextField';
import {Button , Modal, Container, Row, Col} from 'react-bootstrap';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import { useTheme } from '@mui/material/styles';
import ButtonR from '@mui/material/Button';
import FormControl1 from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import { top100Films } from '../Data/Top100FilmsData';
import Autocomplete from '@mui/material/Autocomplete';
import Tooltip from '@mui/material/Tooltip';
import {MdOutlineAutorenew , MdOutlineHelpOutline} from 'react-icons/md'


const inputStyle = {
    border: "1px solid rgb(185, 185, 185)",
    height: "50px",
    borderRadius: "4px",
    width: "220px",
    padding: "10px"
}

// Data will be come through Map.Array => () to use in Select Box -> erase when Database attached

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
    ];
    // This is for uploading image's
    function handleImage() {
        console.log("Image")
    }



export const AddCategoryModal = ({
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
                <Modal.Title>Add Category</Modal.Title>
            </Modal.Header>
            <Modal.Body className='show-grid'>
                <p>
                    <i style={{color:'red'}}>The field marked with * are required input fields.</i>
                </p>
            <Container>
                <Row>
                    <Col xs={10} md={6}>
                        <h6>Name*</h6>
                        <TextField id="outlined-basic" label="Type Category Name ..." variant="outlined" />
                    </Col>
                    <Col xs = {8} md = {6}>
                        <h6>Image</h6>
                        <input type="file" name='myfile' onChange={handleImage()} className = "customInput"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {12} md = {12}>
                        <h6>Parent Category</h6>
                    <FormControl sx={{ width: 300 }}>
                        <InputLabel id="demo-multiple-chip-label" >Chip</InputLabel>
                        <Select
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                        renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                                ))}
                            </Box>
                            )}
                            MenuProps={MenuProps}
                            >
                            {names.map((name) => (
                                <MenuItem
                                key={name}
                                value={name}
                                style={getStyles(name, personName, theme)}
                                >
                                {name}
                                </MenuItem>
                            ))}
                            </Select>
                        </FormControl>
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


//  Modal For Products 
export const AddProductModal = ({
    onHide,
    show

}) => {

      // For DropDown -> Type
  const [type, setType] = useState('');
  //State for Show Hide on Standard
  const [hide , setHide] = useState(false);
  const onServicesShow = () => setHide(true);
  const onServicesHide = () => setHide(false);


  const handleChangeTypeS = (event) => {
    setType(event.target.value);
    if(event.target.value === 'Services'){
      onServicesShow();
    }
    else{
      onServicesHide();
    }

  };
  const Result = () => {
    return(
        <Row className='Standard'>
            <Col xs={6} md={4}>
            <h6>Product Unit*</h6>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{ width: 220 }}
              size = 'small'                
              renderInput={(params) => <TextField {...params} label="Movie" />}
            />       
            </Col>
            <Col xs={6} md={4}>
            <h6>Sale Unit</h6>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{ width: 220 }}
              size = 'small'                
              renderInput={(params) => <TextField {...params} label="Movie" />}
            />       
            </Col>
            <Col xs={6} md={4}>
            <h6>Purchase Unit</h6>
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
    )
  
  }

  return (<div className="add_product-Modal" >  
      
  <Modal fullscreen show={show} onHide = {onHide}>  
  <Modal.Header closeButton style={{backgroundColor : '#F7F7F7'}}>  
    <Modal.Title>Add Products</Modal.Title>  
  </Modal.Header>  
  
  <Modal.Body className='show-grid' >
    <Container>
      <Row className='topSpace'>
        <Col xs={6} md={4}>
          <h6>Product Type*</h6>
          <FormControl1 sx={{ minWidth: 220 }} size="small">
          <InputLabel id="demo-select-small">Type</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={type}
              label="product_type"
              onChange={handleChangeTypeS}
            >
              <MenuItem value="None">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Standard">Standard</MenuItem>
              <MenuItem value="Services">Services</MenuItem>
            </Select>
            </FormControl1>
            
        </Col>
        <Col xs={6} md={4}>
        <h6>Product Name*</h6>
            <TextField id="outlined-basic" label="Product Name" variant="outlined" size="small" style={{width:220}}/>
        </Col>
        <Col xs={6} md={4}>
          <h6>Product Code</h6>
          <TextField id ="outlined-basics" label= "Product Code" variant='outlined' size='small'
            InputProps={{
              
              style :{
                paddingRight: '0px',
                width:220
              },
              endAdornment: (
                <InputAdornment position="end" >
                  <ButtonR  variant="contained" endIcon={<MdOutlineAutorenew />}
                    style = {{height: '38px', marginBottom:1}}>
                  </ButtonR>
                </InputAdornment>
              )
            }}
            />
        </Col>
      </Row>
      <Row className='topSpace'>
      <Col xs={6} md={4}>
        <h6>Brand</h6>
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 220 }}
            size = 'small'
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />
        </Col>
        <Col xs={6} md={4}>
        <h6>Category *</h6>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 220 }}
          size = 'small'                
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />              
        </Col>
        <Col xs={6} md={4}>
        <h6>Product Price*</h6>
            <TextField type='number' id="outlined-basic" label="Product Name" variant="outlined" size="small" style={{width:220}}/>
        </Col>
      </Row>
      <Row className='topSpace'>
      <Col xs={6} md={4}>
        <h6>Product Tax</h6>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 220 }}
          size = 'small'                
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />              
        </Col>
        <Col xs={6} md={4}>
        <div className='con' style={{display:"flex"}}>
        <h6>Tax Method</h6>
        <Tooltip title="Add" placement="top-start">
        <ButtonR startIcon={<MdOutlineHelpOutline />} style ={{marginTop:-5}}>
        </ButtonR>
        </Tooltip>
        </div>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 220 }}
          size = 'small'                
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />              
        </Col>
        <Col xs = {6} md = {4}>
          <h6>Image</h6>
          <input type="file" name='myfile' onChange={handleImage()} className = "customInputForProduct" style={inputStyle}/>
        </Col>
      </Row>
        {hide ? <Result /> : null}
        <Row className='topSpace'>
          <Col xs = {18} md = {12}>
            <h6>Short Description</h6>
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            style = {{width:'88%'}}
          />
          </Col>
        </Row>
    </Container>
  </Modal.Body>  
  
  <Modal.Footer>  
    <Button variant="secondary" onClick={onHide}>Close Modal</Button>  
    <Button variant="primary" onClick={onHide}>Save changes</Button>  
  </Modal.Footer>  
</Modal>  
</div>
  )
}
