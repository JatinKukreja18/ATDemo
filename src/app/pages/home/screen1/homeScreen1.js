import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import DownIcon from '../../../../assets/down-icon.svg';
import { SCREEN_LIST } from '../home.const';
import { Spring, config } from 'react-spring/renderprops'

import "./homeScreen1.scss";

let lastTouchPoint = 0;
export default class HomeScreen1Component extends Component {

  updateSpotlight = (e) => {
    const spotlight = document.querySelector('.screen1-backdrop');
    let spotlightSize = 'transparent 100px, rgba(0, 0, 0, 0.5) 150px)';
    const conatinerWidth = .75 * window.innerWidth;
    if (e.pageX) {
      const offsetX = ((e.pageX - (.25 * window.innerWidth)) / (conatinerWidth)) * 100;
      // console.log(e.pageX - (.25 * window.innerWidth));
      // console.log(conatinerWidth);
      // console.log(offsetX + '%');
      spotlight.style.backgroundImage = `radial-gradient(circle at ${offsetX}% ${e.pageY / spotlight.offsetHeight * 100}%, ${spotlightSize}`;
    }
    else if (e.touches[0].clientX) {
      if (lastTouchPoint < e.touches[0].clientX) {
        // console.log('load next');
      }
      lastTouchPoint = e.touches[0].clientX
      // const offsetX = ((e.touches[0].clientX - (.25 * window.innerWidth)) / (conatinerWidth)) * 100;
      // spotlight.style.backgroundImage = `radial-gradient(circle at ${offsetX}% ${e.touches[0].clientY / spotlight.offsetHeight * 100}%, ${spotlightSize}`;
    }
  }

  render() {
    const { changeActive, className } = this.props;
    const classes = className ? `${className} screen1-container` : 'screen1-container';
    let delay = 1200;
    if (window.sessionStorage.getItem('navigated')) {
      delay = 1200;
    }
    return (
      <div className={classes} onMouseMove={this.updateSpotlight} onTouchMove={this.updateSpotlight}>
        {/* <div className='screen1-bg-image' /> */}
        <div className='screen1-backdrop'>
          <Spring
            config={{ duration: 500, delay: delay }}
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}>
            {props =>
            (<div style={props} className='screen1-content'>
              <div className='screen1-header'>Welcome to AM Tech!</div>
              <div className='screen1-subheader'>
                Solutions to grow your business
              <br />
              with customs electronics Design
              </div>
              <p className='subtext'>
                Welcome to AM Tech!
              <br />
              We build great electronic products from concept
              <br />
              to implementation. We specialize in embedded systems,
              <br />
              IoT connections and automation systems.
              <br />
              </p>
            </div>)
            }
          </Spring>
          <div className='actions-container'>
            <IconButton className='action-button' onClick={changeActive.bind(this, SCREEN_LIST[1].id)}>
              <img src={DownIcon} alt='Next' />
            </IconButton>
          </div>


        </div>
      </div>
    );
  }
}