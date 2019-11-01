import React from 'react';
import SvgInterface from "./svgInterface";

export default function StartIcon(props) {
    return (<SvgInterface {...props} viewBox={"0 0 20 20"}>
            <path d="M10 0C4.475 0 0 4.475 0 10C0 15.525 4.475 20 10 20C15.525 20 20 15.525 20 10C20 4.475 15.525 0 10 0ZM8 14.5V5.5L14 10L8 14.5Z" fill={props.fill}/>
        </SvgInterface>)
}