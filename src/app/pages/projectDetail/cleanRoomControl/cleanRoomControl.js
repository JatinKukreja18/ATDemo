import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import Header from "../../../components/header/header";
import { DEFAULT, PROJECTS } from '../../../router/routes.const';
import DetailsImage from '../../../../assets/compressed/breadboarding.jpg';
import ListIconImage from '../../../../assets/custom-tick.svg';

import './cleanRoomControl.scss';

export default class CleanRoomControlComponent extends Component {
  getBreadcrumbs = () => {
    const { project } = this.props;
    if (project) {
      return (
        <Breadcrumbs aria-label="breadcrumb" className='breadcrumb-container'>
          <Link className="breadcrumb" to={DEFAULT}>Home</Link>
          <Link className="breadcrumb" to={PROJECTS} onClick={this.props.backButtonClickHandler}>Projects</Link>
          <Typography className='breadcrumb'>{project.displayText}</Typography>
        </Breadcrumbs>
      );
    }
  }

  render() {
    const { project, backButtonClickHandler } = this.props;
    if (project) {
      return (
        <div className='project-details-container'>
          <Header className='project-details-header' title={project.displayText} breadcrumbs={this.getBreadcrumbs()} rootEl={'#' + project.id + '-content'} />
          <Container className='details-content'>
            <div className='back-button-container'>
              <Button className='back-button' startIcon={<KeyboardArrowLeftIcon className='am-icon' />} onClick={backButtonClickHandler.bind(this)}>
                Back
              </Button>
            </div>
            <div className='image-container'>
              <img alt={project.displayText} src={DetailsImage} className='details-image' />
            </div>
            <div className='subItem-container'>
              <div className='clean-room-control-text'>
                <span className='list-icon-container'>
                  <img alt='list' src={ListIconImage} className='list-icon' />
                </span>
                <span className='highlighted-text'>Customer Size: Medium</span>
                <p>
                  <span className='subtitle'>Problem: </span>
                  <span>This customer came to AM Tech requesting a redesign of their clean room control system. The system had fallen out of compliance and was in need of some major upgrades.</span>
                </p>
                <p>
                  <span className='subtitle'>AM Tech’s Solution: </span>
                  <span>We reverse-engineered their existing board, made a new design that conformed to their system specs, architected an entire system including firmware and circuit board design, rolled out an initial order and stayed both on time and on budget.</span>
                </p>
                <p>
                  In the following year after adopting AM Tech’s solution, the company’s sales doubled.
                </p>
              </div>
            </div>
          </Container>
        </div>
      );
    }

    return null;
  }
}

CleanRoomControlComponent.propTypes = {
  project: PropTypes.object.isRequired,
  backButtonClickHandler: PropTypes.func
};
