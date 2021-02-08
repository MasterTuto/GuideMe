import React from 'react';

import './style.css';

function ContentCard(props) {
    console.log(props.url +"...." + `https://www.youtube.com/embed/${props.url.match(/v=(\w+)/)}`);
    const url = props.url.includes('watch')
                ? `https://www.youtube.com/embed/${props.url.match(/v=(\w+)/)[1]}`
                : false;

    return (
        <div id="content-card">
            { url
                ? <iframe className="content-card-preview" src={url} />
                : <div className="content-card-preview content-card-div" onClick={()=>window.open(props.url)}>
                    <span className="url">PREVIEW NÃO DISPONÍVEL<br/><br/>{props.url}</span>
                  </div>
            }
            <span className='content-card-title'>{props.title}</span>
        </div>
    );
}

export default ContentCard;