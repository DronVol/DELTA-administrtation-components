import React from 'react'
import { withGesture } from 'react-with-gesture'
import { Spring, animated, interpolate } from 'react-spring/renderprops'
import './style.css'

class GesturesExample extends React.Component {
    state = {
        xPosition: 0,
        yPosition: 0
    }
    componentDidUpdate(prevProps){
        if(prevProps.down !== this.props.down && !this.props.down){
            console.log("kekeke");
            let xPosition = 0;
            if(this.props.event.clientX < 50){
                xPosition = -100 - this.props.event.target.offsetWidth;
            }
            if(this.props.event.clientX > window.screen.width - 50){
                xPosition = 100 + this.props.event.target.offsetWidth;
            }
            xPosition = this.props.delta[0];
            this.setState({xPosition});
        }
            
    }
  render() {
    const {
      xy: [xDelta, yDelta],
      down,
    } = this.props;
    //let xDelta = (this.props.event && this.props.event.type === "mousemove") ? this.props.event.clientX : 0;
    //let yDelta = (this.props.event && this.props.event.type === "mousemove") ? this.props.event.clientY : 0;
    const { xPosition, yPosition } = this.state;
    console.log("props");
    console.log(this.props);
    const to = { x: down ? xDelta : xPosition, y: down ? yDelta : yPosition };
    return (
      <div className="gestures-main" /* style={{position: "relative"}} */>
        <Spring native to={to} immediate={n => { return(down && n === 'x')}}>
          {(props) => {
              let x = props.x;
              let y = props.y;
              console.log(props); 
              return(
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
                    position: "absolute",
                  top: y.interpolate( y => `${y}px`),
                  left: x.interpolate( x =>  {console.log(x); return `${x}px`;} )
                }}>
                Slide me
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