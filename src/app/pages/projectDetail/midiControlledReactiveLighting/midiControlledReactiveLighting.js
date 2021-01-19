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

import './midiControlledReactiveLighting.scss';

export default class MidiControlledReactiveLightingComponent extends Component {
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
          <Header className='project-details-header' title={project.displayText} breadcrumbs={this.getBreadcrumbs()} rootEl='#project-details-dialog-content' />
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
              <div className='midi-controlled-lighting-text'>
                <span className='list-icon-container'>
                  <img alt='list' src={ListIconImage} className='list-icon' />
                </span>
                <span className='highlighted-text'>Customer Size: Hobbyist</span>
                <p>
                  <span className='subtitle'>Request: </span>
                  <span>We received a request to build a prototype of a portable reactive stage-lighting unit that could connect to electronic instruments and deliver a dazzling stage performance based on the musician’s playing.</span>
                </p>
                <p>
                  <span className='subtitle'>AM Tech’s Solution: </span>
                  <span>We implemented a custom schematic, firmware and adapted it to communicate on the very popular MIDI protocol. This small project showed the versatility of AM Tech’s expertise and the initial design and prototyping phase took just 2 weeks!</span>
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

MidiControlledReactiveLightingComponent.propTypes = {
  project: PropTypes.object.isRequired,
  backButtonClickHandler: PropTypes.func
};