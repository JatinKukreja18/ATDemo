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
import DetailsImage from '../../../../assets/compressed/cleanRoomControl.jpg';
import ListIconImage from '../../../../assets/custom-tick.svg';
import PcbImage from '../../../../assets/compressed/cleanRoomControlBoard.jpg';
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
              <div className='clean-room-control-text'>
                <span className='list-icon-container'>
                  <img alt='list' src={ListIconImage} className='list-icon' />
                </span>
                <span className='highlighted-text'>Customer Size: Medium</span>
                <p>
                  <span className='subtitle'>Problem: </span>
                  <span>
                    <br />
                    Our customer came to AM Tech requesting a redesign of their clean room control system.
                    The system had fallen out of compliance and was in need of some major upgrades.
                    <br />
                  </span>
                </p>
                <p>
                  <span className='subtitle'>AM Tech’s Solution: </span>
                  <span>
                    <br />
                    We reverse-engineered their existing board and made a new design that conformed to their system specs.
                    We architected the entire system including firmware and circuit board design, prototyped,
                    and delivered an initial order while staying both <b><i>on time and on budget.</i></b>
                  </span>
                </p>
                <p>
                  <b>Our customer's sales doubled </b> in the following year after adopting AM Tech’s solution.
                  <br /><br />
                  This <b>product continues to be sold</b> and AM Tech maintains and provides upgrades when needed.
                  <br /><br />
                  Demand has increased, as this solution has been used widely by pharmaceutical companies and virus research centers
                  worldwide during the COVID-19 pandemic.
                  <br /><br />
                  <div className='image-container'>
                    <img alt="CCS PCB" src={PcbImage} className='details-image' />
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

CleanRoomControlComponent.propTypes = {
  project: PropTypes.object.isRequired,
  backButtonClickHandler: PropTypes.func
};
