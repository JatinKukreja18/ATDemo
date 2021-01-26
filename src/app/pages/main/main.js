import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Loader from '../../components/loader/loader';
import DesktopMenuComponent from '../../components/menu/desktop/menu.desktop';
import MobileMenuComponent from "../../components/menu/mobile/menu.mobile";
import { Spring, Transition } from 'react-spring/renderprops'

import './main.scss';
// This is the main component. It will include the HTML common for all the tabs and will be rendered once
export default class IndexComponent extends Component {

  state = {
    loading: true
  };

  componentDidMount() {
    window.addEventListener('onload', function () {
      console.log('loader off');
    })
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  }

  renderDesktopView = () => {
    const { children } = this.props;
    return (
      <div className='desktop-view'>
        <Spring
          config={{ duration: 800, delay: 200 }}
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}>
          {props =>

            <DesktopMenuComponent style={props} changingRoute={this.props.changingRoute} />}
        </Spring>
        {/* <Spring
          config={{ duration: 800, }}
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}>
          {props =>
          ( */}
        <div className='content' >
          {children}
        </div>
        {/* )}
        </Spring> */}
      </div>
    );
  }

  renderMobileView = () => {
    const { children } = this.props;
    return (
      <div className='mobile-view'>
        <MobileMenuComponent />
        <div className='content'>
          {children}
        </div>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    const { isMobile } = this.props;
    window.onbeforeunload = function (e) { sessionStorage.clear(); };

    return (
      <>
        <svg className='gradient-svg'>
          <linearGradient id="amGradient">
            <stop offset="5%" stopColor="#00f08a"></stop>
            <stop offset="95%" stopColor="#009bff"></stop>
          </linearGradient>
        </svg>

        {
          loading ? <Loader /> : <Container disableGutters maxWidth={false} className='main-container'>
            {isMobile ? this.renderMobileView() : this.renderDesktopView()}
          </Container>
        }
      </>
    );
  }
}
