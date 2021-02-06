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
import DetailsImage from '../../../../assets/compressed/midiControlledReactiveLighting.jpg';
import MidiControllerLiveImage from '../../../../assets/compressed/midiControllerWorking.jpg';
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
    const { project, backButtonClickHandler, scrollDirection } = this.props;
    if (project) {
      return (
        <div className='project-details-container'>
          <Header className='project-details-header' title={project.displayText} breadcrumbs={this.getBreadcrumbs()} rootEl={'#' + project.id + '-content'} />
          <Container className='details-content'>
            <div className={`back-button-container ${scrollDirection === 'up' ? 'show' : 'hide'}`}>
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
                <span className='highlighted-text'>Customer: Hobbyist</span>
                <p>
                  <span className='subtitle'>Request: </span>
                  <br />
                  <span>
                    We received a request to build a proof of concept of a
                    portable reactive stage-lighting unit that can connect to
                    electronic instruments and deliver a dazzling stage
                    performance based on the musician’s playing.</span>
                </p>
                <p>
                  <span className='subtitle'>AM Tech’s Solution: </span>
                  <br />
                  <span>
                    We implemented a <b>custom hardware design and firmware</b> and adapted it to communicate on the very popular MIDI protocol.
                    <br />
                    This small project showed the versatility of AM Tech’s expertise and the <b>initial design and prototyping phase took just 2 weeks!</b>
                    <br /><br />
                  </span>
                  <div className='image-container'>
                    <img alt="Midi Controller Live" src={MidiControllerLiveImage} className='details-image' />
                  </div>
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
