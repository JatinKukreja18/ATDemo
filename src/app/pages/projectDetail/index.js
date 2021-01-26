import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import DesktopMenuComponent from '../../components/menu/desktop/menu.desktop';
import MobileMenuComponent from "../../components/menu/mobile/menu.mobile";
import { PROJECT_LIST } from "../projects/projects.const";
import { Spring, animated } from 'react-spring/renderprops'
import { initialAnimationState, finalAnimationState } from '../../utils/animationHelper';

import './projectDetail.scss';

class ProjectDetailsIndexComponent extends Component {

  state = {
    project: undefined
  };

  componentDidMount() {
    const { projectId, location } = this.props;
    let project;

    if (projectId) {
      project = PROJECT_LIST.find(project => project.id === projectId);
    } else if (location.pathname) {
      project = PROJECT_LIST.find(project => project.id === location.pathname.substring(10));
    }
    // scroll to Top
    window.scrollTo(0, 0);
    this.setState({
      project: project
    });
  }
  animationEnds = (props) => {
    console.log(props);
    if (!this.state.reverseAnimation) {
      this.setState({ showPage: !this.state.showPage })
    }
  }
  backButtonClickHandler = () => {
    const f = finalAnimationState();
    const rect = document.querySelector('#c-item-' + this.props.currentCard).getBoundingClientRect();
    const t = initialAnimationState(rect);

    this.setState({ showPage: !this.state.showPage, reverseAnimation: true, reversePosition: { from: f, to: t } }, () => {
      console.log('backing');
      setTimeout(() => {

        this.props.history.push('/projects')
      }, 300);
    })

  }

  renderDesktopView = () => {
    const { project, reverseAnimation, reversePosition } = this.state;
    const { isMobile, subId, location, animation } = this.props;
    const DetailComponent = project.detailsComponent;
    // const subId = location.hash.substring(1);
    console.log(subId);
    if (animation) {
      return (
        <>
          {this.state.showPage ?
            <Spring
              from={{ opacity: '0' }}
              to={{ opacity: '1' }} config={{ duration: 1000 }}>
              {props =>
                <div className=' am-modal-page' id={project.id + '-content'}>
                  <div className='content' style={{ opacity: props.opacity, height: 'auto' }}>
                    <DetailComponent project={project} isMobile={isMobile} backButtonClickHandler={this.backButtonClickHandler} subId={subId} />
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

                }} className='desktop-view am-modal-page'>
                  {/* <DesktopMenuComponent refreshHandler={this.backButtonClickHandler} /> */}
                </div>}
            </Spring>

          }
        </>

      );
    }
    // return (
    //   <div className='desktop-view'>
    //     <DesktopMenuComponent refreshHandler={this.backButtonClickHandler}/>
    //     <div className='content'>
    //       <DetailComponent project={project} isMobile={isMobile} backButtonClickHandler={this.backButtonClickHandler} subId={subId}/>
    //     </div>
    //   </div>
    // );
  }

  renderMobileView = () => {
    const { project } = this.state;
    const { isMobile, subId } = this.props;
    const DetailComponent = project.detailsComponent;
    return (
      <div className='mobile-view'>
        <MobileMenuComponent refreshHandler={this.backButtonClickHandler} />
        <div className='content'>
          <DetailComponent project={project} isMobile={isMobile} backButtonClickHandler={this.backButtonClickHandler} subId={subId} />
        </div>
      </div>
    );
  }

  render() {
    const { project } = this.state;
    const { isMobile } = this.props;
    console.log('here too');
    console.log(project);
    console.log(isMobile);
    if (project) {
      return (
        <>
          {isMobile ? this.renderMobileView() : this.renderDesktopView()}
        </>
      );
    }
    return null;
  }
}

export default withRouter(ProjectDetailsIndexComponent);