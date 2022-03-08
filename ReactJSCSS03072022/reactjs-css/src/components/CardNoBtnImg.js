import React from 'react'
import {Card} from 'react-bootstrap'
const Cards = (props) => {

 
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
        {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Cards