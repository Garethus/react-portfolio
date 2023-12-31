import React from 'react';
import favicon from '.././assets/favicon.png';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header className="d-flex p-3 align-items-center">
      <img src={favicon} alt='Grethel Reyes Initials' className='favicon me-auto'/>
      <nav className="text-light">
        <ul className="nav nav-tabs p-3">
          <li className="nav-item">
            <a
              href='#about'
              onClick={() => handlePageChange('About')}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'About' ? 'nav-link fw-semibold active' : 'nav-link fw-semibold'}
              >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href='#portfolio'
              onClick={() => handlePageChange('Portfolio')}
              // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Portfolio' ? 'nav-link fw-semibold active' : 'nav-link fw-semibold'}
              >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href='#contact'
              onClick={() => handlePageChange('Contact')}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Contact' ? 'nav-link fw-semibold active' : 'nav-link fw-semibold'}
              >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              href='#resume'
              onClick={() => handlePageChange('Resume')}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Resume' ? 'nav-link fw-semibold active' : 'nav-link fw-semibold'}
              >
              Resume
            </a>
          </li>
        </ul>
        </nav>
    </header>
  );
}

export default NavTabs;
