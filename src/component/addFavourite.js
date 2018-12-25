import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';

const styles = theme => ({
    favoriteIcon: {
        width: "100%",
        height: "626px",
        color: "#8b9cce",
      },
      overly: {
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: "rgb(0,0,0,0.7)",
        transition: "all 0.3s ease-in",
      },
})


class PopLikeButton extends React.Component {


    render(){
        const {classes} = this.props
        return(
            <div className = {classes.overly}>
                <FavoriteIcon className={classes.favoriteIcon}/>
            </div>
        )
    }
}

PopLikeButton.prototypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PopLikeButton);