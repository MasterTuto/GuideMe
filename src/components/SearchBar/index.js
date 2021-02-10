import React from 'react';

import './style.css';

export default function SearchBar(props) {
    return (
        <div id="searchBar">
            <input type="text" placeholder="Digite parte do conteúdo..." onChange={props.onChange} />
            <input type="submit" value="Pesquisar" placeholder="Digite o termo" />
        </div>
    )
}