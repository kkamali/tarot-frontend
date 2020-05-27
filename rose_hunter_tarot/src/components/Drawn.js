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
          {props.card.is_reversed
            ? <CardMedia component="img" image={require(`../../public/${props.card.img}`)} style={{ transform: "rotate(180deg)" }} />
            : <CardMedia component="img" image={require(`../../public/${props.card.img}`)} />
          }
          <p>mouse over for meaning</p>
        </Card>
      </FrontSide>
      <BackSide>
        <CardContent>
          <h2>{props.spread_pos}</h2>
          <h4>{props.spread_meaning}</h4>
          {props.card.is_reversed
            ? <p><em>Reversed: </em>{props.card.reversed}</p>
            : <p><em>Upright: </em>{props.card.upright}</p>
          }
        </CardContent>
      </BackSide>
    </Flippy >
  )
}