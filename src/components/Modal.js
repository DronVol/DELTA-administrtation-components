import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import React from "react";
import Slide from "@material-ui/core/Slide/Slide";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import withStyles from "@material-ui/core/es/styles/withStyles";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

function Modal(props) {

  //Получить classes
  const {classes} = props;

  return (
    <Dialog
      classes={{
        root: classes.root,
        scrollBody: classes.modalRoot,
        container: classes.modalRoot,
        paper: classes.paper
      }}
      open={props.open}
      TransitionComponent={Transition}
      keepMounted
      onClose={props.close}
    >
      <DialogTitle classes={{root: classes.title}}>
        {props.title}
      </DialogTitle>
      <DialogContent style={{padding: 0}}>
        <DialogContentText  classes={{root: classes.text}} >
          {props.text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <div className={classes.buttons}>
          {props.children}
        </div>
      </DialogActions>
    </Dialog>
  )
}

const styles = theme => ({
  modalRoot: {
    backgroundColor: "transparent"
  },
  root: {
    "& > div:first-child": {
      backgroundColor: theme.menuBackground
    }
  },
  paper: {
    background: "#2F3B52",
    boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.5)",
    borderRadius: 8
  },
  title: {
    padding: "40px 40px 0 40px",
    "& > h6": {
      color: theme.textColor,
      fontSize: 18,
      fontWeight: 500,
      lineHeight: "21px"
    }
  },
  text: {
    color: theme.textColor,
    fontSize: 16,
    marginTop: 0,
    fontWeight: 300,
    lineHeight: "19px",
    padding: 40,
    "& > p": {
      color: theme.textColor,
      fontSize: 16,
      marginTop: 15,
      fontWeight: 300,
      lineHeight: "19px",
      padding: 0,
    }
  },
  modalBtn: {
    width: 86,
    height: 36,
    borderRadius: "50px",
    background: theme.control,
    color: theme.layer,
    border: 0,
    marginRight: 15,
    marginBottom: 10,
    fontSize: 14,
    transition: "all 300ms ease-in-out",
    fontWeight: 400,
    "&:hover": {
      background: theme.control,
    }
  },
  buttons: {
    padding: 15,
    display: "flex"
  }
});

export default withStyles(styles)(Modal);