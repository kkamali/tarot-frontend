import React, { Component } from 'react'
import { Container } from '@material-ui/core'

import TarotCard from './TarotCard'

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
        {this.state.tarotCards.map(card => <TarotCard name={card.name} img_link={card.img} upright={card.upright} reversed={card.reversed} />)}
      </Container>
    )
  }
}
export default Deck