import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Select from "./Select";

const useStyles = makeStyles({
    wrapper: {
        width: 1328,
        height: 792,
        background: "#FFFFFF",
        boxShadow: "0px 4px 20px rgba(154, 169, 179, 0.24)",
        borderRadius: 8
    },
    upperHalfWrapper:{
        height: 336,
        width: "100%",
        borderBottom: "1px solid #BBC5CB",
        display: 'flex',
    },
    techInfoWrapper:{
        height: "100%",
        width: 500,
        borderRight: "1px solid #BBC5CB",
        padding: "42px 33px"
    },
    descriptionWrapper: {
        height: "100%",
        width: "calc(100% - 500px)",
        padding: "46px 56px 86px 56px",
    },
    bottomHalfWrapper:{
        width: "100%",
        height: "calc(100% - 336px)",
        padding: "47px 0 24px 40px",
        position: 'relative',
    },
    techInfoTitle: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 32,
        lineHeight: "37px",
        alignItems: "center",
        color: "#000000"
    },
    techInfoData: {
        display: 'flex',
        marginTop: 45,
        position: "relative"
    },
    techInfoItemColumn: {
        marginRight: 25
    },
    techInfoItem: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        lineHeight: "18px",
        alignItems: "center",
        color: "#90A0AA",
        marginBottom: 25,
        "&:last-child": {
            marginBottom: 0
        }
    },
    techInfoValueColumn:{
        
    },
    techInfoValue: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        lineHeight: "18px",
        alignItems: "center",
        color: "#424649",
        marginBottom: 25,
        "&:last-child": {
            marginBottom: 0
        }
    },
    ratingWrapper: {
        position: "absolute",
        bottom: -10,
        right: 0
    },
    ratingValue: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 64,
        lineHeight: "75px",
        alignItems: "center",
        color: "#4CB648",
    },
    descriptionTitle: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 24,
        lineHeight: "36px",
        color: "#000000",
        marginBottom: 50

    },
    descriptionText: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        lineHeight: "24px",
        color: "#424649",
        height: 120,
        overflow: 'hidden',
    },
    bottomTitle: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 24,
        lineHeight: "28px",
        alignItems: "center",
        color: "#000000"
    },
    bottomTileSelectWrapper: {
        position: 'absolute',
        display: 'flex',
        top: 56,
        right: 33
    },
    periodSelectTitle: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        lineHeight: "34px",
        alignItems: "center",
        color: "#90A0AA",
        marginRight: 14
    },
    styledSelect: {
        marginRight: 23
    }

});

export default function AppInfo(props) {
    const classes = useStyles();
    return(
        <div className={classes.wrapper}>
            <div className={classes.upperHalfWrapper}>
                <div className={classes.techInfoWrapper}>
                    <div className={classes.techInfoTitle}>{props.title}</div>
                    <div className={classes.techInfoData}>
                        <div className={classes.techInfoItemColumn}>
                            <div className={classes.techInfoItem}>{"Дата создания"}</div>
                            <div className={classes.techInfoItem}>{"Идентификатор"}</div>
                            <div className={classes.techInfoItem}>{"Просмотры"}</div>
                        </div>
                        <div className={classes.techInfoValueColumn}>
                            <div className={classes.techInfoValue}>{props.date}</div>
                            <div className={classes.techInfoValue}>{props.id}</div>
                            <div className={classes.techInfoValue}>{props.views}</div>
                        </div>
                        <div className={classes.ratingWrapper}>
                            <div className={classes.techInfoItem}>{"Рейтинг:"}</div>
                            <div className={classes.ratingValue}>{props.rating}</div>
                        </div>
                    </div>
                </div>
                <div className={classes.descriptionWrapper}>
                    <div className={classes.descriptionTitle}>{"Описание:"}</div>
                    <div className={classes.descriptionText}>{props.description}</div>
                </div>
            </div>
            <div className={classes.bottomHalfWrapper}>
                <div className={classes.bottomTitle}>{"Количество просмотров пользователями"}</div>
                <div className={classes.bottomTileSelectWrapper}>
                    <div className={classes.periodSelectTitle}>{"Период:"}</div>
                    <Select defaultValue={"2019"} root={classes.styledSelect} values={["2018", "2019", "2020"]}/>
                    <Select defaultValue={"Сентябрь"} values={["Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]}/>
                </div>
                <div className={classes.tableWrapper}>
                    <div className={classes.tableHeader}></div>
                    <div className={classes.tableBody}></div>
                </div>
            </div>
        </div>
    )
}