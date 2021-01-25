import React, { Component } from 'react';
import { BrowserRouter, HashRouter as Router, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import MainComponent from '../pages/main/main';
import HomePage from '../pages/home';
import ServicesPage from '../pages/services';
import ProductsPage from '../pages/projects';
import ProductDetailPage from '../pages/projectDetail';
import ServiceDetailPage from '../pages/serviceDetail';
import InquiriesPage from '../pages/inquiries';
import isMobileDevice from '../utils/isMobileDevice';
import { DEFAULT, SERVICES, PROJECTS, INQUIRY } from './routes.const';
import { Transition, animated } from 'react-spring/renderprops'
// import "./transitions.scss";
import * as easings from 'd3-ease'

export default class Routes extends Component {

  state = {
    isMobile: false
  };

  componentDidMount() {
    // check if it is a mobile device on load
    this.setMobileFlag();

    // add an event listener to check the mobile view on resize
    window.addEventListener('resize', this.setMobileFlag);
  }

  setMobileFlag = () => {
    const mobileDeviceFlag = isMobileDevice();
    if (mobileDeviceFlag) {
      document.body.classList.add('mobile');
    } else {
      document.body.classList.remove('mobile');
    }
    this.setState({
      isMobile: mobileDeviceFlag
    });
  }

  render() {
    const { isMobile } = this.state;

    // setup the routes
    return (
      <BrowserRouter>
        <Switch>
          <MainComponent isMobile={isMobile}>

            <Route
              render={({ location, ...rest }) => (

                <Transition
                  config={{ duration: 1000, delay: 100, easing: easings.easeCubic }}
                  native
                  items={location}
                  keys={location.pathname.split('/')[1]}
                  from={{
                    position: 'absolute',
                    opacity: 0,
                    transform: 'translate(0%,20%) ',
                    transformOrigin: 'top'
                  }}
                  enter={{ opacity: 1, transform: 'translate(0%,0) ', transformOrigin: 'top' }}
                  leave={{ opacity: 0, transform: 'translate(0%,-10px) ', transformOrigin: 'top' }}>
                  {(loc, state) => style => (
                    <Switch location={state === 'update' ? location : loc}>
                      <Route
                        path={SERVICES}
                        render={props => ServicesPage({ ...props, style, isMobile })}
                      />
                      <Route
                        path={DEFAULT}
                        render={props => HomePage({ ...props, style, isMobile })}
                      />
                      <Route
                        path={PROJECTS}
                        render={props => ProductsPage({ ...props, style, isMobile })}
                      />
                      <Route path={INQUIRY}>
                        <InquiriesPage isMobile={isMobile} style={style} />
                      </Route>
                      <Route
                        path={'/'}
                        render={props => HomePage({ ...props, style, isMobile })}
                      />
                      {/* <Route
                        path={INQUIRY}
                        render={props => InquiriesPage({ ...props, style, isMobile })}
                      /> */}
                      {/* <Route render={() => <div>Not Found</div>} /> */}
                      {/* <Route path={SERVICES}>
                              <ServicesPage isMobile={isMobile} style={style} />
                            </Route> */}
                      {/* <Route exact path={PROJECTS}>
                        <ProductsPage isMobile={isMobile} style={style} />
                      </Route> */}
                      <Route path={`${SERVICES}/:serviceId`}>
                        <ServiceDetailPage isMobile={isMobile} style={style} />
                      </Route>
                      <Route exact path={`${PROJECTS}/:projectId`}>
                        <ProductDetailPage isMobile={isMobile} style={style} />
                      </Route>

                      <Route path={DEFAULT}>
                        <HomePage isMobile={isMobile} style={style} />
                      </Route>
                    </Switch>
                    // <Switch location={state === 'update' ? location : loc}>
                    //   <Route
                    //     path="/red"
                    //     render={props => ServicesPage({ ...props, style, isMobile })}
                    //   />
                    //   <Route
                    //     path="/green"
                    //     render={props => HomePage({ ...props, style, isMobile })}
                    //   />
                    //   <Route render={() => <div>Not Found</div>} />
                    // </Switch>
                  )}
                </Transition>
              )}
            />

          </MainComponent>
        </Switch>
      </BrowserRouter>
    );
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setMobileFlag);
  }

}
