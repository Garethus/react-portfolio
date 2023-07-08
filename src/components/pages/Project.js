import React from "react";
import githubImg from "../../assets/github.svg"


export default function Project(props) {

  //Variable that hold project title
  const title = props.title;

  // Variable to build a link to the project
  const link = props.link ? (
    <a href={props.link} target="_blank" rel="noreferrer">
      {title}
    </a>
  ) : (
    ""
  );

  // Variable to build an image link to the project
  const image =
    props.link && props.image ? (
      <a href={props.link} target="_blank" rel="noreferrer">
        <img src={props.image} alt={title} />
      </a>
    ) : (
      ""
    );

    // Variable to hold the project description
    const description = props.description ? <p>{props.description}</p> : "";

 // Variable to build an image link to the project's GitHub repo
    const repo = props.repo ? (
      <p>
        {
          <a href={props.GitHubRepoLink} target="_blank" rel="noreferrer">
            <img src={githubImg} alt="GitHub" />
          </a>
        }
      </p>
    ) : (
      ""
    );


  return (
    <article key={title}>
      <header>
        <h3>{link}</h3>
        {repo}
      </header>
      {image}
      {description}
    </article>
  );
}