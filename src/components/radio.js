import React from "react";

export default function Radio(props){
    return(
        <div className={`${(props.root) ? props.root : null} ${(props.checked && props.value && props.variable && props.value === props.variable) ? props.checked : ""}`} onClick={() => props.onClick(props.value)}/>
        );
}