import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles';
import 'amcharts3';
import 'amcharts3/amcharts/serial';
import 'amcharts3/amcharts/themes/light';
import 'amcharts3/amcharts/plugins/export/export.min.js';
import 'amcharts3/amcharts/plugins/export/export.css';
import AmCharts from '@amcharts/amcharts3-react';

class LineChartTile extends Component {

  generateOptions = () => {
    return {
        "type": "serial",
        "categoryField": "date",
        "dataDateFormat": "YYYY-MM-DD",
        "autoMarginOffset": 40,
        "marginRight": 60,
        "marginTop": 60,
        "fontSize": 13,
        "theme": "default",
        "categoryAxis": {
            "equalSpacing": true,
            //"parseDates": true,
            "startOnAxis": true,
            "tickPosition": "middle",//"start",
            "autoGridCount": false,
            "axisColor": "#869AAC",
            "color": "#869AAC",
            "dashLength": 4,
            "gridAlpha": 1,
            "gridColor": "#869AAC",
            "gridCount": 59
        },
        "chartCursor": {
            "enabled": true,
            "bulletSize": 0,
            "cursorColor": "#843FA0",
            "graphBulletAlpha": 0
        },
        "trendLines": [],
        "graphs": [
            {
                "accessibleLabel": "",
                "balloonText": "",
                "bulletBorderAlpha": 1,
                "bulletBorderThickness": 1,
                "bulletSize": 16,
                "id": "AmGraph-2",
                "lineColor": "#843FA0",
                "lineThickness": 3,
                "title": "graph 2",
                "valueField": "column-2"
            }
        ],
        "guides": [],
        "valueAxes": [
            {
                "id": "ValueAxis-1",
                "axisColor": "#869AAC",
                "color": "#869AAC",
                "gridAlpha": 1,
                "gridColor": "#869AAC",
                "title": ""
            }
        ],
        "allLabels": [],
        "balloon": {
            "maxWidth": 100,
            "offsetX": 0,
            "offsetY": 0
        },
        "titles": [],
        "dataProvider": [
            {
                "date": "2014-03-01",
                "column-1": 8,
                "column-2": 5
            },
            {
                "date": "2014-03-02",
                "column-1": 6,
                "column-2": 7
            },
            {
                "date": "2014-03-03",
                "column-1": 2,
                "column-2": 3
            },
            {
                "date": "2014-03-04",
                "column-1": 1,
                "column-2": 3
            },
            {
                "date": "2014-03-05",
                "column-1": 2,
                "column-2": 1
            },
            {
                "date": "2014-03-06",
                "column-1": 3,
                "column-2": 2
            },
            {
                "date": "2014-03-07",
                "column-1": 6,
                "column-2": 8
            }
        ]
    };
};


  render() {
    return (
        <div className={this.props.classes.wrapper}>
            <AmCharts.React
            key={0}
            className={this.props.classes.chartWrapper}
            options={this.generateOptions()}
            style={(this.props.style) ? this.props.style : {}}
        />
        </div>
    );
  }
}

const styles = {
    wrapper: {
        width: 1328,
        height: 576,
        background: "#FFFFFF",
        boxShadow: "0px 4px 20px rgba(154, 169, 179, 0.24)",
        borderRadius: 8
    },
    chartWrapper: {
        width: "100%",
        height: "100%",
        "& a": {
            display: "none!important"
        },
    },
};


export default withStyles(styles)(LineChartTile);