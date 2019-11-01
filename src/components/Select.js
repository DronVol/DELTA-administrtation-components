import React, {useState, useRef} from "react";
import { makeStyles } from '@material-ui/core/styles';
import ArrowIcon from './arrowIcon';
import Popover from '@material-ui/core/Popover';

const useStyles = makeStyles({
    wrapper: {
        background: "#F4F8FA",
        borderRadius: 20,
        position: 'relative',
        height: 34
    },
    arrowWrapper: {
        width: 34,
        height: 34,
        position: 'absolute',
        right: 6,
        top: 0,
        padding: 11,
        transition: "all 350ms cubic-bezier(0,.4,.6,1) 0ms"
    },
    currentValue: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        lineHeight: "18px",
        alignItems: "center",
        color: "#566066",
        margin: "8px 50px 8px 16px"
    },
    arrowRoot:{
        fill: "none",
        width: 13,
        height: 13,
        display: "block"
    },
    rotate: {
        transform: 'rotateZ(180deg)',
    },
    paper: {
        boxShadow: "4px 10px 30px rgba(154, 169, 179, 0.6)",
    },
    selectRowWrapper: {
        padding: "5px 0",
        background: "#F4F8FA",
        boxShadow: "4px 10px 30px rgba(154, 169, 179, 0.6)",
        borderRadius: 4
    },
    selectRow: {
        padding: "4px 10px",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: "16px",
        textIndent: 20,
        color: "#566066",
        height: 22,
        borderLeft: "2px solid rgba(0,0,0,0)"
    }

});

export default function AppInfo(props) {
    const classes = useStyles();
    const [clicked, setClicked] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [select, setSelect] = useState(props.defaultValue);
    const selectRef = useRef(null);
    const handleClose = () => {
        setAnchorEl(null);
        setClicked(false);
    };
    const handleClick = () => {
        setClicked(!clicked); 
        setAnchorEl((anchorEl === null) ? selectRef : null);
    };
    const handleRowClick = (value) => {
        setSelect(value);
        handleClose();
    };
    return(
        <>
            <div className={`${classes.wrapper} ${(props.root) ? props.root : ""}`} onClick={() => handleClick()} ref={selectRef}>
                <div className={classes.currentValue}>{select}</div>
                <ArrowIcon fill={"#566066"} wrapper={`${classes.arrowWrapper} ${(clicked) ? classes.rotate : ""}`} root={classes.arrowRoot}/>
            </div>
            <Popover
                anchorEl={selectRef.current}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                open={clicked}
                onClose={() => handleClose()}
                classes={{
                    paper: classes.paper,
                  }}
            >
                <div className={classes.selectRowWrapper} style={{width: (selectRef.current) ? selectRef.current.clientWidth : 0}}>
                    {
                        (!props.values) ? <div className={classes.selectRow}/> :
                        props.values.map((value, index) => <div key={index} className={classes.selectRow} style={(value === select) ? {color: "#65ACFF", borderLeft: "2px solid #65ACFF"} : {}} onClick={() => handleRowClick(value)}>{value}</div>)
                    }
                </div>
                
            </Popover>
        </>
    )
}