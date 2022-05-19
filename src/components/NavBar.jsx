import React from 'react'
import M from "materialize-css";

export default function NavBar (props) {

  React.useEffect(() => {
    M.AutoInit()
  }, []);

  return (
    <div class="row">
      <ul id="slide-out" class="sidenav grey darken-4">
          <li><h4 class="white-text center">PhotoGallery</h4></li>
          <li>
            <div class="divider"></div>
          </li>
          <li>
            
            <a class="Info white-text" href="/more"><i class="material-icons white-text">info</i>Info</a>
          </li>
          <li>
            <a class="Contact white-text" href="/contact"><i class="material-icons white-text">contacts</i>Contact</a>
          </li>
        </ul>
        
      <div class="navbar-fixed">
        <ul id="dropdown" class="dropdown-content grey darken-4">
          <li><a href="#" class="white-text">Other projects</a></li>
          <li><a href="#" class="white-text">Careers</a></li>
          <li><a href="/contact" class="white-text">Contact</a></li>
        </ul>
        <nav width="100%">
          <div class="nav-wrapper grey darken-4">
            <a href="/" class="brand-logo center">PhotoGallery</a>
            <a href="" data-target="slide-out" class="sidenav-trigger"><i class="material-icons white-text">menu</i></a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><a href="/">Authors</a></li>
              <li><a href="/more">Info</a></li>
              <li><a href="" class="dropdown-trigger" data-target="dropdown">More<i class="material-icons right">arrow_drop_down</i></a></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}