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
import DetailsImage from '../../../../assets/compressed/breadboarding.jpg';
import ListIconImage from '../../../../assets/custom-tick.svg';

import './manufacturingServices.scss';

export default class ManufacturingServiceComponent extends Component {

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
              <div className='manufacturing-text'>
                <span className='list-icon-container'>
                  <img alt='list' src={ListIconImage} className='list-icon' />
                </span>
                <span className='highlighted-text'>AM Tech can manufacture your product based on your specific needs:</span>
                <ol>
                  <li>Using your design, or the design we develop for you, we can do small - to medium-run orders – up to 10,000 per month.</li>
                  <li>We can produce fully integrated Bills of Materials (BOM) and supply chain management for the long term or prepare the details and turn it over to you.</li>
                  <li>Turn-key assembly – we do all the work so you can present your customer with the finished product.</li>
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

ManufacturingServiceComponent.propTypes = {
  service: PropTypes.object.isRequired,
  backButtonClickHandler: PropTypes.func
};
