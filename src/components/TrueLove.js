import React, { useState, useEffect } from 'react'
import Drawn from './Drawn'
import { Grid } from '@material-ui/core'
import ReadingFooter from './ReadingFooter'

export default function TrueLove() {
  const [drawn, setDrawn] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchCards() {
    const response = await fetch('https://rose-hunter-tarot-api.herokuapp.com/spreads/love')
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
        "Reading in progress..."
      ) : (
          <div>
            <Grid container justify="center">
              <Grid container justify="center">
                <Grid item>
                  <Drawn card={drawn[0]} spread_pos="You" spread_meaning="Your feelings and expectations" />
                </Grid>
                <Grid item>
                  <Drawn card={drawn[1]} spread_pos="Partner(s)" spread_meaning="Your partner('s/s') feelings and expectations" />
                </Grid>
              </Grid>
              <Grid container justify="center">
                <Grid item>
                  <Drawn card={drawn[2]} spread_pos="Connection" spread_meaning="What brings you together" />
                </Grid>
                <Grid item>
                  <Drawn card={drawn[3]} spread_pos="Strengths" spread_meaning="What maintains your relationship" />
                </Grid>
                <Grid item>
                  <Drawn card={drawn[4]} spread_pos="Weaknesses" spread_meaning="Issues that need exploration" />
                </Grid>
              </Grid>
              <Grid container justify="center">
                <Grid item>
                  <Drawn card={drawn[5]} spread_pos="True Love" spread_meaning="The future of your relationship" />
                </Grid>
              </Grid>
            </Grid>
            <ReadingFooter />
          </div>
        )}
    </>
  )
}