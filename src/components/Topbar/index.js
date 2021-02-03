import React from 'react';

import MenuButton from '../MenuButton';
import SearchBar from '../SearchBar';

import './style.css';

export default function Topbar(props) {
    return (
        <div id="topbar">
            <MenuButton showHideText={props.showHideText} onClick={props.switchSideBar} />
            
            <span>{props.title}</span>

            <SearchBar />
        </div>
    );
}