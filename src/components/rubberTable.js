import React, { Component } from "react";
import withStyles from "@material-ui/core/es/styles/withStyles";

class RubberTable extends Component {
    constructor(props) {
        super(props);
        const exampleKeys = ["Name", "Age", "Country", "Gender"];
        const exampleRows = [];
        let newRow = 1;
        this.tableRef = React.createRef();
        this.headerRef = React.createRef();
        this.rowHeaderRef = React.createRef();
        this.wrapperRef = React.createRef();
        while(newRow <= 10) {
            exampleRows.push(newRow);
            newRow ++;
        }
        let columnsWidths = {};
        let rowsHeights = {};
        exampleKeys.forEach((value) => columnsWidths[value] = 300);
        exampleRows.forEach((value) => rowsHeights[value] = 50);
        this.state = {
            columns: exampleKeys,
            rows: exampleRows,
            columnsWidths: columnsWidths,
            rowsHeights: rowsHeights,
            verticalVisible: false,
            verticalPosition: null,
            repositionColumnKey: null,
            repositionColumnRects: null,
            horizontalVisible: false,
            horizontalPosition: null,
            repositionRowKey: null,
            repositionRowRects: null,
        }
    }

    generateHeader = () => {
        const { classes } = this.props;
        const { columnsWidths } = this.state;
        return (
            <div className = { classes.tableHeader }>
                <div key={"tableCrosshair"} className={classes.tableHeaderItem} style={{width: 50, height: 50}} ref={this.headerRef}/>
                {
                    this.state.columns.map(
                        (value, index, arr) => {
                            return  (
                                <div 
                                    key = {"headerItem" + index} 
                                    className={classes.tableHeaderItem} 
                                    style={{width: columnsWidths[value], height: 50}}
                                >
                                    {(index === 0) ? null : <div className={classes.tableHeaderItemLeftDrag} onMouseDown={(e) => this.setRepositionColumn(e, index, (index === arr.length - 1) ? "lastLeft" : "left")}/>}
                                    {value}
                                    {(index === arr.length - 1) ? null : <div className={classes.tableHeaderItemRightDrag} onMouseDown={(e) => this.setRepositionColumn(e, index, "right")}/>}
                            </div>);
                        }
                    )
                }
            </div>
        )
    }

    generateRowsHeader = () => {
        const { classes } = this.props;
        const { rowsHeights } = this.state;
        return (
            <div className = { classes.tableRowsHeader } ref={this.rowHeaderRef}>
                {
                    this.state.rows.map(
                        (value, index, arr) => {
                            return  (
                                <div 
                                    key = {"rowsHeaderItem" + index} 
                                    className={classes.tableRowsHeaderItem} 
                                    style={{width: 50, height: rowsHeights[value]}}
                                >
                                    {(index === 0) ? null : <div className={classes.tableRowsHeaderItemTopDrag} onMouseDown={(e) => this.setRepositionRow(e, index, (index === arr.length - 1) ? "lastTop" : "top")}/>}
                                    {value}
                                    {(index === arr.length - 1) ? null : <div className={classes.tableRowsHeaderItemBottomDrag} onMouseDown={(e) => this.setRepositionRow(e, index, "bottom")}/>}
                            </div>);
                        }
                    )
                }
            </div>
        );
    }

    setRepositionColumn = (e, index, dragItem) => {
        console.log(e.target.parentNode.previousSibling);
        console.log(e.target.getClientRects()[0]);
        console.log(index);
        const targetRects = e.target.getClientRects()[0];
        const tableRects = this.tableRef.current.getClientRects()[0];
        const wrapperRects = this.wrapperRef.current.getClientRects()[0];
        switch(dragItem) {
            case "lastLeft":
                    this.setState(
                        {
                            verticalVisible: true,
                            repositionColumnKey: this.state.columns[index],
                            dragItem: dragItem,
                            //verticalPosition: targetRects.x - tableRects.x - 2,
                            verticalPosition: targetRects.x - wrapperRects.x - 2,
                            repositionColumnRects: e.target.parentNode.getClientRects()[0]
                        }
                    );
                break;
            default: 
            this.setState(
                {
                    verticalVisible: true,
                    repositionColumnKey: (dragItem === "right") ? this.state.columns[index] : this.state.columns[index - 1],
                    dragItem: dragItem,
                    verticalPosition: (dragItem === "right") ? targetRects.x + targetRects.width - tableRects.x + this.tableRef.current.scrollLeft : targetRects.x - tableRects.x - 2 + this.tableRef.current.scrollLeft,
                    repositionColumnRects: (dragItem === "right") ? e.target.parentNode.getClientRects()[0] : e.target.parentNode.previousSibling.getClientRects()[0]
                }
            );
        }
        
    }

