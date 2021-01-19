import React, { Component } from 'react';
import CopyrightIcon from '@material-ui/icons/Copyright';

import "./copyright.scss";

export default class CopyrightComponent extends Component {
  render() {
    return(
      <div className='copyright'>
        Copyright <CopyrightIcon style={{verticalAlign: 'bottom'}}/> 2020. All rights reserved.
      </div>
    );
  }
}
