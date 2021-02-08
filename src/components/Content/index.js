import React from 'react';
import ContentCard from '../ContentCard';

import db from '../../db/output.json';

import './style.css';

export default function Content(props) {
    return (
        <div id="content">
            <div id="semester-and-subject">
                <h2>{db[props.semesterIndex]['semester']}</h2>
                <h4>{db[props.semesterIndex]['subjects'][props.subjectIndex]['name']}</h4>
            </div>

            <div id="container-of-cards">
            {
                db[props.semesterIndex]['subjects'][props.subjectIndex]['content'][props.contentIndex]['list'].map( e =>
                    <ContentCard  {...e} />
                )
            }
            </div>
        </div>
    )
}