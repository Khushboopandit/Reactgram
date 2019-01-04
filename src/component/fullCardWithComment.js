import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Clear from '@material-ui/icons/Clear';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Chat from '@material-ui/icons/QuestionAnswer';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

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
        width: "55%",
        height: "74%",
        overflow: "auto",
        boxSizing: "border-box",
        position: "relative",
        transition: "all 5s ease-in-out",
        [theme.breakpoints.down('md')]:{
            width: "70%",
          },
          [theme.breakpoints.down('sm')]:{
            width: "86%",
          },
          [theme.breakpoints.down('xs')]:{
            width: "90%",
          },
      },
      
      clearDeleteBox: {
        float: "right",
        marginTop: "-16px",
        marginRight: "-15px",
      },
      card: {
        maxWidth: 568,
        float: "left",
        width: "70%",
        boxShadow: "none",
        [theme.breakpoints.down('md')]:{
          maxWidth: 960,
          float: "none",
        },
        [theme.breakpoints.down('sm')]:{
          float: "none",
          width: "100%",
        },
        [theme.breakpoints.down('xs')]:{
          float: "none",
          width: "100%",
        },

      },
    
      media: {
        height: 584,
        [theme.breakpoints.down('md')]:{
          height: 724,
        },
        [theme.breakpoints.down('sm')]:{
          height: 686,
        },
        [theme.breakpoints.down('xs')]:{
          height: 336,
        },
      },
    
      button: {
        borderRadius: "2px",
        padding: "3% 20%",
        fontSize: "18px",
        color: "#3c5baf",
      },
    
      actions: {
        justifyContent: "center"
      },
    
      chatBtn: {
        borderRadius: "2px",
        padding: "3% 20%",
        left: "2%",
        color: "#3c5baf",
      },
    
      favoriteIcon: {
        fontSize: "20px",
      },
      listOfComment: {
        float: "right",
        width: "30%",
        marginTop: "44px",  
        [theme.breakpoints.down('md')]:{
          float: "none",
          width: "100%",
        },
        [theme.breakpoints.down('sm')]:{
          float: "none",
          width: "100%",
        },
        [theme.breakpoints.down('xs')]:{
          float: "none",
          width: "100%",
        },
      }
})


class PopForCommentBtn extends React.Component {
    state = {

    }

    render(){
        const {classes,i} = this.props
        return(
            <div className = {classes.overly} >
                <div className = {classes.popup} >
                    <Clear className={classes.clearDeleteBox} onClick = {()=>this.props.dontShowCommentBox()}/>
                    <Card className = {classes.card}>
                        <CardMedia 
                            className = {classes.media}
                            image={"images/"+this.props.data.display_src}
                            />
                            <Typography component="p">
                            {this.props.data.caption}
                            </Typography> 
                        <CardActions className={classes.actions}>
                        <Button variant="outlined" component="span" className={classes.button}>
                            <FavoriteIcon className={classes.favoriteIcon}/> 
                            {this.props.data.likes}
                        </Button>
                        <Button variant="outlined" component="span" className={classes.chatBtn}>
                            <Chat/>
                        </Button> 
                        </CardActions>
                    </Card>
                    <div className={classes.listOfComment}>
                    {
                    this.props.comments.map((comment,i)=>{
                      return(<List key = {i}>
                        <ListItem button>
                          <ListItemText primary={comment.user} secondary={comment.user} />
                        </ListItem>
                        <Divider/>
                      </List>)
                    })}
                    </div>
                </div>
            </div>
        )
    }
}

PopForCommentBtn.prototypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PopForCommentBtn);
