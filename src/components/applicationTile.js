import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import DefaultAvatarIcon from "./defaultAvatarIcon";
import EditIcon from "./editIcon";
import DeleteIcon from "./deleteIcon";
import StartIcon from "./startIcon";

const useStyles = makeStyles({
    wrapper: {
        background: "#FFFFFF", 
        width: 384, 
        height: 136,
        borderRadius: 8,
        boxShadow: "0px 4px 20px rgba(154, 169, 179, 0.24)",
        display: 'flex',
        padding: 24,
        position: 'relative',
    },
    avatarBlock: {
        position: 'relative',
    },
    titleBlock: {
        marginLeft: 31,
        width: 200,
        position: 'relative',
    },
    buttonsBlock: {
        position: 'absolute',
        right: 24,
        height: 88
    },
    avatarWrapper: {
        width: 56, 
        height: 56, 
        borderRadius: 28,
        position: 'relative',
    },
    defaultIcon: {
        fill:"#FFFFFF", 
        width: 36, 
        height: 31
    },
    appId: {
        position: 'absolute',
        bottom: 0,
    },
    secondaryText:{
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: "16px",
        alignItems: "center",
        color: "#90A0AA"
    },
    mainText: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 18,
        lineHeight: "21px",
        alignItems: "center",
        color: "#424649"
    },
    appCreationDate: {
        position: 'absolute',
        bottom: 0
    },
    startIcon: {
        width: 20,
        height: "100%",
    },
    editIcon:{
        width: 20,
        height: "100%",
    },
    deleteIcon: {
        width: 16,
        height: "100%",
    }
  });

const randColor = () => {
    let color = "rgba(";
    for(let i = 0; i < 3; i++) {
        color += String(Math.round(Math.random() * 255)) + ", ";
    }
    color += "1)";
    console.log(color);
    return color;
}
  

const ApplicationTile = function(props){
    const classes = useStyles();
    let [color] = useState(randColor());
    console.log(props.children);
    return (<div className = {classes.wrapper}>
        <div className={classes.avatarBlock}>
            <div className = {classes.avatarWrapper} style={{background: color}}>
                <DefaultAvatarIcon root={classes.defaultIcon} style={{position: "absolute", top: 10, left: 10}}/>
            </div>
            <div className={`${classes.appId} ${classes.secondaryText}`}>{"id: " + props.appId}</div>
        </div>
        <div className={classes.titleBlock}>
            <div className={`${classes.mainText} ${classes.appTitle}`}>
                {props.appTitle}
            </div>
            <div className={`${classes.secondaryText} ${classes.appCreationDate}`}>
                {"Создано: " + props.appCreationDate}
            </div>
        </div>
        <div className={classes.buttonsBlock}>
            <StartIcon root={classes.startIcon} fill={"#BBC5CB"} style={{height: "33.333%"}}/>
            <EditIcon root={classes.editIcon} fill={"#BBC5CB"} style={{height: "33.333%"}}/>
            <DeleteIcon root={classes.deleteIcon} fill={"#BBC5CB"} style={{height: "33.333%"}}/>
        </div>
    </div>)
}

export default ApplicationTile;