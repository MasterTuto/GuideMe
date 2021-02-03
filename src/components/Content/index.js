import React from 'react';
import ContentCard from '../ContentCard';

import db from '../../db/output.json';

import './style.css';

export default function Content(props) {
    return (
        <div id="content">
            {
                db[props.semesterIndex]['subjects'][props.subjectIndex]['content'][props.contentIndex]['list'].map( e =>
                    <ContentCard  {...e} />
                )
            }
        </div>
    )
}