import React from 'react';
import Project from "./Project";
import textEditor from "../../assets/text-editor.png";
import ironStride from "../../assets/iron-stride.png";
import marvelFanPage from "../../assets/marvelites.png";
import weatherDashboard from "../../assets/weather-dashboard.png";
import workDayScheduler from "../../assets/workday-scheduler.png";
import codingQuizChallenge from "../../assets/quiz-challenge.png";

const projects = [
  {
    name: "Text-Editor",
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
    name: "Marvelites-Fan-Page",
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
    name: "Work-Day-Scheduler",
    image: workDayScheduler,
    description: "",
    link: "https://garethus.github.io/work-day-scheduler/",
    repo: "https://github.com/Garethus/work-day-scheduler",
  },
  {
    name: "Coding-Quiz-Challenge",
    image: codingQuizChallenge,
    description: "JavaScript/HTML/CSS/Local-Storage API",
    link: "https://garethus.github.io/04-web-apis/",
    repo: "https://github.com/Garethus/04-web-apis",
  },
];

export default function Portfolio() {

  return (
    <div>
      <div className="flex-row">
        {projects.map((project) => (
          <Project
            title={project.title}
            image={project.image}
            description={project.description}
            link={project.link}
            repo={project.repo}
          />
        ))}
      </div>
    </div>
  );
}
