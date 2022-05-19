import React from 'react'
import M from "materialize-css";

export default function PhotoGrid (props) {

  React.useEffect(() => {
    M.AutoInit()
  }, []);

  return (
    <div class="row">
      <div class="fixed-action-btn ">
        <a href="#" class="btn-floating red btn-large left-align grey darken-4"><i class="large material-icons">mode_edit</i></a>
        <ul>
          <li>
            <a href="#" class="btn-floating grey darken-4 btn-large"><i class="large material-icons">format_quote</i></a>
          </li>
          <li>
            <a href="#" class="btn-floating deep-purple darken-4 btn-large"><i class="large material-icons">insert_chart</i></a>
          </li>
          <li>
            <a href="#" class="btn-floating grey darken-4 btn-large"><i class="large material-icons">publish</i></a>
          </li>
          <li>
            <a href="#" class="btn-floating deep-purple darken-4 btn-large"><i class="large material-icons">attach_file</i></a>
          </li>
        </ul>
      </div>
    </div>
  )
}