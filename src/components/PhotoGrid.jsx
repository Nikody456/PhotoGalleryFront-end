import React from 'react'
import images from '../images.json'
import M from "materialize-css";
import '../PhotoGrid.css'

export default function PhotoGrid (props) {
  const [imageList, setImageList] = React.useState(images.resources)

  React.useEffect(() => {
    M.AutoInit()
  }, []);

  if (!Array.isArray(imageList) || imageList.length < 1) {
    return (
      <div class="preloader-wrapper big active">
        <div class="spinner-layer spinner-blue">
          <div class="circle-clipper left">
            <div class="circle"/>
          </div>
          <div class="gap-patch">
            <div class="circle"/>
          </div>
          <div class="circle-clipper right">
            <div class="circle"/>
          </div>
        </div>
      </div>
    )
  }

  const photoCards = imageList.map((image) =>
    <div class="col s12">
      <div class="section">
        <div class="card z-depth-5">
          <div class="flow-text white-text lighten-5 grey darken-4 center">
            {image.name}
          </div>
          <div class="card-image">
            <img class="responsive-img materialboxed" data-caption={image.folder} src={image.url} alt={image.public_id}></img>
          </div>
          <a class="btn-floating pulse halfway-fab grey darken-4 activator"><i class="material-icons">info_outline</i></a>
          <div class="card-reveal grey darken-4">
            <span class="card-title white-text">Beautiful picture!<i class="material-icons right">expand_more</i></span>
            <p class="white-text">Author did not provide any additional information.</p>
            <a class="waves-effect waves-light btn modal-trigger black" href="#description">More info</a>
          </div>
        </div>
      </div>
    </div>
  )

  

  return (
    <div class="container">
      {photoCards}
      <div id="description" class="modal purple darken-4">
        <div class="modal-content">
          <h4 class="white-text">Author did not provide any additional information.</h4>
          <p class="white-text">As was mentioned earlier...</p>
        </div>
        <div class="modal-footer purple darken-4">
          <a href="#!" class="modal-close waves-effect black-green btn-flat black white-text">Agree</a>
        </div>
      </div>
    </div>
  )
}
