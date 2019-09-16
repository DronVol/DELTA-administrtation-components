import React, { Component } from "react";
import withStyles from "@material-ui/core/es/styles/withStyles";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import ruLocale from "date-fns/locale/ru";
import DateFnsUtils from "@date-io/date-fns";
import DialogWindow from "./dialogWindow";

class MessageAddingWindow extends Component {

    state = {
        time: null,
        title: "",
        text: "",
        openSubmitDialog: false,
        error: null,
        openClearDialog: false
    }

    submitMessage = () => {
        console.log("Submit message");
        console.log(this.state);
        if (this.state.text === "" || this.state.title === "") {
            console.log("error");
            this.setState({error: "textfields"});
            return;
        }
        const message = {
            time: (this.state.time === null) ? new Date() : this.state.time,
            title: this.state.title,
            text: this.state.text
        };
        console.log(message);
        this.setState({time: null, title: "", text: "", error: null});
        return;
    };

    handleDateChange = (value) => {
        console.log(value);
        this.setState({time: value});
    };

    handleSwitchDialog = (type) => {
        this.setState({["open" + type + "Dialog"]: !this.state["open" + type + "Dialog"]});
    };

    handleText = (param, e) => {
        if(e){
            this.setState({[param]: e.target.value})
        }
    }

    handleClearAll = () => {
        this.setState({
            time: null,
            title: "",
            text: "",
            openSubmitDialog: false,
            error: null
        });
    };

    handleKeyPress = e => {
        if (e.key === 'Enter') {
            this.handleSwitchDialog("Submit");
        }
    }

    render () {
        const { classes } = this.props;
        return (
            <div className = { classes.mainWindow }>
                <div className = { classes.headerRow }>
                    <div className = { classes.mainWindowTitle }>{"Добавить новость платформы"}</div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils} locale = {ruLocale}>
                        <DialogWindow 
                            isOpen = { this.state.openSubmitDialog }
                            closeCallback = { () => this.handleSwitchDialog("Submit") }
                            acceptCallback = { () => { this.submitMessage(); this.handleSwitchDialog("Submit"); } }
                            message = {
                                "Вы действительно хотите опубликовать новость? " + 
                                ((this.state.time === null) ? "Сообщение будет опубликовано с текущей датой и временем." : "")
                            }
                        />
                        <DialogWindow 
                            isOpen = { this.state.openClearDialog }
                            closeCallback = { () => this.handleSwitchDialog("Clear") }
                            acceptCallback = { () => { this.handleClearAll(); this.handleSwitchDialog("Clear"); } }
                            message = {
                                "Вы действительно хотите очистить все поля?"
                            }
                        />
                        <DateTimePicker
                            label="Дата публикации"
                            inputVariant="outlined"
                            value={this.state.time}
                            ampm={false}
                            onChange={this.handleDateChange}
                            classes={{root: `${classes.textFieldRoot} ${classes.dateFieldRoot}`}}
                        />
                    </MuiPickersUtilsProvider>
                </div>
                <TextField
                    id = "outlined-textarea"
                    label = "Название новости"
                    placeholder = ""
                    className = { classes.textField }
                    margin = "normal"
                    variant = "outlined"
                    fullWidth
                    classes = {{root: classes.textFieldRoot}}
                    value = { this.state.title }
                    onChange={(e) => this.handleText("title", e)}
                    error = { this.state.error === "textfields" && this.state.title === "" }
                />
                <TextField
                    id="outlined-textarea"
                    label="Текст"
                    placeholder=""
                    multiline
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    rowsMax="10"
                    classes = {{root: classes.textFieldRoot}}
                    value = { this.state.text }
                    onChange={(e) => this.handleText("text", e)}
                    error = { this.state.error === "textfields" && this.state.text === "" }
                    inputProps = {{onKeyPress: this.handleKeyPress}}
                />
                <div className = { classes.bottomButtonPanel}>
                    <Button
                        variant="contained"
                        className={classes.sendButton}
                        classes = {{ label: classes.sendButtonLabel, root: classes.sendButtonRoot }}
                        onClick = {() => this.handleSwitchDialog("Submit")}
                    >
                        Отправить
                    </Button>
                    <Button
                        variant="contained"
                        className={classes.sendButton}
                        classes = {{ label: classes.sendButtonLabel, root: classes.sendButtonRoot }}
                        onClick = {() => this.handleSwitchDialog("Clear")}
                    >
                        Очистить
                    </Button>
                </div>
            </div>
        )
    }
}

const style = theme => ({
    mainWindow: {
        padding: 30,
        margin: "auto",
        width: 700,
        height: 500,
        boxShadow: ['0px 1px 3px 0px rgba(0,0,0,0.2)', '0px 1px 1px 0px rgba(0,0,0,0.14)', '0px 2px 1px -1px rgba(0,0,0,0.12)'],
        borderRadius: 8,
        background: theme.modalBackground,
        color: theme.text,
        position: "relative"
    },
    mainWindowTitle: {    
        fontSize: 18,
        fontWeight: "300",
        lineHeight: "56px"
    },
    bottomButtonPanel: {
        position: "absolute",
        height: 40,
        bottom: 30,
        left: 30,
        right: 0,
        display: "flex"
    },
    sendButton: {
        marginRight: 20
    },
    sendButtonLabel: {
        fontFamily: "'Roboto Condensed', sans-serif",
        color: theme.text,
        fontWeight: "300",
        fonrSize: 18
    },
    sendButtonRoot:{
        background: theme.buttonBackground,
        "&:hover":{
            background: theme.modalBackground
        }
    },
    textField:{
        display: "block"
    },
    dateFieldRoot: {
        right: 0,
        position: "absolute"
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
    textFieldLabel:{
        color: theme.text,
    },
    headerRow:{
        display: "flex",
        position: "relative"
    },
})

export default withStyles(style)(MessageAddingWindow)