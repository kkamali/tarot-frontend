import React, { useState, useEffect } from 'react'
import Drawn from './Drawn'
import { Grid } from '@material-ui/core'

export default function Pathways() {
  const [drawn, setDrawn] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchCards() {
    const response = await fetch('http://localhost:3000/spreads/pathways')
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

          </Grid>
        )}
    </>
  )
}