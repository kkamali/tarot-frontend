import React from 'react'
import { makeStyles, Card, CardMedia, CardContent } from '@material-ui/core'
import Flippy, { FrontSide, BackSide } from 'react-flippy'

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 300
  },
}))

export default function TarotCard(props) {
  const classes = useStyles();
  return (
    <Flippy flipOnHover={true} flipDirection="horizontal" style={{ width: '300px' }}>
      <FrontSide>
        <Card className={classes.root}>
          <CardMedia component="img" image={require(`../../public/${props.img_link}`)} />
        </Card>
      </FrontSide>
      <BackSide>
        <CardContent>
          <h1>{props.name}</h1>
          <p>
            <em>Upright: </em>{props.upright}
          </p>
          <p>
            <em>Reversed: </em>{props.reversed}
          </p>
        </CardContent>
      </BackSide>
    </Flippy>
  )
}