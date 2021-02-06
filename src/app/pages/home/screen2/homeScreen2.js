import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import SocialMediaComponent from '../../../components/socialMedia/socialMedia';
import CopyrightComponent from '../../../components/copyright/copyright';
import BulletIcon from '../../../../assets/custom-tick.svg';
import "./homeScreen2.scss";

export default class HomeScreen2Component extends Component {

  render() {
    const { className } = this.props;
    const classes = className ? `${className} screen2-container` : 'screen2-container';
    return (
      <div className={classes}>
        <div className='section'>
          <div className='sub-section'>
            <div className='text-section'>
              <div className='heading'>
                Who is AM Tech
              </div>
              <div className='text'>
                AM Tech was founded in 2017 by Andrew March.
                We are a great team of engineers with expertise ranging from hardware, to firmware, to software design to product management.
                AM Tech develops and ships turnkey solutions for your products.
                <br /><br />
                AM Tech ships thousands of assembled circuit boards from our own design every year and can also white-label and
                customize or build-to-print any schematic you might have.
              </div>
            </div>
          </div>
          <div className='sub-section'>
            <Paper elevation={0} className='blue-chip'>
              <div className='white-strip'></div>
            </Paper>
          </div>
        </div>
        <div className='section bg-gray'>
          <div className='sub-section'>
            <Paper elevation={3} className='operations-img'>
            </Paper>
          </div>
          <div className='sub-section'>
            <div className='text-section'>
              <div className='heading'>
                AM Tech’s Mission Statement:
                </div>
              <div className='text'>
                <div className="list-item">
                  <img src={BulletIcon} alt='bullet' className='bullet-img' />
                  <span className='list-item-text'>We will build products that serve our customers, improve their business and make life easier for them</span>
                </div>
                <div className="list-item">
                  <img src={BulletIcon} alt='bullet' className='bullet-img' />
                  <span className='list-item-text'>We will strive to exceed the expectations of every organization that we work with</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='section social-media'>
          <div className='sub-section'>
            <div className='text-section sm-container'>
              <div className='text'>
                <SocialMediaComponent />
              </div>
              <div className='text bg-gray'>
                <CopyrightComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}