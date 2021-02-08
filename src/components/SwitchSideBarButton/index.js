import React from 'react';

import './style.css';

export default function SwitchSideBarButton(props) {
    return (
        <div onClick={props.onClick} id="hamburguer">
            <div className="line1"/>
            <div className="line2"/>
            <div className="line3"/>
        </div>
    )
}