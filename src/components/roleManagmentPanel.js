import React, { Component } from "react";
import withStyles from "@material-ui/core/es/styles/withStyles";
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import DialogWindow from "./dialogWindow";
import AddIcon from '@material-ui/icons/Add';
import CreateNewEntityDialog from "./createNewEntityDialog";

class RoleManagmentPanel extends Component {

    constructor(props) {
        super(props);
        const data = this.fetchData();
        this.state = {
            roles: data.roles,
            authorities: data.authorities,
            currentRole: 0,
            newRoleAuthorities: data.roles[0].authorities,
            change: "",
            isDialogOpen: false,
            mountAnimation: false,
            animatedRoleKey: "",
            triggerNewRoleAnimation: false,
            animatedAuthorityKey: "",
            triggerNewAuthorityAnimation: false,
            newEntityDialogOpen: false,
            newEntity: ""
        };
    }

    fetchData = () => {
        return {
            authorities: [
                { // Полномочия
                    id: "000000",
                    name: "Открвыть панель администратора"
                },
                {
                    id: "000001",
                    name: "Доступ на изменения в панели администратора"
                },
                {
                    id: "000002",
                    name: "Просмотр виджетов"
                },
                {
                    id: "000003",
                    name: "Публикация новостей"
                },
                {
                    id: "000004",
                    name: "Внесение изменений в ролевую модель"
                }
            ],
            roles: [
                {
                    id: "000000",
                    name: "Администратор",
                    techName: "admin",
                    authorities: [
                        "000000",
                        "000001",
                        "000002",
                        "000003",
                        "000004",
                    ]
                },
                {
                    id: "000001",
                    name: "Редактор новостей",
                    techName: "novostnik_govnoed",
                    authorities: [
                        "000000",
                        "000003",
                    ]
                }
            ]
        }
    };

    renderRoles = () => {
        const {classes} = this.props;
        return this.state.roles.map((value, index) => {
            return (
                <div 
                    className = {
                        `${classes.role} ${(index === this.state.currentRole) ? classes.selectedRole : ""} ` + 
                        `${this.state.animatedRoleKey === "role" + index ? classes.animateRoleSwitch : ""}`
                    } 
                    key={"role" + index} 
                    onClick={() => this.handleRoleClick(index)}
                    onAnimationEnd={()=>{console.log("animation end");}}
                >
                    <span className = {classes.roleId}>{"role id: " + value.id}</span>
                    <span className = {classes.roleTechName}>{"role technical name: " + value.techName}</span>
                    <span className = {classes.roleTitle}>{value.name}</span>
                </div>
            )
        });
    }

    renderNewRole = () => {
        const {classes} = this.props;
        return (
            <div 
                className = {`${classes.newRole} ${this.state.triggerNewRoleAnimation ? classes.animateNewRoleClick : ""}`} 
                key={"newRole"} 
                onClick={() => {this.handleNewRoleClick();}}
                onAnimationEnd = { () => this.setState({triggerNewRoleAnimation: false})}
            >
                <AddIcon classes={{root: classes.iconColor}}/>
                <span className = {classes.newRoleTitle}>{"Add new role"}</span>
            </div>
            
        )
    }

    renderAuthorities = () => {
        const {classes} = this.props;
        const { roles, currentRole } = this.state;
        return this.state.authorities.map((value, index) => {
            return (
                <div 
                    className = {`${classes.authority} ${this.state.animatedAuthorityKey === "authority" + index ? classes.animateAuthorityClick : ""}`} 
                    key={"authority" + index} 
                    onClick={() => {this.handleCheckboxClick(value.id); this.setState({animatedAuthorityKey: "authority" + index});}}
                    onAnimationEnd = { () => this.setState({animatedAuthorityKey: ""})}
                >
                    <span className = {classes.authorityId}>{"Authority id: " + value.id}</span>
                    <div className={classes.authorityRoleWrapper}>
                        <Checkbox 
                        checked={ (this.state.change === "checkbox") ? this.state.newRoleAuthorities.includes(value.id) : roles[currentRole].authorities.includes(value.id)}
                        onChange={() => this.handleCheckboxClick(value.id)}
                         />
                        <span className = {classes.authorityTitle}>{value.name}</span>
                    </div>
                </div>
            );
        });
    }

