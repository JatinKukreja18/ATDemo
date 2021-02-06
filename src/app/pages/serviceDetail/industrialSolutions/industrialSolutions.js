import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import Header from "../../../components/header/header";
import { DEFAULT, SERVICES } from '../../../router/routes.const';

import DetailsImage from '../../../../assets/compressed/industrialSolutions.jpg';
import ListIconImage from '../../../../assets/custom-tick.svg';

import './industrialSolutions.scss';

export default class IndustrialSolutionsServiceComponent extends Component {

  getBreadcrumbs = () => {
    const { service } = this.props;
    if (service) {
      return (
        <Breadcrumbs aria-label="breadcrumb" className='breadcrumb-container'>
          <Link className="breadcrumb" to={DEFAULT}>Home</Link>
          <Link className="breadcrumb" to={SERVICES} onClick={this.props.backButtonClickHandler}>Services</Link>
          <Typography className='breadcrumb'>{service.displayText}</Typography>
        </Breadcrumbs>
      );
    }
  }

  render() {
    const { service, backButtonClickHandler, scrollDirection } = this.props;
    if (service) {
      return (
        <div className='service-details-container'>
          <Header className='service-details-header' title={service.displayText} breadcrumbs={this.getBreadcrumbs()} rootEl='#service-details-dialog-content' />
          <Container className='details-content'>
            <div className={`back-button-container ${scrollDirection === 'up' ? 'show' : 'hide'}`}>
              <Button className='back-button' startIcon={<KeyboardArrowLeftIcon className='am-icon' />} onClick={backButtonClickHandler.bind(this)}>
                Back
              </Button>
            </div>
            <div className='image-container'>
              <img alt={service.displayText} src={DetailsImage} className='details-image' />
            </div>
            <div className='subItem-container'>
              <div className='is-text'>
                <span className='list-icon-container'>
                  <img alt='list' src={ListIconImage} className='list-icon' />
                </span>
                <span>We’ve worked with projects with various scaling requirements. </span>
                <span className='highlighted-text'>We know some things you may want most:</span>
                <ol>
                  <li><span className='bullet-title'>Understanding Requirements</span> – Even if you don’t know exactly what you are looking for, we will work with you every step of the way to make sure that we do</li>
                  <li><span className='bullet-title'>Repeatability</span> – Once you have your product, you want to be able to get it right every time.</li>
                  <li><span className='bullet-title'>Backup sources</span> – While we would like to be your one-stop manufacturing source, we understand supply chain requirements may require you to hold this material for use in the future. We can work with you for any degree of product ownership so that you have the maximum peace of mind.</li>
                </ol>
              </div>
            </div>
          </Container>
        </div>
      );
    }

    return null;
  }
}

IndustrialSolutionsServiceComponent.propTypes = {
  service: PropTypes.object.isRequired,
  backButtonClickHandler: PropTypes.func
};
