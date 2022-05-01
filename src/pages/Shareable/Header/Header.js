import React from 'react';
import { NavLink } from 'react-bootstrap';


const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark mb-5">
        <div class="nav-con container-fluid">
          <NavLink class="navbar-brand" href="#">Warehouse</NavLink>          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
            <NavLink class="nav-link" href="#">Home</NavLink>
              <NavLink class="nav-link active" aria-current="page" href="#">Contact</NavLink>
              <NavLink class="nav-link" href="#">Blogs</NavLink>
              <NavLink class="nav-link" href="#">Sign In</NavLink>

            </div>
          </div>
        </div>
      </nav>
    );
};

export default Header;