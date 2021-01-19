import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import DownIcon from '../../../../assets/down-icon.svg';
import { SCREEN_LIST } from '../home.const';
import { Spring, config } from 'react-spring/renderprops'

import "./homeScreen1.scss";

export default class HomeScreen1Component extends Component {

  updateSpotlight = (e) => {
    const spotlight = document.querySelector('.screen1-backdrop');
    let spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.5) 200px)';
    const conatinerWidth = .75 * window.innerWidth;
    const offsetX = ((e.pageX - (.25 * window.innerWidth)) / (conatinerWidth)) * 100;
    console.log(e.pageX - (.25 * window.innerWidth));
    console.log(conatinerWidth);
    console.log(offsetX + '%');
    spotlight.style.backgroundImage = `radial-gradient(circle at ${offsetX}% ${e.pageY / spotlight.offsetHeight * 100}%, ${spotlightSize}`;
  }

  render() {
    const { changeActive, className } = this.props;
    const classes = className ? `${className} screen1-container` : 'screen1-container';
    let delay = 3000;
    if (window.sessionStorage.getItem('navigated')) {
      delay = 1200;
    }
    return (
      <div className={classes} onMouseMove={this.updateSpotlight} onTouchMove={this.updateSpotlight}>
        {/* <div className='screen1-bg-image' /> */}
        <div className='screen1-backdrop'>
          <Spring
            config={{ duration: 800, delay: delay }}
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}>
            {props =>
            (<div style={props} className='screen1-content'>
              <div className='screen1-header'>AM Tech LLC</div>
              <div className='screen1-subheader'>
                Custom Electronics Design
          </div>
              <div className='screen1-subheader'>
                Solutions for growing your business
          </div>
              <div className='screen1-subheader'>
                Improve your Products
          </div>
              <p className='subtext'>
                Does your company have a great design that needs automation? Do you have
                an amazing idea for a brand-new technology? We want to help you build your
                product. We do everything from hardware design, firmware implementation,
                software design and everything in between.
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