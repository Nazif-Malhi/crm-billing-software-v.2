import React from 'react';
import { Row , Col , Container } from 'react-bootstrap';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import ItemsCard from '../Cards/ItemsCard';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import {BsSearch } from 'react-icons/bs'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CartItems } from '../Data/CartItems';




const Right = styled.div`
 border : 1px solid darkgrey;
`;

const styleOfBase = {
  overflowY: 'scroll',
  whiteSpace: 'nowrap',
  margin: '10px',
  textAlign: 'justify',
  padding: '10px',
  height:'79vh',
  overflowX:'hidden'
}

const TAX_RATE = 0.07;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Paperclips (Box)', 100, 1.15),
  createRow('Paper (Case)', 10, 45.99),
  createRow('Waste Basket', 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

function SpanningTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Details
            </TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Desc</TableCell>
            <TableCell align="right">Qty.</TableCell>
            <TableCell align="right">Unit</TableCell>
            <TableCell align="right">Sum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.desc}>
              <TableCell>{row.desc}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.unit}</TableCell>
              <TableCell align="right">{ccyFormat(row.price)}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const LoadListContainer = () => {
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
const Services = () => {
  return(<>
      <Stack spacing={2} direction="row" style={{justifyContent : "center", paddingTop: '20px'}}>
            <Button variant="contained" style={{backgroundColor:"#059BFF" , width:'220px'}}>
                Category
            </Button>
            <Button variant="contained" style = {{backgroundColor:"#FF4069" , width:'220px'}}>
                Brand
            </Button>
        </Stack>
  </>)
}

const Standards = () => {
  return(<>
  
  </>)
}
const Pos = () => {
  return (<>
    {/* <Container> */}
    <div className='posContainer' style={{overflowX:'hidden'}}>
    <Row>
      <Col>
       <div className='left' style = {{background:'purple'}}>
        {/* <SpanningTable/> */}
       </div>
      </Col>
      <Col>
       <Right>
        {/* <Services/>
        <div className='searchDiv' style={{textAlign : 'center' ,marginTop:'20px'}}>

        <TextField id ="outlined-basics" label= "Product Code" variant='outlined' size='small' 
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" >
                  <BsSearch style = {{fontSize:'1rem'}}/>
                </InputAdornment>
              )
            }}
            />  
        </div>

        <Row>
          <Col>
            <LoadListContainer/>
          </Col>
        </Row> */}
       </Right>
      </Col>
    </Row>
    </div>
    {/* </Container> */}
  </>)
}

export default Pos