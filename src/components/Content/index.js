import React from 'react';
import ContentCard from '../ContentCard';

import db from '../../db/output.json';

import './style.css';

export default function Content(props) {
    function handleContentTypeSelection(event) {
        props.setContentIndex(event.target.value);
    }

    return (
        <div id="content">
            { console.log(props.query) }
            { props.query == ""

            ? // IN THE CASE NOBODY IS SEARCHING
            <>
            <div id="semester-and-subject">
                <h2>{db[props.semesterIndex].semester}</h2>
                <h4>{db[props.semesterIndex].subjects[props.subjectIndex].name}</h4>

                <select onChange={handleContentTypeSelection}>
                    {
                        db[props.semesterIndex].subjects[props.subjectIndex].content.map(
                            (v, i) => <option value={i}>{v.type}</option>
                        )
                    }
                </select>
            </div>

            <div id="container-of-cards">
            {
                db[props.semesterIndex].subjects[props.subjectIndex].content[props.contentIndex].list.map( e =>
                    <ContentCard  {...e} />
                )
            }
            </div>
            </>
            
            : // IN THE CASE SOMETHING IS BEING SEARCHED
            props.content.map( (sem) =>
                sem.subjects.map((sub) =>
                    <>
                    <div id="semester-and-subject">
                        <h2>{sem.semester}</h2>
                        <h4>{sub.name}</h4>
                    </div>

                    <div id="container-of-cards">
                    {
                        sub.content.map( con =>
                            con.list.map( e => <ContentCard {...e} subtitle={con.type}/> )
                        )
                    }
                    </div>
                    </>
            ))
            }
        </div>
    )
}