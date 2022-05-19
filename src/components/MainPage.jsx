import React from 'react'
import PhotoGrid from './PhotoGrid'
import FixedButton from './FixedButton'
import NavBar from './NavBar'
import "../App.css"

export default function MainPage() {

  

  return (
    <div class="background">
      <div class="row">
        <NavBar/>
        <PhotoGrid/>
        <FixedButton/>
      </div>
    </div>
    // <div className="container">
    // {imageList.map((image) =>
    //   <div className="card">
    //     <div className="card-image">
    //       <span className="card-title">PHOTO</span>
    //       <img className="responsive-img activator " src={image.url} alt={image.public_id}></img>
    //       <a className="btn-floating halfway-fab waves-effect waves-light red activator "><i className="material-icons">favorite</i></a>
    //       <div className="card-reveal">
    //         <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
    //         <p>Here is some more information about this product that is only revealed once clicked on.</p>
    //       </div>
    //     </div>
    //   </div>
    // )}
    // </div>
  )
}