    setRepositionRow = (e, index, dragItem) => {
        console.log(e.target.parentNode.previousSibling);
        console.log(e.target.getClientRects()[0]);
        console.log(index);
        const targetRects = e.target.getClientRects()[0];
        const tableRects = this.tableRef.current.getClientRects()[0];
        switch(dragItem) {
            case "lastTop":
                    this.setState(
                        {
                            horizontalVisible: true,
                            repositionRowKey: this.state.rows[index],
                            dragItem: dragItem,
                            horizontalPosition: targetRects.y - tableRects.y - 2,
                            repositionRowRects: e.target.parentNode.getClientRects()[0]
                        }
                    );
                break;
            default: 
            this.setState(
                {
                    horizontalVisible: true,
                    repositionRowKey: (dragItem === "bottom") ? this.state.rows[index] : this.state.rows[index - 1],
                    dragItem: dragItem,
                    horizontalPosition: (dragItem === "bottom") ? targetRects.y + targetRects.height - tableRects.y : targetRects.y - tableRects.y - 2,
                    repositionRowRects: (dragItem === "bottom") ? e.target.parentNode.getClientRects()[0] : e.target.parentNode.previousSibling.getClientRects()[0]
                }
            );
        }
        
    }

    setCoordinate = (e) => {
        const { columns, columnsWidths, repositionColumnKey, repositionColumnRects, rows, rowsHeights, repositionRowKey, repositionRowRects, dragItem, verticalVisible, horizontalVisible } = this.state;
        const positioningLayerRects = e.target.getClientRects()[0];
        const pointerRects = {x: e.clientX, y: e.clientY};
        const columnRects = repositionColumnRects;
        const rowRects = repositionRowRects;
        const tableRects = this.tableRef.current.getClientRects()[0];
        const wrapperRects = this.wrapperRef.current.getClientRects()[0];
        console.log(positioningLayerRects);
        try {
            if (verticalVisible){
                let verticalPosition = pointerRects.x - tableRects.x + this.tableRef.current.scrollLeft - 2;
                const widthDelta = verticalPosition - (columnRects.x - wrapperRects.x);
                const newWidth = (dragItem === "lastLeft") ? columnRects.width - widthDelta : pointerRects.x - columnRects.x;
                //const newWidth = (dragItem === "lastLeft") ? wrapperRects.width - verticalPosition : pointerRects.x - columnRects.x;
                //const verticalPosition = pointerRects.x - positioningLayerRects.x + 2;
                //console.log(columnRects.width);
                console.log("verticalPosition: " + verticalPosition);
                console.log("ColumnPosition: " + (columnRects.x - wrapperRects.x));
                console.log("new width: " + newWidth);
                console.log("width delta: " + widthDelta);
                let sumWidth = columns.reduce((sum, val, index, arr) => { return (index < arr.length - 1) ? sum + columnsWidths[val] : sum;}, 0);
                if (this.state.dragItem === "lastLeft" && tableRects.width === wrapperRects.width) {
                    console.log("true");
                    verticalPosition = sumWidth + 50;
                }
                if (newWidth >= 50) {
                    if (this.state.dragItem === "lastLeft") {
                        //console.log("new width: " + newWidth);
                        //console.log("width delta: " + widthDelta);
                        let sumWidth = columns.reduce((sum, val, index, arr) => { return (index < arr.length - 1) ? sum + columnsWidths[val] : sum;}, newWidth);
                        //if (tableRects.width === columnRects.width) verticalPosition = sumWidth - newWidth + 50;
                        //console.log("scrollWidth: " + (sumWidth + newWidth - tableRects.width));
                        //console.log(sumWidth);
                        const scrollToEnd = wrapperRects.width - widthDelta + this.tableRef.current.scrollWidth;
                        verticalPosition = sumWidth - newWidth + 50;
                        //if (widthDelta > 0) this.tableRef.current.scrollLeft = scrollToEnd;
                        //this.tableRef.current.scrollLeft = this.tableRef.current.scrollLeft + widthDelta;
                        this.tableRef.current.scrollLeft = scrollToEnd;
                    }
                    this.setState({verticalPosition: verticalPosition, columnsWidths: {...columnsWidths, [repositionColumnKey]: newWidth}});
                }
            }
            if (horizontalVisible){
                const newHeight = (dragItem === "lastTop") ? positioningLayerRects.height - pointerRects.y + tableRects.y + 50 : pointerRects.y - rowRects.y;
                const horizontalPosition = pointerRects.y - positioningLayerRects.y + 2;
                console.log(newHeight);
                if (newHeight >= 50) {
                    if (this.state.dragItem === "lastTop") {
                        console.log("height delta: " + (newHeight - rowRects.height));
                        let sumHeight = rows.reduce((sum, val, index, arr) => { return (index < arr.length - 1) ? sum + rowsHeights[val] : sum;}, 0);
                        console.log("scrollHeight: " + (sumHeight + newHeight - tableRects.height));
                        console.log(sumHeight);
                        const scrollToEnd = newHeight + this.tableRef.current.scrollHeight - tableRects.height;
                        if (scrollToEnd > 0) this.tableRef.current.scrollTop = scrollToEnd;
                    }
                    this.setState({horizontalPosition: horizontalPosition, rowsHeights: {...rowsHeights, [repositionRowKey]: newHeight}});
                }
            }

            
        }
        catch(err) {
            console.log("err");
        }
        
    } 

