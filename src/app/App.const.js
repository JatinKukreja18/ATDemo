import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import { IconButton } from '@material-ui/core';


export const OLD_CAROUSEL_CONFIG = {
  className: 'am-carousel',
  autoPlay: true,
  animation:'slide',
  timeout: 1500,
  navButtonsAlwaysVisible:true,
  indicators: false,
  fullHeightHover:false
};


export const CAROUSEL_CONFIG = {
  axis: 'horizontal',
  showArrows: true,
  showStatus: false,
  showIndicators: false,
  infiniteLoop: false,
  showThumbs: false,
  useKeyboardArrows: false,
  autoPlay: false,
  stopOnHover: true,
  swipeable: true,
  dynamicHeight: false,
  emulateTouch: true,
  interval: 3000,
  transitionTime: 500,
  swipeScrollTolerance: 150,
  centerMode: false,
  centerSlidePercentage: 70,
  renderArrowPrev: (onClickHandler, hasPrev, label) => (
    <div className='prev-btn-container'>
      <IconButton variant="contained" className='am-carousel-arrow-buttons prev-btn' disabled={!hasPrev} onClick={onClickHandler}>
        <KeyboardArrowLeftIcon />
      </IconButton>
    </div>
  ),
  renderArrowNext: (onClickHandler, hasNext, label) => (
    <div className='next-btn-container'>
      <IconButton variant="contained" className='am-carousel-arrow-buttons next-btn' disabled={!hasNext} onClick={onClickHandler}>
        <KeyboardArrowRightIcon />
      </IconButton>
    </div>
  )
};