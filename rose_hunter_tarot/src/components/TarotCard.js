import React from 'react'
import { Card } from 'react-bootstrap'

export const TarotCard = props =>
  <Card style={{ width: '15rem' }}>
    <Card.Img variant="top" src={require(`../../public/${props.img_link}`)} />
    <Card.Body>
      <Card.Title>
        {props.name}
      </Card.Title>
      <Card.Text>
        <p>
          <em>Upright: </em>{props.upright}
        </p>
        <p>
          <em>Reversed: </em>{props.reversed}
        </p>
      </Card.Text>
    </Card.Body>
  </Card>

export default TarotCard