    renderNewAuthority = () => {
        const {classes} = this.props;
        return (
            <div 
            className = {`${classes.newAuthority} ${this.state.triggerNewAuthorityAnimation ? classes.animateAuthorityClick : ""}`} 
            key={"newAuthority"} 
            onClick={() => {this.handleNewAuthorityClick(); }}
            onAnimationEnd = { () => this.setState({triggerNewAuthorityAnimation: false})}
            >
                <div className={classes.authorityRoleWrapper}>
                    <AddIcon classes={{root: classes.iconColor}}/>
                    <span className = {classes.newAuthorityTitle}>{"Add new authority"}</span>
                </div>
            </div>
        );
    }

    handleRoleClick = (index) => {
        console.log(index);
        console.log(this.state.currenRole);
        this.setState({currentRole: index, newRoleAuthorities: this.state.roles[index].authorities, change: "", ...((this.state.currentRole === index) ? {} : {animatedRoleKey: "role" + index})});
    }

    handleCheckboxClick = (id) => {
        let sameAuthorities = true;
        let newAuthorities = this.state.newRoleAuthorities;
        const oldAuthorities = this.state.roles[this.state.currentRole].authorities;
        if (newAuthorities.includes(id)) newAuthorities = newAuthorities.filter((value) => value !== id);
        else newAuthorities = [...newAuthorities, id];
        if (newAuthorities.length !== oldAuthorities.length) {
            sameAuthorities = false;
        }
        else {
            for(let value of newAuthorities) {
                if (!oldAuthorities.includes(value)) {
                    sameAuthorities = false;
                    break;
                }
            }
        }
        this.setState({change: (sameAuthorities) ? "" : "checkbox", newRoleAuthorities: newAuthorities});
    }

    submitData = (data) => {
        console.log(data);
        this.setState({change: "", newRoleAuthorities: this.state.roles[this.state.currentRole].authorities});
    }

    handleSwitchDialog = () => {
        this.setState({isDialogOpen: !this.state.isDialogOpen});
    }

    handleNewRoleClick = () => this.setState({triggerNewRoleAnimation: true, newEntity: "role", newEntityDialogOpen: true});

    handleNewAuthorityClick = () => this.setState({triggerNewAuthorityAnimation: true, newEntity: "authority", newEntityDialogOpen: true});

    triggerNewIconAnimation = () => {
    }

    render () {
        const { classes } = this.props;
        return (
            <div className = { classes.panelArea }>
                <DialogWindow 
                    isOpen = { this.state.isDialogOpen }
                    closeCallback = { this.handleSwitchDialog }
                    acceptCallback = { () => { this.submitData(); this.handleSwitchDialog(); } }
                    message = { 
                        (this.state.change === "checkbox") ? "Вы действительно хотите изменить роль?" : "Вы действительно хотите создать новую роль?"
                    }
                />
                <CreateNewEntityDialog
                    key = {this.state.newEntity}
                    entity = {this.state.newEntity}
                    isOpen = {this.state.newEntityDialogOpen}
                    closeCallback = {() => this.setState({newEntityDialogOpen: false, newEntity: ""})}
                    acceptCallback = {(data) => {this.submitData(data); this.setState({newEntityDialogOpen: false});}}
                />
                <div className = { classes.panel }>
                    <div className = { classes.rolesPanel } >
                        {[this.renderNewRole(), ...this.renderRoles()]}
                    </div>
                    <div className = { classes.authoritiesPanel } >
                        { [this.renderNewAuthority(), ...this.renderAuthorities()] }
                    </div>
                </div>
                <div className = { classes.footer } >
                    <Button
                        disabled={this.state.change===""}
                        variant="contained"
                        className={classes.sendButton}
                        classes = {{ label: classes.sendButtonLabel, root: classes.sendButtonRoot, disabled: classes.sendButtonDisabled }}
                        onClick = {this.handleSwitchDialog}
                    >
                        Отправить
                    </Button>
                    <Button
                        disabled={this.state.change===""}
                        variant="contained"
                        className={classes.sendButton}
                        classes = {{ label: classes.sendButtonLabel, root: classes.sendButtonRoot, disabled: classes.sendButtonDisabled}}
                        onClick = {this.submitData}
                    >
                        Отмена
                    </Button>
                    <span className={classes.changeMessage} style={{display: (this.state.change === "") ? "none" : ""}}>Изменена роль</span>
                </div>
            </div>
        )
    }
}

