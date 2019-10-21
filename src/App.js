import React, { Component } from 'react';
import './App.css';
import withStyles from "@material-ui/core/es/styles/withStyles";
import Pagination from "./components/paginationWithScroll";
import { disableBodyScroll } from 'body-scroll-lock';

class App extends Component {

  targetElement = null;

  componentDidMount(){
    this.targetElement = document.querySelector('body');
    this.showTargetElement();
  }

  showTargetElement = () => {
    disableBodyScroll(this.targetElement);
  };

  render (){
    const {classes} = this.props;
    return (
      <div className={classes.App}>
        <Pagination />
      </div>
    )
  }
}

const style = theme => ({
  App: {
    backgroundColor: theme.background,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)"
  }
});

export default withStyles(style)(App);
