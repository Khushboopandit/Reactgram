import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import comments from '../data/comments'
import Typography from '@material-ui/core/Typography';
import Clear from '@material-ui/icons/Clear';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
      overly: {
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: "rgb(0,0,0,0.7)",
        transition: "opacity 500ms",
      },
      popup: {
        margin: "70px auto",
        padding: "20px",
        background: "#fff",
        borderRadius: "5px",
        width: "36%",
        position: "relative",
        transition: "all 5s ease-in-out",
        [theme.breakpoints.down('md')]:{
            width: "70%",
          },
          [theme.breakpoints.down('sm')]:{
            width: "80%",
          },
          [theme.breakpoints.down('xs')]:{
            width: "80%",
          },
      },
      userName: {
          color: "#10106f",
          fontSize: "20px",
          fontWeight: "bold",
          paddingTop: "6px",
      },
      comments: {
        color: "#091c54",
        paddingBottom: "6px",
      },
      clearDeleteBox: {
        float: "right",
        marginTop: "-16px",
        marginRight: "-15px",
      },
      actions: {
        justifyContent: "center"
      },
      textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
      },
})


class PopForCommentBtn extends React.Component {
    state = {
        user_name: [],
        send_comment: [],

    }
    render(){
        const {classes} = this.props
        const {user_name,send_comment} = this.state
        return(
            <div className = {classes.overly} >
                <Clear/>
                <div className = {classes.popup} >
                    <Clear className={classes.clearDeleteBox} onClick = {()=>this.props.dontShowCommentBox()}/>
                    <div>
                        <Typography className={classes.userName}>
                            {/* {this.props.comment.user} */}
                        </Typography>
                        <Typography className={classes.comments}>
                            {/* {this.props.comment.text} */}
                        </Typography>
                    </div>
                    <CardActions className={classes.actions}>
                        <TextField
                            id="outlined-password-input"
                            label="User"
                            value= {user_name}
                            className={classes.textField}
                            type="text"
                            autoComplete="current-password"
                            margin="normal"
                            variant="outlined"
                            />
                            <TextField
                            id="outlined-password-input"
                            label="comment"
                            value= {send_comment}
                            className={classes.textField}
                            type="text"
                            autoComplete="current-password"
                            margin="normal"
                            variant="outlined"
                            />
                    
                    </CardActions>
                </div>
            </div>
        )
    }
}

PopForCommentBtn.prototypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PopForCommentBtn);
