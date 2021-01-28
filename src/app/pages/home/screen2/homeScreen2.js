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
                We are a tight-knit team of engineers with expertise ranging from hardware, to firmware, to software design.
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
                  <span className='list-item-text'>Build products that people will use and will improve lives</span>
                </div>
                <div className="list-item">
                  <img src={BulletIcon} alt='bullet' className='bullet-img' />
                  <span className='list-item-text'>Bring success to any organization that we work with</span>
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