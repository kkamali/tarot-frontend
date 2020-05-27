import React from 'react'
import { makeStyles, Card, CardContent, Grid, Container, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    maxWidth: 300
  }
})

export default function Spreads() {
  const classes = useStyles()
  return (
    <Container>
      <Link to="/deck">
        <Button style={{ margin: 20 }} variant="contained" color="primary">
          See all the cards
        </Button>
      </Link>
      <h1>Here are the spreads I know!</h1>
      <Grid container justify="center" spacing={2}>
        <Grid item>
          <Card className={classes.root}>
            <CardContent>
              <h2>Classic Dragonfly</h2>
              <p>
                This 9-card spread is the traditional choice for Rosehunter decks. It is a multi-faceted, general-use spread that digs into the details of a situation.
              </p>
              <Link to="/dragonfly">
                <Button>
                  Read for me!
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root}>
            <CardContent>
              <h2>Aunty's Advice</h2>
              <p>
                This 3-card spread is perfect for when you're in a rush and just need a quick check-in! Much like advice from a stern but loving aunt, this spread is concise, insightful, and versatile!
              </p>
              <Link to="/advice">
                <Button>
                  Read for me!
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root}>
            <CardContent>
              <h2>True Love</h2>
              <p>
                This 6-card spread explores the strengths, weaknesses, and challenges of your relationships. It was designed for use in romantic contexts, but it can also be used for non-romantic relationships!
              </p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root}>
            <CardContent>
              <h2>Dreaming</h2>
              <p>
                As the title implies, this 5-card spread helps demystify your dreams and find out what your subconsious is trying to tell you!
              </p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root}>
            <CardContent>
              <h2>Pathways</h2>
              <p>
                As the title implies, this 5-card spread helps demystify your dreams and find out what your subconsious is trying to tell you!
              </p>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}