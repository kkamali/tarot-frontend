import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default function ReadingFooter() {
  return (
    <div>
      <Link to="/spreads">
        <Button style={{ margin: 20 }} variant="contained" color="primary">
          Get another reading
        </Button>
      </Link>
      <Link to="/deck">
        <Button style={{ margin: 20 }} variant="contained" color="primary">
          See all the cards
        </Button>
      </Link>
    </div>
  )
}