import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";
import { Route, Switch, withRouter } from 'react-router-dom';
import Card from '../../components/card/card';
import ServiceDetailsPage from '../serviceDetail';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import IconButton from '@material-ui/core/IconButton';
import Zoom from '@material-ui/core/Zoom';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { SERVICE_LIST } from "./services.const";
import { CAROUSEL_CONFIG } from "../../App.const";
import { Spring, Transition, animated } from 'react-spring/renderprops'
import * as easings from 'd3-ease'
import { initialAnimationState, finalAnimationStateMobile, initialAnimationStateMobile, finalAnimationState } from '../../utils/animationHelper';

import "./services.scss";


const DIRECTIONS = {
  LEFT: 'left',
  RIGHT: 'right'
};

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Zoom ref={ref} {...props} timeout={500} />;
// });
// 

// Right Section with carousel
class RightSectionComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      serviceId: '',
      subId: '',
      detailsOpen: false,
      currentCard: 0,
      direction: DIRECTIONS.RIGHT,
      fromAnimation: {
        height: `calc(0vh + 20px)`,
        width: `calc(0% + 20px)`,
        transform: `translate(calc(0px - 50px), 50px)`,
        background: '#ffffff',
        borderRadius: 12,
        overflow: 'hidden'
      },
      toAnimation: finalAnimationState(),
      toAnimationMobile: finalAnimationStateMobile()
    };
  }

  openDialog = () => {
    // this.setState({
    //   detailsOpen: true
    // });
  }

  closeDialog = () => {
    // this.setState({
    //   detailsOpen: false
    // });
    // console.log(this.subId);
    this.setState({
      fromAnimation: finalAnimationState,
    }, () => {
      // console.log(this.state.fromAnimation);
      this.props.history.push('/services');
    })
  }

  onAnimationEnd = (event) => {
    event.target.classList.add("hidden");
  }
  mobileSlideChange = (v) => {
    // console.log(v);
    // console.log(this.state.currentCard);
    this.setState({
      currentCard: v,
      direction: this.state.currentCard < v ? DIRECTIONS.LEFT : DIRECTIONS.RIGHT
    });
  }
  onPrevClickHandler = () => {

    this.setState({
      currentCard: this.state.currentCard === 0 ? 0 : this.state.currentCard - 1,
      direction: DIRECTIONS.LEFT
    });
  }

  onNextClickHandler = () => {
    const newCardNumber = this.state.currentCard === SERVICE_LIST.length - 1 ? this.state.currentCard : this.state.currentCard + 1;
    this.setState({
      currentCard: newCardNumber,
      direction: DIRECTIONS.RIGHT
    });
  }

  linkClickHandler = (serviceId, subId, index) => {
    // this.setState({
    //   serviceId: serviceId,
    //   subId: subId ? subId : ''
    // }, () => {
    //   // this.openDialog();
    //   console.log(this.props);
    //   console.log(serviceId);
    // });
    // console.log(index);
    const rect = document.querySelector('#c-item-' + index).getBoundingClientRect();
    if (this.props.isMobile) {
      this.setState({
        fromAnimation: initialAnimationStateMobile(rect, document.querySelector('.services-container').scrollTop),
      }, () => {
        // console.log(document.querySelector('.services-container').scrollTop);
        // console.log(this.state.fromAnimation);
        this.props.history.push(this.props.match.path + '/' + serviceId + '#' + subId);
      })
    } else {
      this.setState({
        fromAnimation: initialAnimationState(rect),
      }, () => {
        // console.log(this.state.fromAnimation);
        this.props.history.push(this.props.match.path + '/' + serviceId + '#' + subId);
      })
    }
  }

  renderMobileView = () => {
    return (
      <div className='second-section'>
        <Carousel {...CAROUSEL_CONFIG} onChange={this.mobileSlideChange}>
          {
            SERVICE_LIST.map((item, i) => {
              return (
                <div key={i} id={`c-item-${i}`} className={`carousel-item`}>
                  <Card item={item} linkClickHandler={this.linkClickHandler} index={i} />
                </div>
              );
            })
          }
        </Carousel>

      </div>
    )
  }

  renderDesktopView = () => {
    const { currentCard, direction } = this.state;
    return (
      <div className='second-section'>
        <div className='carousel-item-container'>
          {
            SERVICE_LIST.map((item, i) => {
              let classes = '';
              if (i === currentCard) {
                classes = 'active';
              } else if (i < currentCard) { // prev card
                classes = 'old';
              } else { // next card
                classes = 'new';
              }

              classes = `${classes} ${direction}`;
              let props = {};
              if (i < currentCard) {
                props = direction === DIRECTIONS.RIGHT ? {
                  onAnimationEnd: this.onAnimationEnd
                } : {
                    onAnimationStart: this.onAnimationEnd
                  }
              }

              return (
                <div key={i} id={`c-item-${i}`} className={`carousel-item ${classes}`} {...props}>
                  <Card item={item} linkClickHandler={this.linkClickHandler} index={i} />
                </div>
              );
            })
          }
          <div className='carousel-item' style={{ visibility: 'hidden' }}>
            <Card item={{}} />
          </div>
        </div>
        <div className='arrow-buttons-container'>
          <div className='prev-btn-container'>
            <IconButton variant="contained" className='arrow-buttons prev-btn' onClick={this.onPrevClickHandler} disabled={currentCard === 0}>
              <KeyboardArrowLeft />
            </IconButton>
          </div>
          <div className='next-btn-container'>
            <IconButton variant="contained" className='arrow-buttons next-btn' onClick={this.onNextClickHandler} disabled={currentCard === SERVICE_LIST.length - 1}>
              <KeyboardArrowRight />
            </IconButton>
          </div>
        </div>
      </div>
    );
  }
  render() {
    const { isMobile, location } = this.props;
    const { detailsOpen, serviceId, subId, fromAnimation, toAnimation, toAnimationMobile, currentCard } = this.state;
    const calculatedAnimation = { from: fromAnimation, to: isMobile ? toAnimationMobile : toAnimation }
    // console.log(calculatedAnimation);
    return (
      <>
        {isMobile ? this.renderMobileView() : this.renderDesktopView()}

        {/* <Spring
          config={{ duration: 1000, easing: easings.easeCubic }}
          native
          items={location}
          keys={location.pathname.split('/')[2]}
          from={fromAnimation}
          to={toAnimation}>
            
          {(loc, state) => style => ( */}

        {/* <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}>
          {props => <div style={props}> */}
        <Switch>
          {SERVICE_LIST.map((item, i) => {
            return (
              <Route
                exact

                key={i + 'route'}
                path={'/services/' + item.id}
                render={() => (
                  <ServiceDetailsPage
                    animation={calculatedAnimation}
                    isMobile={isMobile}
                    serviceId={item.id}
                    subId={subId}
                    closeDialog={this.closeDialog}
                    currentCard={currentCard} />
                )}
              />
            );
          })}
        </Switch>
        {/* </div>}
        </Spring> */}

        {/* )} */}
        {/* </Spring> */}


      </>
    );
  }
}

// withRouter adds history object to props. It is High Order Component
export default withRouter(RightSectionComponent);