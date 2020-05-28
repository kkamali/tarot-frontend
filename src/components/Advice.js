import React, { useState, useEffect } from 'react'
import Drawn from './Drawn'
import { Grid } from '@material-ui/core'
import ReadingFooter from './ReadingFooter'

export default function Advice() {
  const [drawn, setDrawn] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchCards() {
    const response = await fetch('https://rose-hunter-tarot-api.herokuapp.com/spreads/advice')
    const json = await response.json()

    setDrawn(json)
    setLoading(false)
  }

  useEffect(() => {
    fetchCards()
  }, [])

  return (
    <>
      {loading ? (
        "Reading the cards..."
      ) : (
          <div style={{ flexGrow: 1 }}>
            <Grid container justify="center">
              <Grid item>
                <Drawn card={drawn[0]} spread_pos="Recognition" spread_meaning="Something you've been doing well" />
              </Grid>
              <Grid item>
                <Drawn card={drawn[1]} spread_pos="Admonition" spread_meaning="Something you can improve" />
              </Grid>
              <Grid item>
                <Drawn card={drawn[2]} spread_pos="Advice" spread_meaning="What you should do" />
              </Grid>
            </Grid>
          </div>
        )}
      <ReadingFooter />
    </>
  )
}