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
    isMobile: false,
    transition: {
      from: {
        position: 'absolute',
        opacity: 0,
        top: '20%',
        overflow: 'hidden'
      },
      enter: { opacity: 1, top: '0%', overflow: 'auto' },
      leave: { opacity: 0, top: '-10px ', overflow: 'hidden' }
    }
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
  changingRoute = (item) => {
    console.log(item);
    if (window.sessionStorage.currentMenuItem > item.id) {
      console.log('direction down');
      this.setState({
        transition: {
          from: {
            position: 'absolute',
            opacity: 0,
            top: '-20%',
            // transform: 'translate(0%,-20%) ',

            overflow: 'hidden'
          },
          enter: { opacity: 1, top: '0%', overflow: 'auto' },
          leave: { opacity: 0, top: '10px', overflow: 'hidden' }
        }
      })
    } else {
      console.log('direction up');
      this.setState({
        transition: {
          from: {
            position: 'absolute',
            opacity: 0,
            top: '20%',

            overflow: 'hidden'
          },
          enter: { opacity: 1, top: '0%', overflow: 'auto' },
          leave: { opacity: 0, top: '-10px', overflow: 'hidden' }
        }
      })
    }
    window.sessionStorage.setItem('navigated', true)
    window.sessionStorage.setItem('currentMenuItem', item.id);
    // history.push(menuItem.path);

  }
  render() {
    const { isMobile, transition } = this.state;

    // setup the routes
    return (
      <BrowserRouter>
        <Switch>
          <MainComponent isMobile={isMobile} changingRoute={this.changingRoute}>

            <Route
              render={({ location, ...rest }) => (

                <Transition
                  config={{ duration: 1000, delay: 100, easing: easings.easeCubic }}
                  native
                  items={location}
                  keys={location.pathname.split('/')[1]}
                  from={transition.from}
                  enter={transition.enter}
                  leave={transition.leave}>
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
