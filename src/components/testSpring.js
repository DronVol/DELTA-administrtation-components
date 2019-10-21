import { Spring, config, animated } from 'react-spring/renderprops';
import React, { Component } from "react";
import { classes } from 'istanbul-lib-coverage';
import withStyles from "@material-ui/core/es/styles/withStyles";
import { withGesture } from 'react-with-gesture';

class TestSpring extends Component {
    state = {
        direction: true
    };
    render() {
        const {classes} = this.props;
        const {direction} = this.state;
        return (
            <>
                <div className={classes.wrapper}>
                    <Spring
                        from={{background: (direction) ? "red" : "blue"}}
                        to={{background: (direction) ? "blue" : "red"}}
                        config={{...config.slow, duration: 5000}}
                        // reverse
                        reset
                        native
                    >
                        {props => <animated.div className={classes.circle} style={props} onClick={() => this.setState({direction: !this.state.direction})}/>}
                    </Spring>
                </div>
            </>
        )
    }
}

const styles = theme => ({
    wrapper: {
        width: 700,
        height: 500
    },
    circle:{
        width: 50,
        height: 50,
        borderRadius: 25
    }
});

export default withGesture()(withStyles(styles)(TestSpring));