import React from 'react';
import SvgInterface from "./svgInterface";

export default function DeleteIcon(props) {
    return (<SvgInterface {...props} viewBox={"0 0 16 20"}>
            <path d="M1.11111 17.7778C1.11111 19 2.11111 20 3.33333 20H12.2222C13.4444 20 14.4444 19 14.4444 17.7778V4.44444H1.11111V17.7778ZM15.5556 1.11111H11.6667L10.5556 0H5L3.88889 1.11111H0V3.33333H15.5556V1.11111Z" fill={props.fill}/>
        </SvgInterface>)
}