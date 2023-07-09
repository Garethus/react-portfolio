import React from 'react';
import githubSVG from '../../assets/github.svg'

export default function Project({ project }) {

    const { name, image, repo, link, description } = project;

    return (
        <div className='col p-3'>
            <div className='card' key={name}>
                <a href={link}>
                    <img
                        src={image}
                        alt={name}
                        className="card-img-top"
                    />
                </a>
                <div className="card-body">
                    <h3 className='card-title'>
                        <a href={link}>{name}</a>{' '}
                        <a href={repo}>
                            <img src={githubSVG} alt='Github icon' className='github-svg' />
                        </a>
                    </h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}
