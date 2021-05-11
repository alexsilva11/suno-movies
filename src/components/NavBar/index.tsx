import React from 'react';
import { MdSearch } from 'react-icons/md';

import { Nav } from './styles';

const NavBar: React.FC = () => {
  return (
    <Nav>
      <div>
        <div id="logo">
          SUNO <span>MOVIES</span>
        </div>
        <div id="options">
          <ul>
            <li>INÍCIO</li>
            <li>CATÁLOGO</li>
            <li>
              <MdSearch />
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  );
};

export default NavBar;
