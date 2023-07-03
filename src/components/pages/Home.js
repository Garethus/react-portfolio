import React from 'react';
import heroImage from '../../../public/heroImage.jpg'

export default function Home() {
  return (
    <div>
      <h1>Grethel Mae Reyes</h1>
      <p>
        Electronics Engineer | Full-stack Developer
      </p>
      <img src={heroImage} alt="Grethel Reyes"/>
    </div>
  );
}
