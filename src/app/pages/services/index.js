import React, { Component } from 'react';
import Slide from '@material-ui/core/Slide';
import LeftSection from './leftSection';
import RightSection from './rightSection';
import { Transition, animated } from 'react-spring/renderprops'

import "./services.scss";

const ServicesIndexComponent = ({ style, isMobile }) => {

  return (
    <animated.div className='services-container' style={{ ...style }}>
      <LeftSection />
      <RightSection isMobile={isMobile} />
    </animated.div>
  );
}
export default ServicesIndexComponent