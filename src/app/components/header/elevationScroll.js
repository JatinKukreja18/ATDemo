import React from 'react';
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

function ElevationScroll(props) {
  const { children, rootEl } = props;

  let el = rootEl ? document.querySelector(rootEl) : null;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: el ? el : window,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    // changing position to be always sticky
    position: trigger ? 'sticky' : 'sticky',
    className: trigger ? `${children.props.className} scroll-triggered` : `${children.props.className}`
  });
}


ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired
};

export default ElevationScroll;