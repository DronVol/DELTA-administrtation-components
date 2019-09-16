import React from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function DialogWindow(props){
    return (
        <Dialog
            open = { props.isOpen }
            onClose = { props.closeCallback }
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id = "alert-dialog-title">{"Подтверждение публикации новости"}</DialogTitle>
            <DialogContent>
            <DialogContentText id = "alert-dialog-description">
                { props.message }
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick = { props.closeCallback } color = "primary">
                Отмена
            </Button>
            <Button onClick = { props.acceptCallback }>
                Принять
            </Button>
            </DialogActions>
        </Dialog>
    );
}