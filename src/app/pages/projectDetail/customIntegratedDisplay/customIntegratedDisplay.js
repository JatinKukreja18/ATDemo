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
import DetailsImage from '../../../../assets/compressed/customIntegratedDisplay.jpg';
import ListIconImage from '../../../../assets/custom-tick.svg';
import PcbImage from '../../../../assets/compressed/touchScreenDisplayPcb.jpg';

import './customIntegratedDisplay.scss';

export default class CustomIntegratedDisplayComponent extends Component {
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
              <div className='custom-integrated-display-text'>
                <span className='list-icon-container'>
                  <img alt='list' src={ListIconImage} className='list-icon' />
                </span>
                <span className='highlighted-text'>Customer Size: Medium</span>
                <p>
                  <span className='subtitle'>Problem: </span>
                  <br />
                  <span>After building the clean room control system (CCS), our customer reported that their customers
                        wanted a <b>better way to interact and view system operations</b> on their clean room units.
                    <br />
                        They wanted a <b>custom graphical user interface</b> (GUI) on a touch screen that could change and control the clean room unit.
                  </span>
                </p>
                <p>
                  <span className='subtitle'>AM Tech’s Solution: </span>
                  <br />
                  <span>
                    We designed a detachable LCD touch screen,
                    complete with custom graphics and menus designed
                    to ensure the long-term operation of the monitoring systems.
                    <br />
                    The screens are compatible with multiple memory sources and the graphics
                    are interchangeable and can be easily reloaded or modified at the customer's request.
                    <br /><br />
                    This solution made use of some open-source drivers coupled with several custom implementations.
                    <br />
                    One of the biggest challenges was respecting some of the requirements requiring extra long cables
                    and transmitting high-speed data across these cables.
                    <br />
                    Nonetheless, this project was completed <b>on time and on budget.</b>
                  </span>
                  <br /><br />
                  <div className='image-container'>
                    <img alt="SCR PCB" src={PcbImage} className='details-image' />
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

CustomIntegratedDisplayComponent.propTypes = {
  project: PropTypes.object.isRequired,
  backButtonClickHandler: PropTypes.func
};
