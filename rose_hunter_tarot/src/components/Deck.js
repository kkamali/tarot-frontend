import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

class Deck extends Component {
  state = {
    tarotCards: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/cards')
      .then(response => response.json())
      .then(data => {
        this.setState({
          tarotCards: data
        })
      })
  }

  render() {
    return (
      <Container>
        {this.state.tarotCards.map(card => card.name)}
      </Container>
    )
  }
}
export default Deck