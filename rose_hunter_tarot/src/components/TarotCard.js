import React from 'react'
import { makeStyles, Card, CardMedia, CardContent } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 300
  },
}))

export default function TarotCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia component="img" image={require(`../../public/${props.img}`)} />
      <CardContent>
        <h1>{props.name}</h1>
        <p>
          <em>Upright: </em>{props.upright}
        </p>
        <p>
          <em>Reversed: </em>{props.reversed}
        </p>
      </CardContent>
    </Card>
  )
}