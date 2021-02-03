import React from 'react';

import './style.css';

export default function MenuButton(props) {
    return (
        <button onClick={props.onClick}>{props.showHideText ? "Esconder" : "Mostrar"} barra lateral</button>
    )
}