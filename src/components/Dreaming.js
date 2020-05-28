import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import ReadingFooter from './ReadingFooter'

export default function Dreaming() {
  const [drawn, setDrawn] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchCards() {
    const response = await fetch('https://rose-hunter-tarot-api.herokuapp.com/spreads/dreaming')
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
          <div>
            <Grid container justify="center">
              <Grid container justify="center">
                <Grid item>
                  <Drawn card={drawn[1]} spread_pos="Theme" spread_meaning="What is this dream about?" />
                </Grid>
                <Grid item>
                  <Drawn card={drawn[2]} spread_pos="Message" spread_meaning="What is this dream telling you?" />
                </Grid>
                <Grid item>
                  <Drawn card={drawn[3]} spread_pos="Waking Life" spread_meaning="What's prevented you from addressing this before?" />
                </Grid>
                <Grid item>
                  <Drawn card={drawn[4]} spread_pos="Lesson" spread_meaning="How can you address it now?" />
                </Grid>
              </Grid>
              <Grid container justify="center">
                <Grid item>
                  <Drawn card={drawn[0]} spread_pos="Event" spread_meaning="What event inspired this dream?" />
                </Grid>
              </Grid>
            </Grid>
            <ReadingFooter />
          </div>
        )
      }
    </>
  )
}