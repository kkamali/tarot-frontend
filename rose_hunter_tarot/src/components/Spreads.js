import React from 'react'
import { Container, Card } from '@material-ui/core'

export const Spreads = props =>
  <Container>
    <h1>Here are the spreads I know!</h1>
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>Classic Dragonfly</Card.Title>
          <Card.Text>
            This 9-card spread is the traditional choice for Rosehunter decks. It is a multi-faceted, general-use spread that digs into the details of a situation.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Aunty's Advice</Card.Title>
          <Card.Text>
            This 3-card spread is perfect for when you're in a rush and just need a quick check-in! Much like advice from a stern but loving aunt, this spread is concise, insightful, and versatile!
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>True Love</Card.Title>
          <Card.Text>
            This 6-card spread explores the strengths, weaknesses, and challenges of your relationships. It was designed for use in romantic contexts, but it can also be used for non-romantic relationships!
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Dreaming</Card.Title>
          <Card.Text>
            As the title implies, this 5-card spread helps demystify your dreams and find out what your subconsious is trying to tell you!
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Pathways</Card.Title>
          <Card.Text>
            As the title implies, this 5-card spread helps demystify your dreams and find out what your subconsious is trying to tell you!
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  </Container >

export default Spreads