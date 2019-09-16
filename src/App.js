import React, { Component } from 'react';
import './App.css';
import withStyles from "@material-ui/core/es/styles/withStyles";
import RoleManagmentPanel from "./components/roleManagmentPanel";

class App extends Component {

  render (){
    const {classes} = this.props;
    return (
      <div className={classes.App}>
        <RoleManagmentPanel />
      </div>
    )
  }
}

const styles = theme => ({
  App: {
    backgroundColor: theme.background,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  }
});

export default withStyles(styles)(App);
