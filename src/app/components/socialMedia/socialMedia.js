import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import {FB_PAGE, LINKEDIN_PAGE, TWITTER_PAGE} from './socialMedia.const';

import "./socialMedia.scss";

export default class SocialMediaComponent extends Component {

  redirectOutside = (url) => {
    window.open(url, "_blank");
  }

  render() {
    
    return (
      <>
        <span className='social-media-text'>Find us on </span>
        <span className='social-media-links-container'>
          <IconButton className='sm-icon facebook-icon-button' onClick={this.redirectOutside.bind(this, FB_PAGE)}>
            <FacebookIcon className='icon'/>
          </IconButton>
          <IconButton className='sm-icon linkedin-icon-button' onClick={this.redirectOutside.bind(this, LINKEDIN_PAGE)}>
            <LinkedInIcon className='icon'/>
          </IconButton>
          <IconButton className='sm-icon twitter-icon-button' onClick={this.redirectOutside.bind(this, TWITTER_PAGE)}>
            <TwitterIcon className='icon'/>
          </IconButton>
        </span>
      </>
    );
  }
}