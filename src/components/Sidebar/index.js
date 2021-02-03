import React, { useState } from 'react';

import db from '../../db/output.json';
import SearchBar from '../SearchBar';

import './style.css';

export default function Sidebar(props) {
    const [itemsToShow, setItemsToShow] = useState([]);

    function switchSemesterSpoiler(semester) {
        if (itemsToShow.includes(semester)) {
            setItemsToShow(itemsToShow.filter(v => v !== semester));
        } else {
            setItemsToShow([...itemsToShow, semester]);
        }
    }

    return (
        <div id="sidebar">
            <SearchBar />
            <ul>
                {
                db.map((e, x) => {
                    return (
                        <li key={e.semester}> <span
                                className="li-title"
                                id={x == props.semesterIndex ? 'selected-item': ""}
                                onClick={() => switchSemesterSpoiler(e.semester)}
                            >{e.semester}</span>

                            { itemsToShow.includes(e.semester)
                               ? <ul>{ e.subjects.map((e, y) => <li
                                    key={e.name}
                                    id={y == props.subjectIndex && x === props.semesterIndex ? 'selected-item' : ""}
                                    onClick={()=>props.setSemesterAndSubjectIndex([x, y])}
                                    >{e.name}</li>) } </ul>
                               : null
                            }
                        </li>
                    );
                })
                }
            </ul>
        </div>
    )
}