import React, { useState, useEffect } from 'react'
import Drawn from './Drawn'
import { Grid } from '@material-ui/core'

export default function Pathways() {
  const [drawn, setDrawn] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchCards() {
    const response = await fetch('https://rose-hunter-tarot-api.herokuapp.com/spreads/pathways')
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
          <Grid container justify="center">
            <Grid container justify="center">
              <Grid item>
                <Drawn card={drawn[0]} spread_pos="Currently" spread_meaning="The path you're on now" />
              </Grid>
              <Grid item>
                <Drawn card={drawn[1]} spread_pos="Benefits" spread_meaning="Upsides to staying the course" />
              </Grid>
              <Grid item>
                <Drawn card={drawn[2]} spread_pos="Drawbacks" spread_meaning="Disadvantages to staying the course" />
              </Grid>
              <Grid item>
                <Drawn card={drawn[3]} spread_pos="Outcome" spread_meaning="Eventual result of staying the course" />
              </Grid>
            </Grid>
            <Grid container justify="center">
              <Grid item>
                <Drawn card={drawn[4]} spread_meaning="The path you could choose" spread_pos="Change" />
              </Grid>
              <Grid item>
                <Drawn card={drawn[5]} spread_pos="Benefits" spread_meaning="Upsides to changing your course" />
              </Grid>
              <Grid item>
                <Drawn card={drawn[6]} spread_pos="Disadvantages to changing your course" />
              </Grid>
              <Grid item>
                <Drawn card={drawn[7]} spread_meaning="Eventual result of changing your course" />
              </Grid>
            </Grid>
          </Grid>
        )}
    </>
  )
}