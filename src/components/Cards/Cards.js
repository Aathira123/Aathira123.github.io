import React from 'react'
import {Card,CardContent,Typography,Grid} from '@material-ui/core'
import styles from './Cards.module.css' ;
import CountUp from 'react-countup';
import cx from 'classnames';
const Cards=({data:{confirmed,recovered,deaths,lastUpdate}})=> {
 
     if(!confirmed){
        return 'Loading..'
     }
    return (
        <div className={styles.container}>
           
            
            <Grid container spacing={2}>
                
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                 <CardContent >
                     <Typography color="textSecondary" gutterBottom>Infected</Typography>
                     <CountUp
                         start={0}
                         end={confirmed.value}
                         duration={2.5}
                         separator=","/>
                     <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                     <Typography variant="body2" className={styles.active}>No of Active Cases</Typography>
                 </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovery)}>
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                     <CountUp
                         start={0}
                         end={recovered.value}
                         duration={2.5}
                         separator=","/>
                      <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                     <Typography variant="body2" className={styles.active}>No of recoveries</Typography>
                 </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.dead)}>
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                     <CountUp
                         start={0}
                         end={deaths.value}
                         duration={2.5}
                         separator=","/>
                     <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                     <Typography variant="body2" className={styles.active}>No of deaths</Typography>
                 </CardContent>
                </Grid>

            </Grid>
         
        </div>
    )
}

export default Cards
