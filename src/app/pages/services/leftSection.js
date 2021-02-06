import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

import ServiceImage from '../../../assets/compressed/services.jpg';

import "./services.scss";

// Left Section with with static data
export default class LeftSectionComponent extends Component {

  render() {
    return (
      <div className='first-section'>
        <div className='services-content'>
          <Card className='image-card'>
            <CardMedia className='service-img' image={ServiceImage} />
          </Card>
        </div>
        <div className='services-content'>
          <div className='heading'>
            Our Services
          </div>
          <div className='text'>
            AM Tech will help you build your product.
            We offer a suite of services, customized to your business
            needs, whether you are just starting out or looking to
            retool your existing design or production.
          </div>
        </div>
      </div>
    );
  }
}