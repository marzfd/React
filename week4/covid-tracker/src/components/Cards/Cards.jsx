import React from 'react';
import styles from './Cards.module.css';
import cx from 'classnames'
import { Card, CardContent, Typography, Grid  } from '@material-ui/core';
import CountUp from 'react-countup';

const Cards = ( {data: { confirmed, recovered, deaths, lastUpdate }}) => {

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justifyContent='center'>
        <Grid item element={Card} xs={10} md={3} className={cx(styles.box, styles.card, styles.infected)}>
          <CardContent>
            <Typography variant='h5' color='textSecondary' gutterBottom>Infected</Typography>
            <Typography varian='h5'>
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toLocaleString('en-US', {year:'numeric', month:'short', day: 'numeric', weekday:'short'})}</Typography>
            <Typography varian='body2'>Number of active cases of Covid-19</Typography>
          </CardContent>
        </Grid>
        <Grid item element={Card} xs={10} md={3} className={cx(styles.box, styles.card, styles.recovered)}>
          <CardContent>
            <Typography variant='h5' color='textSecondary' gutterBottom>Recovered</Typography>
            <Typography varian='h5'>
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toLocaleString('en-US', {year:'numeric', month:'short', day: 'numeric', weekday:'short', hours: true})}</Typography>
            <Typography varian='body2'>Number of recoveries from Covid-19</Typography>
          </CardContent>
        </Grid>
        <Grid item element={Card} xs={10} md={3} className={cx(styles.box, styles.card, styles.deaths)}>
          <CardContent>
            <Typography variant='h5' color='textSecondary' gutterBottom>Deaths</Typography>
            <Typography varian='h5'>
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toLocaleString('en-US', {year:'numeric', month:'short', day: 'numeric', weekday:'short', hours: true})}</Typography>
            <Typography varian='body2'>Number of deaths caused by Covid-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards;