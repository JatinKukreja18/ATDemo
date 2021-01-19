import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import DesktopMenuComponent from '../../components/menu/desktop/menu.desktop';
import MobileMenuComponent from "../../components/menu/mobile/menu.mobile";

import { SERVICE_LIST } from "../services/services.const";

import './serviceDetail.scss';

class ServiceDetailsIndexComponent extends Component {

  state = {
    service: undefined
  };

  componentDidMount() {
    const { serviceId } = this.props;
    // scroll to Top
    window.scrollTo(0, 0);
    const service = SERVICE_LIST.find(service => service.id === serviceId);
    this.setState({
      service: service
    });

  }

  backButtonClickHandler = () => {
    this.props.closeDialog();
  }

  renderDesktopView = () => {
    const {service} = this.state;
    const {isMobile, subId} = this.props;
    const DetailComponent = service.detailsComponent;
    return (
      <div className='desktop-view'>
        <DesktopMenuComponent refreshHandler={this.backButtonClickHandler} />
        <div className='content'>
          <DetailComponent service={service} isMobile={isMobile} backButtonClickHandler={this.backButtonClickHandler} subId={subId}/>
        </div>
      </div>
    );
  }

  renderMobileView = () => {
    const {service} = this.state;
    const {isMobile, subId} = this.props;
    const DetailComponent = service.detailsComponent;
    return (
      <div className='mobile-view'>
        <MobileMenuComponent refreshHandler={this.backButtonClickHandler}/>
        <div className='content'>
          <DetailComponent service={service} isMobile={isMobile} backButtonClickHandler={this.backButtonClickHandler} subId={subId}/>
        </div>
      </div>
    );
  }

  render () {
    const {service} = this.state;
    const {isMobile} = this.props;

    if (service) {
      return (
        <Container disableGutters maxWidth={false} className='main-container'>
          {isMobile ? this.renderMobileView() : this.renderDesktopView()}
        </Container>
      );
    }
    return null;
  }
}

export default withRouter(ServiceDetailsIndexComponent);