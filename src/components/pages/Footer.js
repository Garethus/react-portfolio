import React from 'react';

export default function Footer() {

    const icons = [
        {
            name: "bi bi-github",
            link: "https://github.com/Garethus"
        },
        {
            name: "bi bi-linkedin",
            link: "https://www.linkedin.com/in/grethel-mae-reyes-81549516b/"
        },
        {
            name: "bi bi-twitter",
            link: "https://twitter.com/IamGaretThus"
        }
    ]

    return (
        <div className="d-flex justify-content-evenly p-5">
            {icons.map((icon) => (
            <a href={icon.link} key={icon.name} >
                <i className={icon.name} style={{fontSize: '1.5rem'}}></i>
            </a>
            ))}
        </div>
    );
}