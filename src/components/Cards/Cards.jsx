import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';
const Cards = ({data : {confirmed, recovered, deaths, lastUpdate}}) => {
     if (!confirmed){
         return "Loading.."
     }
     recoverTag = "Recovered"
     if (recovered.value == 0 ) {
     recoverTag = "Invalid API - Recovered"
     }
          
     
    return (
        
        <div className = {styles.container}>
            <Grid container spacing= {3} justify = "center">
                <Grid item component={Card} xs={12} md={3} className = {cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5"> 
                            <CountUp start = {confirmed.value-5000} end ={confirmed.value} duration={2} separator=","/>
                        </Typography>
                        <Typography color = "textSecondary"> {new Date(lastUpdate).toString().slice(0,15) }</Typography>
                        <Typography color = "textSecondary"> {new Date(lastUpdate).toString().slice(15,28) }</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3}  className = {cx(styles.card, styles.recovered)} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>{recoverTag}</Typography>
                        <Typography variant="h5"> 
                           {if (recovered.value==0) { 'Invalid API data' } } <CountUp start = {recovered.value-5000} end ={recovered.value} duration={2} separator=","/>
                        </Typography>
                        <Typography color = "textSecondary"> {new Date(lastUpdate).toString().slice(0,15) }</Typography>
                        <Typography color = "textSecondary"> {new Date(lastUpdate).toString().slice(15,28) }</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3}  className = {cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5"> 
                            <CountUp start = {deaths.value-5000} end ={deaths.value} duration={2} separator=","/>
                        </Typography>
                        <Typography color = "textSecondary"> {new Date(lastUpdate).toString().slice(0,15) }</Typography>
                        <Typography color = "textSecondary"> {new Date(lastUpdate).toString().slice(15,28) }</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}

export default Cards;
