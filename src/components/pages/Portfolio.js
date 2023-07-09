import React, { useState } from 'react';
import Project from "./Project";
import textEditor from "../../assets/text-editor.png";
import ironStride from "../../assets/iron-stride.png";
import marvelFanPage from "../../assets/marvelites.png";
import weatherDashboard from "../../assets/weather-dashboard.png";
import workDayScheduler from "../../assets/workday-scheduler.png";
import codingQuizChallenge from "../../assets/quiz-challenge.png";

export default function Portfolio() {
    const [projects] = useState([
        {
            name: "Text Editor",
            image: textEditor,
            description: "",
            link: "https://grethel-text-editor-cf2138c864a3.herokuapp.com/",
            repo: "https://github.com/Garethus/text-editor",
        },
        {
            name: "Iron-Stride",
            image: ironStride,
            description: "",
            link: "https://iron-stride.herokuapp.com/login",
            repo: "https://github.com/blancahidalgo/iron-stride",
        },
        {
            name: "Marvelites Fan Page",
            image: marvelFanPage,
            description: "",
            link: "https://voi-jankowski.github.io/marvel/",
            repo: "https://github.com/voi-jankowski/marvel",
        },
        {
            name: "Weather-Dashboard",
            image: weatherDashboard,
            description: "JavaScript/jQuery/HTML/CSS/Server-Side API/Web API",
            link: "https://garethus.github.io/weather-dashboard/",
            repo: "https://github.com/Garethus/weather-dashboard",
        },
        {
            name: "Work-Day Scheduler",
            image: workDayScheduler,
            description: "",
            link: "https://garethus.github.io/work-day-scheduler/",
            repo: "https://github.com/Garethus/work-day-scheduler",
        },
        {
            name: "Coding Quiz Challenge",
            image: codingQuizChallenge,
            description: "JavaScript/HTML/CSS/Local-Storage API",
            link: "https://garethus.github.io/04-web-apis/",
            repo: "https://github.com/Garethus/04-web-apis",
        },
    ]);



    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            {projects.map((project, idx) => (
                <Project project={project} key={"project" + idx} />
            ))}
        </div>
    );
}
