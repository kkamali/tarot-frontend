import React from 'react'
import { Card, CardMedia, CardContent } from '@material-ui/core'
import Flippy, { FrontSide, BackSide } from 'react-flippy'

const styles = {
  root: {
    maxWidth: 300
  }
}

export default function Drawn(props) {
  return (
    <Flippy flipOnHover={true} flipDirection="horizontal" style={{ width: '300px' }}>
      <FrontSide>
        <Card style={styles.root}>
          <CardMedia component="img" image={require(`../../public/${props.card.img}`)} />
          <p>mouse over for meaning</p>
        </Card>
      </FrontSide>
      <BackSide>
        <CardContent>
          <h2>{props.spread_pos}</h2>
          <h4>{props.spread_meaning}</h4>
          <p>{props.card.upright}</p>
        </CardContent>
      </BackSide>
    </Flippy >
  )
}