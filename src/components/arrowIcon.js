import React from 'react';
import SvgInterface from "./svgInterface";

export default function ArrowIcon(props) {
    return (<SvgInterface {...props} viewBox={"0 0 13 7"}>
            <path d="M1 1L6.5 6L12 1" stroke={props.fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </SvgInterface>)
}