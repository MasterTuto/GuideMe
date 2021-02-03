import React from 'react';

import './style.css';

export default function SearchBar(props) {
    return (
        <div id="searchBar">
            <input type="text" />
            <input type="submit" value="Pesquisar" placeholder="Digite o termo" />
        </div>
    )
}