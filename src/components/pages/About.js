import React from 'react';
import heroImage from '../../assets/heroImage.jpg'

export default function About() {
  return (
    <div className='py-3'>
      <div className='d-flex justify-content-evenly align-items-center py-3'>
        <div>
          <h2>Grethel Mae Reyes</h2>
          <p>
            Electronics Engineer | Full-stack Developer
          </p>
        </div>
        <img src={heroImage} alt="Grethel Reyes" className='heroImage'/>
      </div>
      <p>
        Programming is a subject I was keen during college. It was the good old Turbo Pascal language that I learnt. I was led to a different path but recently steered my life to be what I might have been.
      </p>
      <p>
        To propel my career as a Web Developer, I enrolled in the Coding Bootcamp at the University of Sydney.
      </p>
    </div>
  );
}
