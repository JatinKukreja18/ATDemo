import React, { Component } from "react";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import ElevationScroll from "./elevationScroll";

import './header.scss';

export default class Header extends Component {

  renderBreadcrumbs = () => {
    const { breadcrumbs } = this.props;
    if (!breadcrumbs) {
      return (
        <Breadcrumbs className='breadcrumb-container' style={{ visibility: 'hidden' }}>
          <Typography className='breadcrumb'>&nbsp;</Typography>
        </Breadcrumbs>
      );
    }
    return breadcrumbs;
  }

  render() {
    const { title, className, rootEl } = this.props;
    const classes = className ? `am-header ${className}` : 'am-header';
    console.log(rootEl);
    return (
      <React.Fragment>
        <ElevationScroll rootEl={rootEl ? rootEl : null}>
          <AppBar className={classes} position='sticky'>
            <div className='overlay-header'></div>
            <Toolbar className=''>
              <div className='title-container'>
                <Typography variant="h1" className='title'>{title}</Typography>
                {this.renderBreadcrumbs()}
              </div>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </React.Fragment>
    );
  }
}


Header.propTypes = {
  title: PropTypes.string.isRequired,
  breadcrumbs: PropTypes.element,
  className: PropTypes.string
};