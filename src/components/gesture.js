import React from 'react'
import { withGesture } from 'react-with-gesture'
import { Spring, animated, interpolate } from 'react-spring/renderprops'
import './style.css'
import Scrollbar from "react-scrollbars-custom";

class GesturesExample extends React.Component {
    state = {
        xPosition: 0,
        yPosition: 0
    }
    componentDidUpdate(prevProps){
        if(prevProps.down !== this.props.down && !this.props.down){
            console.log("kekeke");
            let xPosition = this.state.xPosition + this.props.delta[0];//0;
            // if(this.props.event.clientX < 50){
            //     xPosition = -100 - this.props.event.target.offsetWidth;
            // }
            // if(this.props.event.clientX > window.screen.width - 50){
            //     xPosition = 100 + this.props.event.target.offsetWidth;
            // }
            this.setState({xPosition});
        }
            
    }
  render() {
    const {
      delta: [xDelta, yDelta],
      down,
    } = this.props;
    const { xPosition, yPosition } = this.state;
    console.log("props");
    console.log(this.props);
    console.log(this.state);
    const to = { x: down ? (( xDelta > yDelta) ? xDelta + xPosition : xPosition) : xPosition, y: down ? ((yDelta > xDelta) ? yDelta + yPosition : yPosition ) : yPosition };
    return (
      <div className="gestures-main">
        <Spring native to={to} immediate={n => { return(down && n === 'x')}}>
          {(props) => {
              let x = props.x;
              let y = props.y;
              console.log("props inside spring");
              console.log(props); return(
            <animated.div
              className="gestures-item"
              style={{ backgroundColor: xDelta < 0 ? '#FF1C68' : '#14D790' }}>
              <animated.div
                className="gestures-bubble"
                style={{
                  transform: x
                    .interpolate({
                      map: Math.abs,
                      range: [50, 300],
                      output: [0.5, 1],
                      extrapolate: 'clamp',
                    })
                    .interpolate(x => `scale(${x})`),
                  justifySelf: xDelta < 0 ? 'end' : 'start',
                }}
              />
              <animated.div
                className="gestures-fg"
                style={{
                  transform: interpolate([x, y], (x, y) => { return `translate3d(${x}px,${y}px,0)`;}),
                }}>
                    <Scrollbar trackYProps={{style: {width: 5, height: "calc(100% - 10px)", top:0}}} thumbYProps={{style: {background: "#267BFF"}}} style={{ width: "100%", height: "calc(100% - 32px)" }}>
                        <div >
                            <div style={{background: "white", width: "calc(100% - 5px)", color: "black", display: "flex"}}>{1}</div>
                            <div style={{background: "white", width: "calc(100% - 5px)", color: "black", display: "flex"}}>{1}</div>
                            <div style={{background: "white", width: "calc(100% - 5px)", color: "black", display: "flex"}}>{1}</div>
                            <div style={{background: "white", width: "calc(100% - 5px)", color: "black", display: "flex"}}>{1}</div>
                        </div>
                    </Scrollbar>
              </animated.div>
            </animated.div>
          )}
        }
        </Spring>
      </div>
    )
  }
}

// https://github.com/drcmda/react-with-gesture
export default withGesture()(GesturesExample)