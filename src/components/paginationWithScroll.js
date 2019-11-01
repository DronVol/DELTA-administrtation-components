import React from 'react'
import { withGesture } from 'react-with-gesture'
import { Spring, animated, interpolate } from 'react-spring/renderprops'
import './style.css'
import Scrollbar from "react-scrollbars-custom";
import withStyles from "@material-ui/core/es/styles/withStyles";
//import _ from 'lodash';
//import { relative } from 'path';

class Pagination extends React.Component {
    state = {
        xPosition: 0,
        yPosition: 0,
        currentView: 0,
        prevView: 0,
        scrollPosition: 0,
        isScrollDirectionHorizontal: null 
    }
    componentDidUpdate(prevProps){
      const { isScrollDirectionHorizontal } = this.state;
        if(prevProps.down !== this.props.down && !this.props.down){
          //console.log(this.props.delta);
            if(Math.abs(this.props.delta[0]) >= Math.abs(this.props.delta[1])){
              //console.log("kekeke");
              let currentView = this.state.currentView;
              //console.log(this.props.delta[0]);
              if (this.props.delta[0] < -50) this.setState({currentView: (currentView + 1 > 1) ? 1 : currentView + 1, prevView: this.state.currentView})
              else if(this.props.delta[0] > 50) this.setState({currentView: (currentView - 1 < 0) ? 0 : currentView - 1, prevView: this.state.currentView})
            }
            if(Math.abs(this.props.delta[0]) < Math.abs(this.props.delta[1]) && this.state.currentView === 0){
              //console.log("pepepe");
              const scrollPosition = this.state.scrollPosition - this.props.delta[1];
              this.setState({scrollPosition: (scrollPosition > 0) ? scrollPosition : 0});
            }
            if(isScrollDirectionHorizontal !== null) this.setState({isScrollDirectionHorizontal: null});
        }
        if(prevProps.down !== this.props.down && this.props.down && isScrollDirectionHorizontal === null && this.props.delta[0] !== 0 && this.props.delta[1] !== 0){
          console.log("SET GESTURE");
          console.log(this.props.delta);
          console.log(Math.abs(this.props.delta[0]) > Math.abs(this.props.delta[1]));
          this.setState({ isScrollDirectionHorizontal : Math.abs(this.props.delta[0]) > Math.abs(this.props.delta[1]) });
        }
            
    }

    generateScroll = (count) => {
      let { classes } = this.props;
      let res = []; 
      for(let i = 0; i < count; i++) res.push(<div key={i} className={classes.scrollItem}>{i}</div>); 
      return res; 
    }
  render() {
    const {
      delta: [xDelta, yDelta],
      down,
      classes
    } = this.props;
    const { xPosition, /*yPosition*/ } = this.state;
    //console.log("props");
    //console.log(this.props);
    //console.log(this.state);
    const count = 20;
    const to = { x: down ? ((Math.abs(xDelta) > Math.abs(yDelta)) ? xDelta/5 + xPosition - 240 * this.state.currentView : xPosition - 240 * this.state.currentView) /*_.clamp(xDelta + xPosition, -50, 50)*/ : xPosition - 240 * this.state.currentView, y: 0/*down ? ((yDelta > xDelta) ? yDelta + yPosition : yPosition ) : yPosition */};
    //console.log(this.state.scrollPosition);
    return (
      <div className="gestures-main">
        <Spring native to={to} immediate={n => { return(down && n === 'x')}}>
          {(props) => {
            let x = props.x;
            let y = props.y;
            //console.log("props inside spring");
            //console.log(props.x); 
            return(
              <div
                className={classes.scrollZone}>
                <animated.div className = {classes.animatedWrapper}
                  style={{
                    transform: interpolate([x, y], (x, y) => { return `translate3d(${x}px,0px,0)`;}),
                  }}>
                  <div className={classes.paginationDiv}>
                    <Scrollbar trackYProps={{style: {width: 5, height: "calc(100% - 10px)", top:0}}} thumbYProps={{style: {background: "#267BFF"}}} style={{ width: "100%", height: "calc(100% - 32px)", zIndex: 5 }} scrollTop={this.state.scrollPosition - this.props.delta[1]}>
                      <div >
                        {this.generateScroll(count)}
                      </div>
                    </Scrollbar>
                  </div>
                  <div className={classes.paginationDiv}/>
                </animated.div>
              </div>
            )
          }}
        </Spring>
      </div>
    )
  }
}
const style = (theme) => ({
    scrollZone: {
        width: 250,
        height: 400,
        borderRadius: 20,
        background: "#232323",
        zIndex: 2,
        position: "relative"
    },
    paginationDiv: {
        width: 230,
        height: 380,
        borderRadius: 15,
        background: "#4f5667",
        marginTop: 10,
        marginLeft: 10
    },
    scrollItem: {
      background: "white", 
      width: "calc(100% - 5px)", 
      color: "black", 
      display: "flex"
    },
    animatedWrapper: {
      display: "flex",
      position: 'absolute',
    }
});

export default withGesture()(withStyles(style)(Pagination))