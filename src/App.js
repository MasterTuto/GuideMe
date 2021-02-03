import React, { useState } from 'react';

import db from './db/output.json';

import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

import './App.css';

console.log(db);

function App() {
    const [ showSideBar, setShowSideBar ] = useState(false);
    const [ semesterAndSubjectIndex, setSemesterAndSubjectIndex ] = useState([0, 0]);
    const [ contentIndex, setContentIndex ] = useState(0);

    return (
        <div id="main-app">
            <Topbar showHideText={showSideBar} title="GuideMe" switchSideBar={() => setShowSideBar(!showSideBar)} />
            { showSideBar ?
                <Sidebar
                    semesterIndex={semesterAndSubjectIndex[0]}
                    subjectIndex={semesterAndSubjectIndex[1]}
                    setSemesterAndSubjectIndex={setSemesterAndSubjectIndex}
                    />
                    :
                    null
                }
            <Content
                semesterIndex={semesterAndSubjectIndex[0]}
                subjectIndex={semesterAndSubjectIndex[1]}
                contentIndex={contentIndex}
                
                setContentIndex={setContentIndex}
            />
        </div>
    )
}

export default App;