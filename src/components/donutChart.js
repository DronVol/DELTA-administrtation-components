import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles';
import 'amcharts3';
import 'amcharts3/amcharts/pie';
import 'amcharts3/amcharts/themes/light';
import 'amcharts3/amcharts/plugins/export/export.min.js';
import 'amcharts3/amcharts/plugins/export/export.css';
import AmCharts from '@amcharts/amcharts3-react';

class DonutChart extends Component {

  generateOptions = () => {
    return {
        "type": "pie",
        "startDuration": 0,
        "startAngle": 0,
        "balloonText": "[[category]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
        "innerRadius": 40,
        "labelText": "",
        "radius": 60,
        "pullOutRadius": "0%",
        "startRadius": "0%",
        "pullOutDuration": 0,
        "colorField": "color",
        "labelTickAlpha": 0,
        "valueField": "value",
        "allLabels": [],
        "balloon": {
            "borderThickness": 0.5,
            "color": "#869AAC",
            "cornerRadius": 3,
            "shadowAlpha": 0.44,
            "shadowColor": "#869AAC"
        },
        "titles": [],
        "dataProvider": (this.props.data) ? this.props.data : []
    };
};


  render() {
    return (
      <AmCharts.React
        key={0}
        className={this.props.classes.chartWrapper}
        options={this.generateOptions()}
        style={(this.props.style) ? this.props.style : {}}
      />
    );
  }
}

const styles = {
    chartWrapper: {
        width: 125,
        height: 125,
        "& a": {
            display: "none!important"
        },
    },
};


export default withStyles(styles)(DonutChart);