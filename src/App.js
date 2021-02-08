import React, { useState } from 'react';

import db from './db/output.json';

import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

import './App.css';

console.log(db);

function App() {

    const [ semesterAndSubjectIndex, setSemesterAndSubjectIndex ] = useState([0, 0]);
    const [ contentIndex, setContentIndex ] = useState(0);

    function handleSidebarOpening() {
        const sidebar = document.querySelector("#sidebar");
        const allButSidebar = document.querySelector("#all-but-sidebar");
        const line1 = document.querySelector(".line1");
        const line2 = document.querySelector(".line2");
        const line3 = document.querySelector(".line3");

        sidebar.style.left = sidebar.style.left == "-400px" || sidebar.style.left == "" ? "0px" : "-400px";
        // allButSidebar.style.left = allButSidebar.style.left === "0px" || allButSidebar.style.left == "" ? "400px" : "0px";

        line1.style.transform = line1.style.transform === "" ? "rotate(-45deg)" : "";
        line2.style.opacity   = line2.style.opacity == "0" ? "1" : 0;
        line3.style.transform = line3.style.transform === "" ?  "rotate(45deg) translate(2px, 2px)" : "";

    }
 
    return (
        <div id="main-app">
            <Sidebar
                semesterIndex={semesterAndSubjectIndex[0]}
                subjectIndex={semesterAndSubjectIndex[1]}
                setSemesterAndSubjectIndex={setSemesterAndSubjectIndex}
                
                switchSideBar={handleSidebarOpening}
            />
            
            <div id="all-but-sidebar">
                <Topbar title="GuideMe" switchSideBar={handleSidebarOpening} />

                <Content
                    semesterIndex={semesterAndSubjectIndex[0]}
                    subjectIndex={semesterAndSubjectIndex[1]}
                    contentIndex={contentIndex}
                    
                    setContentIndex={setContentIndex}
                />
            </div>
        </div>
    )
}

export default App;