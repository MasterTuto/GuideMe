import React from 'react';

function ContentCard(props) {
    console.log(`https://www.youtube.com/embed/${props.url.match(/v=(\w+)/)}`);
    const url = props.url.includes('watch')
                ? `https://www.youtube.com/embed/${props.url.match(/v=(\w+)/)[1]}`
                : props.url;

    return (
        <div id="content-card">
            <iframe className="content-card-preview" src={url} />
            <span className='content-card-title'>{props.title}</span>
        </div>
    );
}

export default ContentCard;