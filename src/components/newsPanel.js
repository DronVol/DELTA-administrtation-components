import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MessageAddingWindow from "./messageAddingWindow";
import MessagesTable from "./messagesTable";

class NewsPanel extends Component {

    state = {
        currentTab: 0
    }

    render () {
        const { classes } = this.props;
        return (
            <div className = {classes.newsPanel}>
                <Tabs classes={ {indicator: classes.tabPabelIndicator } }
                            aria-label = "" 
                            value={this.state.currentTab}
                            onChange={(e, value) => this.setState({currentTab: value})}
                            TabIndicatorProps={{ children: <div /> }}
                        >
                            <Tab classes = { { root: classes.tabButton } } label = "Создать новость" id = "simple-tab-0" aria-controls = "simple-tabpanel-0"/>
                            <Tab classes = { { root: classes.tabButton } } label = "Таблица публикаций" id = "simple-tab-1" aria-controls = "simple-tabpanel-1"/>
                        </Tabs>
                        <div className={classes.tabContent}>
                            { 
                                (() => {
                                    switch(this.state.currentTab) {
                                        case 0: 
                                            return <MessageAddingWindow />;
                                        default:
                                            return <MessagesTable />;
                                    }
                                })()
                            }
                                
                        </div>
            </div>
        )
    }

}

const style = (theme) => ({
    newsPanel: {
        width: 1000,
        height: 1000,
        backgroundColor: theme.modalBackground,
        margin: "auto"
    },
    tabButton: {
        color: theme.text,
        fontFamily: "'Roboto Condensed', sans-serif!important"
    }
})

export default withStyles(style)(NewsPanel)