import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Im from '../Data/ss-icon-22.jpg';


const ItemsCard = ({item}) => {
  return (
    <Card style={{ width: '10rem', margin:'2px' }} className = "text-center">
        <div style={{display:"flex",justifyContent:"center" , marginTop:'10px'}}>
          <Card.Img variant="top" src={Im} style = {{height:'40px' ,  width:'40px'}}/>
      
        </div>
      <Card.Body>
        <Card.Title style = {{fontSize: '1.2vw'}}>{item.title}</Card.Title>
        <Card.Text>
         {item.price}
         <h2>hhuyuyuy</h2>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ItemsCard