import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import DonutChart from "./donutChart";

const useStyles = makeStyles({
    wrapper: {
        width: 432,
        height: 312,
        padding: "22px 32px",
        background: "#FFFFFF",
        boxShadow: "0px 4px 20px rgba(154, 169, 179, 0.24)",
        borderRadius: 8,
    },
    title:{
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 18,
        lineHeight: "21px",
        alignItems: "center",
        color: "#000000",
    },
    contents: {
        marginTop: 40,
        position: 'relative',
    },
    legendRowWrapper: {
        display: 'flex',
        width: 180,
        position: 'relative',
        marginBottom: 17,
        "&:last-child" : {
            marginBottom: 0
        }
    },
    legendDot:{
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 10,
        marginTop: 2
    },
    text:{
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: "14px",
        alignItems: "center",
        color: "#424649"
    },
    legendWrapper: {
        position: 'absolute',
        top: 0,
        right: 0
    }
});

function LegendRow(props){
    const classes = useStyles();
    return(
        <div className={classes.legendRowWrapper}>
            <div className={classes.legendDot} style={(props.color) ? {background: props.color} : {width: 9, height: 9, borderRadius: 4.5, background: "#FFFFFF", border: "1px solid #000000"}}/>
            <div className={classes.text}>{props.title}</div>
            <div className={classes.text} style={{position: "absolute", top: 0, right: 0}}>{props.value}</div>
        </div>
    )
};

export default function DonutTile(props){
    const classes = useStyles();
    const data = [
        {
            "category": "Windows",
            "value": 8,
            "color": "#EE423D"
        },
        {
            "category": "iOS",
            "value": 6,
            "color": "#05C985"
        },
        {
            "category": "Android",
            "value": 2,
            "color": "#1F8EFA"
        },
        {
            "category": "MacOS",
            "value": 4,
            "color": "#FFAB4F"
        }
    ];
    const legendRows = data.map((item, index) => <LegendRow key={index} color={item.color} value={item.value} title={item.category}/>);
    return(
        <div className={classes.wrapper}>
            <div className={classes.title}>{"Статистика по разрешению"}</div>
            <div className={classes.contents}>
                <DonutChart style={{ position: 'absolute', left: 0, top: 0 }} data={data}/>
                <div className={classes.legendWrapper}>
                    {legendRows}
                </div>
                
            </div>
        </div>
    )
}