import React, { Component } from 'react';
import LeftSection from './leftSection';
import RightSection from './rightSection';
import { animated } from 'react-spring/renderprops'

import "./projects.scss";

const ProjectsIndexComponent = ({ isMobile, style }) => {

  return (

    <animated.div className='projects-container' style={{ ...style }}>
      <LeftSection />
      <RightSection isMobile={isMobile} />
    </animated.div>
  );
}

export default ProjectsIndexComponent