import React, { useState } from 'react';

import db from './db/output.json';

import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

import './App.css';

function App() {

    const [ semesterAndSubjectIndex, setSemesterAndSubjectIndex ] = useState([0, 0]);
    const [ contentIndex, setContentIndex ] = useState(0);
    const [ contentAndQuery, setContent ] = useState({});
    var content = contentAndQuery.content ?? [];
    var query = contentAndQuery.query ?? "";

    function last(arr) {
        return arr[arr.length - 1];
    }

    function handleChangeContent(searchString) {
        var newContent = [];

        searchString = searchString.target.value.toLocaleLowerCase();

        db.forEach(({semester, subjects}, semIndex) => {

            subjects.forEach(({name, content}, subIndex) => {

                content.forEach(({type, list}, contIndex) => {

                    list.forEach((linkObj, linkIndex) => {
                        if (linkObj.title.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())) {
                            const hasSemester = newContent.findIndex(v => v.semester==semester) >= 0;
                            if (!hasSemester) {
                                newContent.push({
                                    semester,
                                    subjects: []
                                })
                            }

                            const hasSubject = last(newContent).subjects.findIndex(v => v.name==name) >= 0;
                            if (!hasSubject) {
                                last(newContent).subjects.push({
                                    name,
                                    content: []
                                })
                            }

                            const hasContentType = last(last(newContent).subjects).content.findIndex(v => v.type==type) >= 0;
                            if (!hasContentType) {
                                last(last(newContent).subjects).content.push({
                                    type,
                                    list: []
                                })
                            }
                            

                            last(last(last(newContent).subjects).content).list.push(linkObj);

                        }
                    })

                })

            })
        })

        setContent({ content: newContent, query: searchString});
    }


    function handleSidebarOpening() {
        const sidebar = document.querySelector("#sidebar");
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
                changeContent={handleChangeContent}
            />
            
            <div id="all-but-sidebar">
                <Topbar
                    title="GuideMe"
                    switchSideBar={handleSidebarOpening}
                    changeContent={handleChangeContent}
                />

                <Content
                    semesterIndex={semesterAndSubjectIndex[0]}
                    subjectIndex={semesterAndSubjectIndex[1]}
                    contentIndex={contentIndex}

                    content={content}
                    query={query}
                    
                    setContentIndex={setContentIndex}
                />
            </div>
        </div>
    )
}

export default App;