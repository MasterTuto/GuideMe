import React from 'react';

import SwitchSideBarButton from '../SwitchSideBarButton';
import SearchBar from '../SearchBar';

import './style.css';

export default function Topbar(props) {
    return (
        <div id="topbar">
            <SwitchSideBarButton showHideText={props.showHideText} onClick={props.switchSideBar} />
            
            <span>{props.title}</span>

            <SearchBar />
        </div>
    );
}