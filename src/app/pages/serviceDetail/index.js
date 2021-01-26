import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import DesktopMenuComponent from '../../components/menu/desktop/menu.desktop';
import MobileMenuComponent from "../../components/menu/mobile/menu.mobile";

import { SERVICE_LIST } from "../services/services.const";
import { Spring, animated } from 'react-spring/renderprops'

import { initialAnimationState, finalAnimationState, finalAnimationStateMobile, initialAnimationStateMobile } from '../../utils/animationHelper';
import './serviceDetail.scss';

class ServiceDetailsIndexComponent extends Component {

  state = {
    service: undefined,
    showPage: false,
    reverseAnimation: false,
    reversePosition: {
      from: {},
      to: {}
    }
  };

  componentDidMount() {
    const { serviceId, location } = this.props;
    let service;
    if (serviceId) {
      service = SERVICE_LIST.find(service => service.id === serviceId);
    } else if (location.pathname) {
      service = SERVICE_LIST.find(service => service.id === location.pathname.substring(10));
    }
    // scroll to Top
    window.scrollTo(0, 0);

    this.setState({
      service: service
    });

  }

  backButtonClickHandler = () => {
    let f;
    let rect;
    let t;
    if (this.props.isMobile) {
      console.log(this.props.currentCard);
      f = finalAnimationStateMobile();
      rect = document.querySelector('#c-item-' + this.props.currentCard).getBoundingClientRect();
      t = initialAnimationStateMobile(rect);
    } else {

      f = finalAnimationState();
      rect = document.querySelector('#c-item-' + this.props.currentCard).getBoundingClientRect();
      t = initialAnimationState(rect);
    }

    this.setState({ showPage: !this.state.showPage, reverseAnimation: true, reversePosition: { from: f, to: t } }, () => {
      console.log('backing');
      setTimeout(() => {

        this.props.history.push('/services')
      }, 300);
    })

  }
  animationEnds = (props) => {
    console.log(props);
    if (!this.state.reverseAnimation) {
      this.setState({ showPage: !this.state.showPage })
    }
  }

  renderDesktopView = () => {
    const { service, reverseAnimation, reversePosition } = this.state;
    const { isMobile, style, location, animation } = this.props;
    const DetailComponent = service.detailsComponent;
    console.log(animation);
    const subId = location.hash.substring(1);
    if (animation) {
      return (
        <>
          {this.state.showPage ?
            <Spring
              from={{ opacity: '0' }}
              to={{ opacity: '1' }} config={{ duration: 1000 }}>
              {props =>
                <div className=' am-modal-page' id={service.id + '-content'}>
                  <div className='content' style={{ opacity: props.opacity, height: 'auto' }}>
                    <DetailComponent service={service} isMobile={isMobile} backButtonClickHandler={this.backButtonClickHandler} subId={subId} />
                  </div>
                </div>}
            </Spring>
            :
            <Spring
              from={reverseAnimation ? reversePosition.from : animation?.from}
              to={reverseAnimation ? reversePosition.to : animation?.to} config={reverseAnimation ? { duration: 300 } : { duration: 500 }}
              onRest={this.animationEnds}>
              {props =>
                <div style={{
                  ...props, position: "absolute",
                  left: 0,
                  right: 0

                }} className={'desktop-view am-modal-page'}>
                  {/* <DesktopMenuComponent refreshHandler={this.backButtonClickHandler} /> */}
                </div>}
            </Spring>

          }
        </>

      );
    }

  }

  renderMobileView = () => {
    const { service, reverseAnimation, reversePosition } = this.state;
    const { isMobile, style, location, animation } = this.props;
    const DetailComponent = service.detailsComponent;
    console.log(animation);
    const subId = location.hash.substring(1);
    if (animation) {
      return (
        <>
          {this.state.showPage ?
            <Spring
              from={{ opacity: '0' }}
              to={{ opacity: '1' }} config={{ duration: 1000 }}>
              {props =>
                <div className=' am-modal-page' id={service.id + '-content'}>
                  <div className='content' style={{ opacity: props.opacity, height: 'auto' }}>
                    <DetailComponent service={service} isMobile={isMobile} backButtonClickHandler={this.backButtonClickHandler} subId={subId} />
                  </div>
                </div>}
            </Spring>
            :
            <Spring
              from={reverseAnimation ? reversePosition.from : animation?.from}
              to={reverseAnimation ? reversePosition.to : animation?.to} config={reverseAnimation ? { duration: 300 } : { duration: 500 }}
              onRest={this.animationEnds}>
              {props =>
                <div style={{
                  ...props, position: "fixed"

                }} className={'desktop-view am-modal-page'}>
                  {/* <DesktopMenuComponent refreshHandler={this.backButtonClickHandler} /> */}
                </div>}
            </Spring>

          }
        </>

      );
    }
  }

  render() {
    const { service } = this.state;
    const { isMobile, style } = this.props;

    if (service) {
      return (
        <>
          {isMobile ? this.renderMobileView() : this.renderDesktopView()}
        </>
      );
    }
    return null;
  }
}

export default withRouter(ServiceDetailsIndexComponent);