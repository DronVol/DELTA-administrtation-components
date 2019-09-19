import React, { Component } from "react";
import withStyles from "@material-ui/core/es/styles/withStyles";
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import DialogWindow from "./dialogWindow";
import AddIcon from '@material-ui/icons/Add';
import CreateNewEntityDialog from "./createNewEntityDialog";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class RoleManagmentPanel extends Component {

    constructor(props) {
        super(props);
        const data = this.fetchData();
        this.state = {
            roles: data.roles,
            competences: data.competences,
            systemCompetences: data.systemCompetences,
            currentRole: 0,
            checkedCompetences: data.roles[0].SystemCompetencies,
            change: "",
            isDialogOpen: false,
            mountAnimation: false,
            animatedRoleKey: "",
            animatedCompetenceKey: "",
            newEntityDialogOpen: false,
            newEntity: "",
            currentTab: 0,
            tabPage: "SystemCompetencies",
        };
    }

    fetchData = () => {
        return {
            competences: [
                {
                    "Type": "competences",
                    "Date": "15.9.2019",
                    "_id": "5d7e19125d3f71400a03582a",
                    "SystemName": "CA",
                    "Name": "Центральный аппарат",
                    "Id": "cid_0_jKlYHZ",
                    "__v": 0
                }
            ],
            systemCompetences: [
                {
                    "Type": "systemCompetences",
                    "Date": "16.9.2019",
                    "_id": "5d7f7577a4bff306cc33006a",
                    "SystemName": "D_ALL_ROOT",
                    "Name": "Полный доступ",
                    "__v": 0
                },
                {
                    "Type": "systemCompetences",
                    "Date": "16.9.2019",
                    "_id": "5d7f7577a4bff306cc33006b",
                    "SystemName": "D_OPI",
                    "Name": "Доступ к user interface",
                    "__v": 0
                },
                {
                    "Type": "systemCompetences",
                    "Date": "16.9.2019",
                    "_id": "5d7f7577a4bff306cc33006c",
                    "SystemName": "D_OPI_STORE",
                    "Name": "Доступ к магазину приложений",
                    "__v": 0
                },
                {
                    "Type": "systemCompetences",
                    "Date": "16.9.2019",
                    "_id": "5d7f7577a4bff306cc33006d",
                    "SystemName": "D_OPI_APPS",
                    "Name": "Доступ к личным приложениям",
                    "__v": 0
                },
                {
                    "Type": "systemCompetences",
                    "Date": "16.9.2019",
                    "_id": "5d7f7577a4bff306cc33006f",
                    "SystemName": "D_OPI_WIDGETS",
                    "Name": "Доступ к Виджетам",
                    "__v": 0
                },
                {
                    "Type": "systemCompetences",
                    "Date": "16.9.2019",
                    "_id": "5d7f7577a4bff306cc330070",
                    "SystemName": "D_SUDO",
                    "Name": "Доступ к админ панели",
                    "__v": 0
                },
                {
                    "Type": "systemCompetences",
                    "Date": "16.9.2019",
                    "_id": "5d7f7577a4bff306cc330071",
                    "SystemName": "D_SUDO_APPS",
                    "Name": "Доступ к управлению приложениями",
                    "__v": 0
                },
                {
                    "Type": "systemCompetences",
                    "Date": "16.9.2019",
                    "_id": "5d7f7577a4bff306cc330072",
                    "SystemName": "D_SUDO_WIDGETS",
                    "Name": "Доступ к управлению виджетами",
                    "__v": 0
                },
                {
                    "Type": "systemCompetences",
                    "Date": "16.9.2019",
                    "_id": "5d7f7577a4bff306cc330074",
                    "SystemName": "D_SUDO_SOURCES",
                    "Name": "Доступ к управлению источниками",
                    "__v": 0
                },
                {
                    "Type": "systemCompetences",
                    "Date": "16.9.2019",
                    "_id": "5d7f7577a4bff306cc330075",
                    "SystemName": "D_SUDO_USERS",
                    "Name": "Доступ к управлению пользователями",
                    "__v": 0
                },
                {
                    "Type": "systemCompetences",
                    "Date": "16.9.2019",
                    "_id": "5d7f7577a4bff306cc330077",
                    "SystemName": "D_SUDO_SYSTEM",
                    "Name": "Доступ к управлению системой",
                    "__v": 0
                },
                {
                    "Type": "systemCompetences",
                    "Date": "16.9.2019",
                    "_id": "5d7f7577a4bff306cc330076",
                    "SystemName": "D_SUDO_RANGES",
                    "Name": "Доступ к управлению ранжированием",
                    "__v": 0
                }
            ],
            roles: [
                {
                    "Type": "roles",
                    "Date": "14.9.2019",
                    "Weight": [
                        "1"
                    ],
                    "Competences": [
                        "CA"
                    ],
                    "SystemCompetencies": [
                        "D_ALL_ROOT"
                    ],
                    "_id": "5d7d129af389072b39d1bfda",
                    "SystemName": "ADMIN_ALL_D",
                    "Name": "DELTA_ROOT",
                    "Id": "rid_1_kUbK6m",
                    "__v": 0
                },
                {
                    "Type": "roles",
                    "Date": "15.9.2019",
                    "Weight": [
                        "1"
                    ],
                    "Competences": [
                        "CA"
                    ],
                    "SystemCompetencies": [
                        "D_OPI"
                    ],
                    "_id": "5d7e47252cf3121100881eef",
                    "SystemName": "USER_D",
                    "Name": "DELTA_USER",
                    "Id": "rid_1_xgiz8R",
                    "__v": 0
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
                >
                    <span className = {classes.roleId}>{"id: " + value.Id}</span>
                    <span className = {classes.roleTechName}>{"Техническое имя: " + value.SystemName}</span>
                    <span className = {classes.roleTitle}>{value.Name}</span>
                </div>
            )
        });
    }

    renderCompetences = () => {
        return this.state.competences.map((value) => {
            return this.renderSingleCompetence(value);
        });
    }

    handleRoleClick = (index) => {
        this.setState({
            currentRole: index, 
            checkedCompetences: this.state.roles[index][this.state.tabPage], 
            change: "", 
            ...((this.state.currentRole === index) ? {} : {animatedRoleKey: "role" + index})
        });
    }

    handleCheckboxClick = (id) => {
        let sameCompetences = true;
        let newCompetences = this.state.checkedCompetences;
        const oldCompetences = this.state.roles[this.state.currentRole][this.state.tabPage];
        if (newCompetences.includes(id)) newCompetences = newCompetences.filter((value) => value !== id);
        else newCompetences = [...newCompetences, id];
        if (newCompetences.length !== oldCompetences.length) {
            sameCompetences = false;
        }
        else {
            for(let value of newCompetences) {
                if (!oldCompetences.includes(value)) {
                    sameCompetences = false;
                    break;
                }
            }
        }
        this.setState({change: (sameCompetences) ? "" : "checkbox", checkedCompetences: newCompetences});
    }

    submitData = (data) => {
        console.log(data);
        this.setState({
            currentRole: 0,
            checkedCompetences: this.state.roles[0].SystemCompetencies,
            change: "",
            isDialogOpen: false,
            mountAnimation: false,
            animatedRoleKey: "",
            animatedCompetenceKey: "",
            newEntityDialogOpen: false,
            newEntity: "",
            currentTab: 0,
            tabPage: "SystemCompetencies",
        });
    }

    handleSwitchDialog = () => {
        this.setState({isDialogOpen: !this.state.isDialogOpen});
    }

    renderNewEntity = (entity) => {
        const { classes } = this.props;
        const title = (entity === "Role") ? "роль" : "компетенцию";
        return (
            <div
                className = {`${classes["new" + entity]} ${this.state.newEntity === entity ? classes["animateNew" + entity + "Click"] : ""}`}
                key={"new" + entity}
                onClick={ () => this.handleNewEntityClick(entity) }
            >
                <AddIcon classes={{root: classes.iconColor}}/>
                <span className = {classes["new" + entity + "Title"]}>{"Создать новую " + title}</span>
            </div>
        );
    }

    handleNewEntityClick = (entity) => this.setState({newEntity: entity, newEntityDialogOpen: true});

    handleTabClick = (e, value) => {
        const competenceTabs = ["SystemCompetencies", "Competences"];
        this.setState({currentTab: value, tabPage: competenceTabs[value], checkedCompetences: this.state.roles[this.state.currentRole][competenceTabs[value]]});
    }

    generateSystemCompetencesList = () => {
        return this.state.systemCompetences.filter((value) => this.filterCompetences(value)).map((value) => {
            return this.renderSingleCompetence(value);
        });
    }

    filterCompetences = (competence) => {
        if(this.state.tabPage === "Competencies"){
            return true;
        }
        else {
            const { checkedCompetences } = this.state;
            const technicalSystemNames = ["D_ALL_ROOT", "D_OPI", "D_SUDO"];
            if (technicalSystemNames.includes(competence.SystemName)) return false;
            else return (
                checkedCompetences.includes("D_ALL_ROOT") || 
                (checkedCompetences.includes("D_OPI") && competence.SystemName.indexOf("D_OPI") !== -1) || 
                (checkedCompetences.includes("D_SUDO") && competence.SystemName.indexOf("D_SUDO") !== -1) ||
                checkedCompetences.includes(competence.SystemName)
            );
        }
    }

    renderSingleCompetence= (params) => {
        const { Id = null, Name, SystemName } = params;
        const { classes } = this.props;
        const {roles, currentRole, checkedCompetences, animatedCompetenceKey, change, tabPage} = this.state;
        return (
            <div 
                className = {`${classes.competence} ${animatedCompetenceKey === SystemName ? classes.animateCompetenceClick : ""}`} 
                key={SystemName} 
                onClick={ () => { this.handleCheckboxClick(SystemName); this.setState({animatedCompetenceKey: SystemName}); } }
                onAnimationEnd = { () => this.setState({animatedCompetenceKey: ""})}
            >
                { (Id === null) ? null : <span className = {classes.competenceId}>{"id: " + Id}</span> }
                <span className = {classes.competenceId}>{"Техническое имя: " + SystemName}</span>
                <div className = {classes.competenceWrapper} >
                    <Checkbox 
                        checked={ (change === "checkbox") ? checkedCompetences.includes(SystemName) : roles[currentRole][tabPage].includes(SystemName)}
                        onChange={() => this.handleCheckboxClick(SystemName)}
                        />
                    <span className = {classes.competenceTitle}>{Name}</span>
                </div>
            </div>
        );
    }

    findCompetenceByTechName = (params) => {
        let searchResults = {};
        let searchParams = (typeof(params) === "string") ? {result: params} : params;
        for (let item of this.state.systemCompetences) {
            for (let key in searchParams) {
                if (item.SystemName === searchParams[key]) {
                    searchResults[key] = item;
                }
            }
        }
        if(typeof(params) === "string" && searchResults.hasOwnProperty("result")) return searchResults.result;
        else if(Object.keys(searchResults).length === Object.keys(params).length) return searchResults;
        else {
            throw new Error("Found propeties mismatch");
        }
    }

    renderSystemCompetences = () => {
        const { classes } = this.props;
        const { root, admin, user } = this.findCompetenceByTechName({root: "D_ALL_ROOT", admin: "D_SUDO", user: "D_OPI"});
        return (
            <>
                <div className={classes.systemCompetencesTotalAccess}>
                    {this.renderSingleCompetence(root)}
                </div>
                {
                    (this.state.checkedCompetences.includes("D_ALL_ROOT")) ? null :
                    <div>
                        <div className={classes.systemCompetencesPartialAccess}>
                            {this.renderSingleCompetence(admin)}
                            {this.renderSingleCompetence(user)}
                        </div>
                        <div className={classes.systemCompetencesList}>
                            {this.generateSystemCompetencesList()}
                        </div>
                    </div>
                }
            </>
        )
    }

    getRoleChangeData = () => {
        const { roles, currentRole, tabPage, checkedCompetences } = this.state;
        return ({
            SystemName: roles[currentRole].SystemName,
            [tabPage]: (tabPage === "SystemCompetencies" && checkedCompetences.includes("D_ALL_ROOT")) ? ["D_ALL_ROOT"] : checkedCompetences
        });
    } 

    render () {
        const { classes } = this.props;
        return (
            <div className = { classes.panelArea }>
                <DialogWindow 
                    isOpen = { this.state.isDialogOpen }
                    closeCallback = { this.handleSwitchDialog }
                    acceptCallback = { () => { this.submitData(this.getRoleChangeData()); this.handleSwitchDialog(); } }
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
                        {[this.renderNewEntity("Role"), ...this.renderRoles()]}
                    </div>
                    <div className = { classes.competencesPanel } >
                        <Tabs classes={ {indicator: classes.tabPabelIndicator } }
                            aria-label = "" value={this.state.currentTab}
                            onChange={this.handleTabClick}
                            TabIndicatorProps={{ children: <div /> }}
                        >
                            <Tab classes = { { root: classes.tabButton } } label = "Системные компетенции" id = "simple-tab-0" aria-controls = "simple-tabpanel-0"/>
                            <Tab classes = { { root: classes.tabButton } } label = "Компетенции" id = "simple-tab-1" aria-controls = "simple-tabpanel-1"/>
                        </Tabs>
                        <div className={classes.tabContent}>
                            { 
                                (() => {
                                    switch(this.state.currentTab) {
                                        case 0: 
                                            return this.renderSystemCompetences();
                                        default:
                                            return [this.renderNewEntity("Competence"), ...this.renderCompetences()];
                                    }
                                })()
                            }
                                
                        </div>
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
    competencesPanel: {
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
    competence:{
        padding: 10,
        width: "100%",
        borderRadius: 5,
        transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
            backgroundColor: theme.selectedBackground,
        }
    },
    newCompetence:{
        padding: 10,
        width: "100%",
        borderRadius: 5,
        transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
            backgroundColor: theme.selectedBackground,
        },
        display: "flex"
    },
    newCompetenceTitle :{
        color: theme.text,
        display: "block",
        lineHeight: "24px",
        marginLeft: 10,
    },
    competenceId:{
        color: theme.idColor,
        display: "block",
        fontSize: 12
    },
    competenceWrapper : {
        display: "flex"
    },
    competenceTitle:{
        color: theme.text,
        display: "block",
        lineHeight: "42px"
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
    animateNewCompetenceClick: {
        animationName: '$onRoleSwitch',
        animationDuration: "300ms"
    },
    tabContent: {
        marginTop: 15,
        position: 'relative'
    },
    tabPabelIndicator: {
        //maxWidth: 40,
        //justifyContent: 'center'
    },
    tabButton: {
        color: theme.text,
        fontFamily: "'Roboto Condensed', sans-serif!important"
    },
    systemCompetencesList: {
        overflow: "scroll",
        height: 385,
        borderColor: theme.boundaryGrey,
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10
    },
    systemCompetencesPartialAccess: {
        display: "flex",
        marginBottom: 10
    },
    systemCompetencesTotalAccess: {
        marginBottom: 10
    }
});

export default withStyles(style)(RoleManagmentPanel)
