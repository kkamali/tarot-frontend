import React, { Component } from 'react'
import { makeStyles, Grid, Container } from '@material-ui/core'

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
      <Grid container style={{ flexGrow: 1 }} spacing={2}>
        <Grid item xs={this.state.tarotCards.length}>
          <Grid container justify="center" spacing={2}>
            {this.state.tarotCards.map((card) => (
              <Grid key={card} item>
                <TarotCard name={card.name} img_link={card.img} upright={card.upright} reversed={card.reversed} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      // <Container>
      //   {this.state.tarotCards.map(card => <TarotCard name={card.name} img_link={card.img} upright={card.upright} reversed={card.reversed} />)}
      // </Container>
    )
  }
}
export default Deck