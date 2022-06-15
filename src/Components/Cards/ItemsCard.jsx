import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Im from '../Data/ss-icon-22.jpg';


const ItemsCard = ({item}) => {
  return (
    <Card style={{ width: '7rem', margin:'2px' }} className = "text-center">
        <div style={{display:"flex",justifyContent:"center" , marginTop:'10px'}}>
          <Card.Img variant="top" src={Im} style = {{height:'40px' ,  width:'40px'}}/>
      
        </div>
      <Card.Body>
        <Card.Text>
          
         {item.price}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ItemsCard