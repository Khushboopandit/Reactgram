import React, { Component } from 'react';
import Cards from './cards'
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles  = theme => ({
      root: {
          width: '100%',
          maxWidth: '100%',
      },
      heading: {
        textAlign: 'center',
        fontFamily: "'Berkshire Swash', cursive",
        color: '#2e3c87',
        fontSize:"102px",
        paddingBottom: "30px",
        [theme.breakpoints.down('md')]:{
          fontSize:"76px",
        },
        [theme.breakpoints.down('sm')]:{
          fontSize:"40px",
        },
        [theme.breakpoints.down('xs')]:{
          fontSize:"34px",
      },
      },
  });


class Main extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Typography className={classes.heading}>Reactgram</Typography>
          </Grid>
        </Grid>
        <Cards/>
      </div>
    )
  }
};


Main.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Main);
