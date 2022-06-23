import React, {useState} from 'react';
import { Row , Col } from 'react-bootstrap';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ItemsCard from '../Cards/ItemsCard';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import {BsSearch } from 'react-icons/bs'
import { CartItems, proItems } from '../Data/CartItems';

const styleOfBase = {
  overflowY: 'scroll',
  whiteSpace: 'break-spaces',
  marginTop:'15px',
  marginRight: '10px',
  textAlign: 'justify',
  height:'70vh',
  overflowX:'hidden'
}

const styleofPanOn = {
  background : '#F1EFF6',
  height:'75vh',
  float:'right',
  borderRadius:'8px',
  width:'100%',
  transition: '.2s ease-in-out'
}
const styleofPanOf = {
  background : '#F1EFF6',
  height:'75vh',
  float:'right',
  borderRadius:'8px',
  width:'0%',
  transition: '.2s ease-in-out'
}

const LoadListCategory = () => {
  return(<> <div className='base' style={styleOfBase }>
  <Col>
  <Row style = {{justifyContent : 'center'}}>
  {CartItems.map((item, index) => {
    return <ItemsCard item = {item} index = {index}/>
  })}
  </Row>
  </Col>
  </div>
  </>)
}

const LoadListProduct = () => {
  return(<> <div className='base' style={styleOfBase }>
  <Col>
  <Row style = {{justifyContent : 'center'}}>
  {proItems.map((item, index) => {
    return <ItemsCard item = {item} index = {index}/>
  })}
  </Row>
  </Col>
  </div>
  </>)
}

function Pos({val}){
  const [toggleAnimation , setToggleAnimation] = useState(false);
 
  const [list , setList] = useState('cat');

  const changeHandle = () => {
    setToggleAnimation(true)
    if(val === 'cat'){
      setList('cat');


    }
    else{
      setList('brand');

    }
  }
  
  return (<>
    <div className='posContainer' style={{overflowX:'hidden'}}>
      <Row>
        <Col>
        Left
        </Col>
        <Col>
        <div className='center' style  = {{textAlign:'center'}}>
        <Stack spacing={2} direction="row" style={{justifyContent : "center", paddingTop: '10px' , paddingBottom:'10px'}}>
            <Button variant="contained" 
            style={{backgroundColor:"#059BFF" , width:'200px'}}
              
              onClick = {() => changeHandle(val = 'cat')}
              onAnimationEnd = {() => setToggleAnimation(false)}
              toggleAnimation = {toggleAnimation}
              >
                Category
            </Button>
            <Button variant="contained" style = {{backgroundColor:"#FF4069" , width:'200px'}}
            onClick = {() => changeHandle( val = 'brand')}
            onAnimationEnd = {() => setToggleAnimation(false)}
            toggleAnimation = {toggleAnimation}

            >
                Brand
            </Button>
        </Stack>
        <TextField id ="outlined-basics" label= "Search" variant='outlined' size='small'
            style = {{
              paddingBottom:'10px',
              width:'400px'
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" >
                 <BsSearch/>
                </InputAdornment>
              )
            }}
            />
        </div>
        <div className = 'panContainer' style = {toggleAnimation ? styleofPanOf : styleofPanOn}>
        {list === 'cat' ? <LoadListCategory/> : <LoadListProduct/>}
        </div>
        </Col>
      </Row>
    </div>
  </>)
}

export default Pos