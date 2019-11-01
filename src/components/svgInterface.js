import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

export default function SvgInterface(props) {
    return (
        <div style={props.style} className={(props.wrapper) ? props.wrapper : ""}>
            <SvgIcon viewBox={props.viewBox} width={props.width} height={props.height} fill="none" classes={{root: (props.root) ? props.root : ""}}>
                {props.children}
            </SvgIcon>
        </div>
        
    )
}   