const style = theme => ({
    panelArea: {
        height: 700,
        position: "absolute",
        left: 100,
        right: 100,
        top: 0,
        background: theme.modalBackground,
        borderRadius: 5,
        padding: "0 30px 10px 30px"
    },
    panel: {
        height: "calc(100% - 45px)",
        width: "100%",
        display: "flex"
    },
    rolesPanel: {
        borderWidth: 2,
        borderRightWidth: 1,
        borderColor: theme.boundaryGrey,
        borderStyle: "solid",
        width: "50%",
        height: "100%",
        borderRadius: "5px 0 0 5px",
    },
    authoritiesPanel: {
        borderWidth: 2,
        borderLeftWidth: 1,
        borderColor: theme.boundaryGrey,
        borderStyle: "solid",
        width: "50%",
        height: "100%",
        borderRadius: "0 5px 5px 0",
        padding: 10
    },
    footer: {
        height: 30,
        width: "100%",
        display: "flex",
        marginTop: 15
    },
    selectedRole: {
        backgroundColor: theme.selectedBackground,
        borderColor: "rgba(0, 0, 0, 0)",
    },
    role:{
        padding: 30,
        width: "calc(100% - 10px)",
        borderColor: theme.boundaryGrey,
        borderStyle: "solid",
        borderWidth: 1,
        margin: 5,
        borderRadius: 5,
        "&:hover": {
            borderColor: "#ffbb00"
        },
        transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)"
    },
    newRole:{
        padding: 30,
        display: "flex",
        width: "calc(100% - 10px)",
        borderColor: theme.boundaryGrey,
        borderStyle: "solid",
        borderWidth: 1,
        margin: 5,
        borderRadius: 5,
        "&:hover": {
            borderColor: "#ffbb00"
        },
        transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)"
    },
    roleId:{
        color: theme.idColor,
        display: "block",
        fontSize: 12
    },
    roleTitle:{
        color: theme.text,
        display: "block",
        marginTop: 10
    },
    newRoleTitle:{
        color: "#aab0bd",
        display: "block",
        marginLeft: 10,
        lineHeight: "24px"
    },
    roleTechName:{
        color: theme.idColor,
        display: "block",
        fontSize: 12,
        marginTop: 5
    },
    authority:{
        padding: 10,
        width: "100%",
        borderRadius: 5,
        transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
            backgroundColor: theme.selectedBackground,
        }
    },
    newAuthority:{
        padding: 10,
        width: "100%",
        borderRadius: 5,
        transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
            backgroundColor: theme.selectedBackground,
        }
    },
    newAuthorityTitle :{
        color: theme.text,
        display: "block",
        lineHeight: "24px",
        marginLeft: 10,
    },
    authorityId:{
        color: theme.idColor,
        display: "block",
        fontSize: 12
    },
    authorityTitle:{
        color: theme.text,
        display: "block",
        lineHeight: "42px"
    },
    authorityRoleWrapper:{
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
    changeMessage: {
        display: "block",
        color: theme.text,
        fontSize: 12,
        lineHeight: "30px"
    },
    sendButtonDisabled: {
        color: "#d9d9d9!important",
        backgroundColor: "#8c8c8c!important"
    },
    iconColor: {
        fill: "#aab0bd"
    },
    '@keyframes onRoleSwitch': {
        from: {backgroundColor: theme.selectedBackground},
        "50%": {backgroundColor: theme.onClickSelectedBackground},
        to: {backgroundColor: theme.selectedBackground}
      },
    animateRoleSwitch:{
        animationName: '$onRoleSwitch',
        animationDuration: "300ms"
    },
    '@keyframes onNewRoleClick': {
        from: {backgroundColor: "rgba(255, 255, 255, 0)"},
        "50%": {backgroundColor: theme.onClickSelectedBackground},
        to: {backgroundColor: "rgba(255, 255, 255, 0)"}
      },
    animateNewRoleClick:{
        animationName: '$onNewRoleClick',
        animationDuration: "300ms"
    },
    animateAuthorityClick: {
        animationName: '$onRoleSwitch',
        animationDuration: "300ms"
    }
});

export default withStyles(style)(RoleManagmentPanel)
