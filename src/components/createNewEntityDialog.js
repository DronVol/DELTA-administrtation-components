import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import withStyles from "@material-ui/core/es/styles/withStyles";

class CreateNewEntityDialog extends Component {

    state = {
        id: String(Math.random()).substr(2, 6),
        name: "",
        techName: (this.props.entity === "role") ? "" : "...",
        error: false

    }

    handleText = (entity, e) => {
        const value = (entity === "id" && e.target.value.length === 0) ? String(Math.random()).substr(2, 6) : e.target.value;
        this.setState({[entity]: value});
    }

    checkData = () => {
        if ((this.props.entity === "role" && this.state.techName === "") || this.state.name === "") this.setState({error: true});
        else this.props.acceptCallback({[this.props.entity]: {name: this.state.name, id: this.state.id, ...(this.props.entity === "role") ? {techName: this.state.techName} : {}}});
        console.log("data checked");
    }

    render(){
        const { classes } = this.props;
        const props = this.props;
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
                        { (props.entity === "role") ?
                            "Введите название роли, техническое название и, опционально, id" 
                            :
                            "Введите название роли и, опционально, id"
                        }
                    </DialogContentText>
                    <TextField
                        id = "outlined-textarea"
                        label = "Название"
                        placeholder = ""
                        className = { classes.textField }
                        margin = "normal"
                        variant = "outlined"
                        fullWidth
                        classes = {{root: classes.textFieldRoot}}
                        value = { this.state.name }
                        onChange={(e) => this.handleText("name", e)}
                        error = { this.state.error && this.state.name === "" }
                    />
                    { props.entity === "role" ?
                        <TextField
                            id = "outlined-textarea"
                            label = "Техническое название"
                            placeholder = ""
                            className = { classes.textField }
                            margin = "normal"
                            variant = "outlined"
                            fullWidth
                            classes = {{root: classes.textFieldRoot}}
                            value = { this.state.techName }
                            onChange={(e) => this.handleText("techName", e)}
                            error = { this.state.error && this.state.techName === "" }
                        />
                        : null
                    }
                    <TextField
                        id = "outlined-textarea"
                        label = "ID"
                        placeholder = ""
                        className = { classes.textField }
                        margin = "normal"
                        variant = "outlined"
                        fullWidth
                        classes = {{root: classes.textFieldRoot}}
                        value = { this.state.id }
                        onChange={(e) => this.handleText("id", e)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick = { () => {props.closeCallback();} } color = "primary">
                        Отмена
                    </Button>
                    <Button onClick = { this.checkData }>
                        Отправить
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

const style = theme => ({
    textField:{
        display: "block"
    },
    textFieldRoot: {
        fontFamily: "'Roboto Condensed', sans-serif!important",
        fontWeight: "300",
        '& textarea': {
            color: theme.text,
            fontFamily: "'Roboto Condensed', sans-serif!important",
            fontWeight: "300",
        },
        '& input': {
            color: theme.text,
            fontFamily: "'Roboto Condensed', sans-serif!important",
            fontWeight: "300",
        },
        '& label': {
            color: theme.text,
            font: "inherit"
        },
        '&:hover label': {
            color: theme.textHighlight
        },
        '& label.Mui-focused': {
          color: theme.textHighlight,
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: theme.text,
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: theme.text,
          },
          '&:hover fieldset': {
            borderColor: theme.textHighlight,
          },
          '&.Mui-focused fieldset': {
            borderColor: theme.textHighlight,
          },
        },
      },
})

export default withStyles(style)(CreateNewEntityDialog)

