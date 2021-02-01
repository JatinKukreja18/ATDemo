import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import Header from "../../../components/header/header";
import Image from "../../../components/Image";
import { DEFAULT, PROJECTS } from '../../../router/routes.const';
import DetailsImage from '../../../../assets/compressed/breadboarding.jpg';
import ListIconImage from '../../../../assets/custom-tick.svg';
import image from '../../../../assets/compressed/blue-chip.jpg';
import './automatedPowerControl.scss';

export default class AutomatedPowerControlComponent extends Component {

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
              <Button className={`back-button `} startIcon={<KeyboardArrowLeftIcon className='am-icon' />} onClick={backButtonClickHandler.bind(this)}>
                Back
              </Button>
            </div>
            <div className='image-container'>
              <img alt={project.displayText} src={DetailsImage} className='details-image' />
            </div>
            <div className='subItem-container'>
              <div className='automated-power-control-text'>
                <span className='list-icon-container'>
                  <img alt='list' src={ListIconImage} className='list-icon' />
                </span>
                <span className='highlighted-text'>Customer Size: Large</span>
                <p>
                  <span className='subtitle'>Problem: </span>
                  <span>This customer was located in a world region with extreme energy theft. They tasked us with designing a solution for monitoring, metering and controlling certain sectors of their electric grid, including implementing a payment option.</span>
                </p>
                <p>
                  <span className='subtitle'>AM Tech’s Solution: </span>
                  <span>(Note: this project was completed under a different DBA moniker) This project was very complex and required a special adherence to international guidelines and standards used to deploy products on a standard electric grid. We took the customer’s non-technical specifications and turned around with a fully functioning web-driven hardware device with perpetual monitoring and a litany of safety and security protocols designed specifically to address the customer’s concerns.</span>
                </p>
                <Image src={image} align={'center'} />
                <Image src={image} align={'right'} />
                <Image src={image} align={'left'} />
                <p>
                  <span className='subtitle'>AM Tech’s Solution: </span>
                  <span>(Note: this project was completed under a different DBA moniker) This project was very complex and required a special adherence to international guidelines and standards used to deploy products on a standard electric grid. We took the customer’s non-technical specifications and turned around with a fully functioning web-driven hardware device with perpetual monitoring and a litany of safety and security protocols designed specifically to address the customer’s concerns.</span>
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

AutomatedPowerControlComponent.propTypes = {
  project: PropTypes.object.isRequired,
  backButtonClickHandler: PropTypes.func
};
