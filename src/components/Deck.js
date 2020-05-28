import React, { useState, useEffect } from 'react'
import { Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

import TarotCard from './TarotCard'

export default function Deck() {
  const [deck, setDeck] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchDeck() {
    const response = await fetch('https://rose-hunter-tarot-api.herokuapp.com/cards')
    const json = await response.json()

    setDeck(json)
    setLoading(false)
  }

  useEffect(() => {
    fetchDeck()
  }, [])

  return (
    <div>
      <Link to="/spreads">
        <Button style={{ margin: 20 }} variant="contained" color="primary">
          Pick a spread
          </Button>
      </Link>
      <h3>Mouse over a card to read about its meanings</h3>
      <Grid container style={{ flexGrow: 1 }} spacing={2}>
        <Grid item xs={deck.length}>
          <Grid container justify="center" spacing={2}>
            {deck.map((card) => (
              <Grid key={card} item>
                <TarotCard name={card.name} img_link={card.img} upright={card.upright} reversed={card.reversed} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div >
  )
}