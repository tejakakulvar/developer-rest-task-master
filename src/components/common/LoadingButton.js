/**
 * LoadingButton.react.js
 *
 * Wraps the loading indicator in a tag with the .btn--loading class
 */

import React from 'react';
import LoadingIndicator from './LoadingIndicator';
import cssmodules from 'react-css-modules';
import styles from './loadingindicator.cssmodule.scss';


function LoadingButton(props) {
  return(
    <a href="#" className={props.className + " btn btn--loading"} disabled="true">
      <LoadingIndicator />
    </a>
  )
}

export default cssmodules(LoadingButton, styles);
