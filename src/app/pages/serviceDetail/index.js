import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import DesktopMenuComponent from '../../components/menu/desktop/menu.desktop';
import MobileMenuComponent from "../../components/menu/mobile/menu.mobile";

import { SERVICE_LIST } from "../services/services.const";
import { animated } from 'react-spring/renderprops'

import './serviceDetail.scss';

class ServiceDetailsIndexComponent extends Component {

  state = {
    service: undefined
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
    this.props.history.push('/services')
  }

  renderDesktopView = () => {
    const { service } = this.state;
    const { isMobile, style, location } = this.props;
    const DetailComponent = service.detailsComponent;
    console.log(location.hash);
    const subId = location.hash.substring(1);
    return (
      <animated.div style={{ ...style }} className='desktop-view am-modal-page' id={service.id + '-content'}>
        {/* <DesktopMenuComponent refreshHandler={this.backButtonClickHandler} /> */}
        <div className='content'>
          <DetailComponent service={service} isMobile={isMobile} backButtonClickHandler={this.backButtonClickHandler} subId={subId} />
        </div>
      </animated.div>
    );
  }

  renderMobileView = () => {
    const { service } = this.state;
    const { isMobile, location } = this.props;
    const DetailComponent = service.detailsComponent;
    console.log(location.hash);
    const subId = location.hash.substring(1);
    return (
      <div className='mobile-view'>
        <MobileMenuComponent refreshHandler={this.backButtonClickHandler} />
        <div className='content'>
          <DetailComponent service={service} isMobile={isMobile} backButtonClickHandler={this.backButtonClickHandler} subId={subId} />
        </div>
      </div>
    );
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