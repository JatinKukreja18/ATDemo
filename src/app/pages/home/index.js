import React, { Component } from 'react';
import Slide from '@material-ui/core/Slide';
import VerticalCarousel from "../../components/verticalCarousel/verticalCarousel";
import { animated } from 'react-spring/renderprops'

import { SCREEN_LIST } from "./home.const";

const HomeIndexComponent = ({ style, isMobile }) => {

  return (
    // <Slide direction="right" in={true} timeout={1000}>
    <animated.div style={{ ...style }}>
      <VerticalCarousel data={SCREEN_LIST} />
    </animated.div>
  );
}
export default HomeIndexComponent;