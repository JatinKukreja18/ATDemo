import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import DesktopMenuComponent from '../../components/menu/desktop/menu.desktop';
import MobileMenuComponent from "../../components/menu/mobile/menu.mobile";
import { PROJECT_LIST } from "../projects/projects.const";

import './projectDetail.scss';

class ProjectDetailsIndexComponent extends Component {

  state = {
    project: undefined
  };

  componentDidMount() {
    const { projectId } = this.props;
    const project = PROJECT_LIST.find(project => project.id === projectId);
    this.setState({
      project: project
    });
  }

  backButtonClickHandler = () => {
    this.props.closeDialog();
  }

  renderDesktopView = () => {
    const {project} = this.state;
    const {isMobile, subId} = this.props;
    const DetailComponent = project.detailsComponent;
    return (
      <div className='desktop-view'>
        <DesktopMenuComponent refreshHandler={this.backButtonClickHandler}/>
        <div className='content'>
          <DetailComponent project={project} isMobile={isMobile} backButtonClickHandler={this.backButtonClickHandler} subId={subId}/>
        </div>
      </div>
    );
  }

  renderMobileView = () => {
    const {project} = this.state;
    const {isMobile, subId} = this.props;
    const DetailComponent = project.detailsComponent;
    return (
      <div className='mobile-view'>
        <MobileMenuComponent refreshHandler={this.backButtonClickHandler}/>
        <div className='content'>
          <DetailComponent project={project} isMobile={isMobile} backButtonClickHandler={this.backButtonClickHandler} subId={subId}/>
        </div>
      </div>
    );
  }

  render () {
    const {project} = this.state;
    const {isMobile} = this.props;

    if (project) {
      return (
        <Container disableGutters maxWidth={false} className='main-container'>
          {isMobile ? this.renderMobileView() : this.renderDesktopView()}
        </Container>
      );
    }
    return null;
  }
}

export default withRouter(ProjectDetailsIndexComponent);