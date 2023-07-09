import React from 'react';

export default function Resume() {
  return (
    <div className='py-3 text-center'>
      <h3>My Resume</h3>
      <a href='https://www.linkedin.com/in/grethel-mae-reyes-81549516b/'>
        <button className="btn btn-dark btn-lg my-3">View my Resume in LinkedIn and Let's Connect</button>
      </a>
      <div className='container'>
        <div className='row text-start py-3 gap-5'>
          <div className='col-sm'>
            <h5>
              Front-end Proficiencies:
            </h5>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>jQuery</li>
              <li>React</li>
              <li>CSS Frameworks (Bootstrap, Materialize)</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div className='col-sm'>
            <h5>
              Back-end Proficiencies:
            </h5>
            <ul>
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL, Sequelize</li>
              <li>MongoDB, Mongoose</li>
              <li>REST</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