    printCoordinates = (e) => {
        const pointerRects = {x: e.clientX, y: e.clientY};
        //const pointerRects = {x: this.wrapperRef.current.clientX, y: this.wrapperRef.current.clientY};
        //console.log(e.target.getClientRects()[0]);
        console.log(this.wrapperRef.current.getClientRects()[0].width);
    }

    render() {
        const { classes } = this.props;
        let width = this.state.columns.reduce((sum, val)=>{return sum + this.state.columnsWidths[val];}, 0);
        width += 50;
        let height = this.state.columns.reduce((sum, val)=>{return sum + this.state.rowsHeights[val];}, 0);
        height += 50;
        console.log(width);
        return (
            <div id={"table"} className = { classes.table } style={{width: width}} ref={this.tableRef}>
                <div className = {classes.tableWrapper} key={String(Math.random()).substr(2, 7)} style={{width: width, height: height}} ref={this.wrapperRef}>
                    {this.generateHeader()}
                    <div id={"wrapper"} className = {classes.tableBodyWrapper} style={{width: width}}>
                        { this.generateRowsHeader() }
                        <div className = {classes.tableBody} />
                    </div>
                    <div 
                        className = {classes.positioningLayer} 
                        onMouseMove={(e) => {this.printCoordinates(e); this.setCoordinate(e);}} 
                        onMouseUp={()=> this.setState({horizontalVisible: false, verticalVisible: false})} 
                        onMouseLeave={()=> this.setState({horizontalVisible: false, verticalVisible: false})} 
                        style = {{display: (this.state.verticalVisible || this.state.horizontalVisible) ? "block" : "none"}}
                    />
                    {/* <div className = {classes.vertical} style = {{display: (this.state.verticalVisible) ? "block" : "none", left: this.state.verticalPosition}}/> */}
                    <div className = {classes.vertical} style = {{ left: this.state.verticalPosition}}/>
                    <div className = {classes.horizontal} style = {{display: (this.state.horizontalVisible) ? "block" : "none", top: this.state.horizontalPosition}}/>
                </div>
            </div>
        )
    }
}

const style = theme => ({
    table: {
        maxWidth: 1000,
        maxHeight: 800,
        background: theme.modalBackground,
        margin: 20,
        overflowX: "scroll",
        overflowY: "scroll",
        border: `2px solid ${theme.text}`,
    },
    tableHeader: {
        display: "flex",
        width: "fit-content"
    },
    tableHeaderItem: {
        color: theme.text,
        borderWidth: "0 1px 1px 1px",
        borderStyle: "solid",
        borderColor: theme.text,
        "&:first-child": {
            borderLeftWidth: 0,
        },
        "&:last-child": {
            borderRightWidth: 0,
        },
        position: "relative"
    },
    tableRowsHeader: {
        
    },
    tableBodyWrapper: {
        display: "flex"
    },
    tableRowsHeaderItem: {
        color: theme.text,
        borderWidth: "1px 1px 1px 0",
        borderStyle: "solid",
        borderColor: theme.text,
        "&:last-child": {
            borderBottomWidth: 0
        },
        position: "relative"

    },
    vertical: {
        top: 0,
        bottom: 0,
        width: 2,
        backgroundColor: theme.text,
        position: 'absolute',
    },
    horizontal: {
        left: 0,
        right: 0,
        height: 2,
        backgroundColor: theme.text,
        position: 'absolute',
    },
    positioningLayer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
    },
    tableWrapper: {
        position: 'relative',
    },
    tableHeaderItemLeftDrag:{
        position: 'absolute',
        left: 0,
        width: 6,
        top: 0,
        bottom: 0,
        "&:hover":{
            cursor: 'w-resize',
        }
    },
    tableHeaderItemRightDrag:{
        position: 'absolute',
        width: 6,
        right: 0,
        top: 0,
        bottom: 0,
        "&:hover":{
            cursor: 'e-resize',
        }
    },
    tableRowsHeaderItemTopDrag: {
        position: 'absolute',
        height: 6,
        right: 0,
        top: 0,
        left: 0,
        "&:hover":{
            cursor: 'n-resize',
        }
    },
    tableRowsHeaderItemBottomDrag: {
        position: 'absolute',
        height: 6,
        right: 0,
        bottom: 0,
        left: 0,
        "&:hover":{
            cursor: 's-resize',
        }
    }


})

export default withStyles(style)(RubberTable)