import React from 'react'
import M from "materialize-css";

export default function More (props) {

  React.useEffect(() => {
    M.AutoInit()
  }, []);

  return (
    <div>
      <div class="parallax-container">
        <div class="parallax"><img src={require('../images/SanFrancisco.jpg')} alt=""/></div>
      </div>
      <div class="section white">
        <div class="row container">
          <h1 class="header">More info will be added later.</h1>
          <p class="grey-text text-darken-3 lighten-3"><h3>This is a parallax page.<br/><br/>Use a button below to return back to the main page 
          and see some beautiful photos.<br/></h3></p>
          <a href="/" class="waves-effect waves-light btn-large black"><i class="material-icons right">home</i>Home</a>
        </div>
      </div>
      <div class="parallax-container">
        <div class="parallax"><img src={require('../images/SanFrancisco2.jpg')} alt=""/></div>
      </div>
    </div>
    

  )
}