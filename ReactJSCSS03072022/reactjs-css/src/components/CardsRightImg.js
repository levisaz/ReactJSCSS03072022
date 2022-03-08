import React from 'react'
import {Card, Button} from 'react-bootstrap'
const CardsRightImg = (props) => {

 
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
        {props.description}
        </Card.Text>
        <Button variant="primary" href={props.url} target="_blank">Explore</Button>
      </Card.Body>
      <Card.Img variant="top" src={props.img} style={{height: '12rem'}} alt={props.alt} />
    </Card>
  )
}

export default CardsRightImg