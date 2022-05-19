import React from 'react'
import M from "materialize-css";
import "../App.css"

export default function Contact (props) {

  React.useEffect(() => {
    M.AutoInit()
  }, []);

  return (
    <div>
      <div class="parallax-container">
        <div class="parallax">
          <img src={require('../images/website-background-image-size-psd-vector-photo.jpg')} alt=""/>
        </div>
      </div>
      <div class="section black">
        <div class="row container">
          <h4 class="header white-text center">Please fill in the form below.</h4>
        </div>
          <div class="container">
            <div class="row">
              <form class="col s12">
                <div class="row">
                  <div class="input-field col s6">
                    <i class="material-icons prefix white-text">account_circle</i>
                    <input id="first_name" type="text" class="validate white-text"/>
                    <label for="first_name">First Name</label>
                  </div>
                  <div class="input-field col s6">
                    <input id="last_name" type="text" class="validate white-text"/>
                    <label for="last_name">Last Name</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s6">
                    <i class="material-icons prefix">account_circle</i>
                    <input id="password" type="password" class="validate white-text"/>
                    <label for="password">Password</label>
                  </div>
                  <div class="input-field col s6">
                    <input id="email" type="email" class="validate white-text"/>
                    <label for="email">Email</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s6">
                    <i class="material-icons prefix white-text">phone</i>
                    <input id="phone" type="tel" class="validate white-text"/>
                    <label for="phone">Phone number</label>
                  </div>
                </div>
                <div class="row">
                  <i class="material-icons prefix medium">account_circle</i>
                  <a href="/" class="waves-effect waves-light btn purple darken-4 text-white">Submit<i class="material-icons right">send</i></a>
                </div>
              </form>
            </div>
          </div>
      </div>
      <div class="parallax-container">
        <div class="parallax"><img src={require('../images/website-background-image-size-psd-vector-photo.jpg')} alt=""/></div>
      </div>
    </div>
    

  )
}