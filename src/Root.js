import React, {Component} from "react";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import {createMuiTheme} from "@material-ui/core";
import App from "./App";
//import 'typeface-roboto-condensed';

const themes = {
    dark: {
        palette:{
            primary: { 
                main: "#aab0bd"//"rgb(38, 48, 71)"
            },
            secondary: {
                main: "#aab0bd"
            },
        },
        font: 'Roboto Condensed',
        background: "#314a31",
        main: "#263047",
        modalBackground: "rgb(38, 48, 71)",
        selectedBackground: "#48619c",
        onClickSelectedBackground: "rgba(255,255,255,0.3)",
        idColor: "#858585",
        layouts: "#36425D",
        textHighlight: "#D6DDEC",
        text: "#aab0bd",
        textGray: "#7180A1",
        inputs: "#1E273A",
        blue: "#267BFF",
        lightBlue: "#83A0CF",
        value: "#D6DDEC",
        h3: "#8C9EC7",
        pieSecondary: "#263047",
        gistValue: "#D6DDEC",
        chartTitle: "#D6DDEC",
        watterPlan: "#74E8A3",
        textMedium: "#D6DDEC",
        chartItem: "#384965",
        typography: {
            useNextVariants: true,
        },
        buttonBackground: "#141a27",
        boundaryGrey: "#71808a",
        svgDisabled: "#636363"
        // overrides: {
        //     MuiPickersToolbar: {
        //       toolbar: {
        //         backgroundColor: "rgb(38, 48, 71)",
        //       },
        //     },
        //     MuiPickersCalendarHeader: {
        //       switchHeader: {
        //         // backgroundColor: "rgb(38, 48, 71)",
        //         // color: "white",
        //       },
        //     },
        //     MuiPickersDay: {
        //       day: {
        //         color: "rgb(38, 48, 71)",
        //       },
        //       daySelected: {
        //         backgroundColor: "rgb(38, 48, 71)",
        //       },
        //       dayDisabled: {
        //         color: "rgb(38, 48, 71)",
        //       },
        //       current: {
        //         color: "rgb(38, 48, 71)",
        //       },
        //     },
        //     MuiPickersModal: {
        //       dialogAction: {
        //         color: "rgb(38, 48, 71)",
        //       },
        //     },
        //   }
    },
    white: {
        font: 'Roboto Condensed',
        main: "linear-gradient(119.36deg, #D8EBFF 0%, #2F97FF 100%)",
        background: "#edeef0",
        layouts: "#fff",
        text: "#7180A1",
        modalBackground: "rgba(38, 48, 71, 0.95)",
        textGray: "#7180A1",
        inputs: "#EBEFF6",
        blue: "#267BFF",
        pieSecondary: "#f4fbff",
        value: "#36425D",
        gistValue: "#D6DDEC",
        lightBlue: "#83A0CF",
        h3: "#36425D",
        chartTitle: "#7180A1",
        watterPlan: "#74E8A3",
        textMedium: "#7180A1",
        chartItem: "#f4fbff",
        typography: {
            useNextVariants: true,
        },
        buttonBackground: "#FFFFFF"
    }
};

class Root extends Component {
    state = {
        theme: "dark"
    };

    themeTrigger = (themeName) => {
        if (themes.hasOwnProperty(themeName)){
            this.setState({theme: themes[this.state.theme]});
        }
    };

    render() {
        return (
            <MuiThemeProvider theme={createMuiTheme(themes[this.state.theme])}>
                <App themeTrigger={this.themeTrigger} />
            </MuiThemeProvider>
        )
    }
}

export default Root;