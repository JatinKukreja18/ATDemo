import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListIconImage from '../../../../assets/custom-tick.svg';

export default class HardwareDesignComponent extends Component {
  render() {
    const { subItem } = this.props;
    if (subItem) {
      return (
        <div id={subItem.id} data-title={subItem.displayText} className='subItem-container'>
          <h2 className='des-title'>{subItem.displayText}</h2>
          <div className='des-text-container'>
            <h3>Embedded Systems</h3>
            <div className='des-text'>
              <div className='list-icon-container'>
                <img alt='list' src={ListIconImage} className='list-icon' />
              </div>
              <div>
                <span className='highlighted-text'>
                  Here’s what we do to make sure you run the platform suited to your needs:
                </span>
                <span>
                  We are experts at small microcontrollers, raspberry pi, and other multicore processors or systems on chip –
                  we will help you choose the best option for your product
                </span>
              </div>
            </div>
          </div>
          <div className='des-text-container'>
            <h3>Measurement and Sensors</h3>
            <div className='des-text'>
              <div className='list-icon-container'>
                <img alt='list' src={ListIconImage} className='list-icon' />
              </div>
              <div>
                <span>We have a lot of experience with many kinds of sensors analog and digital as well as the types of data they produce.</span>
              </div>
            </div>
          </div>
          <div className='des-text-container'>
            <h3>Firmware Drivers</h3>
            <div className='des-text'>
              <div className='list-icon-container'>
                <img alt='list' src={ListIconImage} className='list-icon' />
              </div>
              <div>
                <span className='highlighted-text'>Here’s our commitment: </span>
                <span>We will design robust hardware protocols based on industry standard application layers that will ensure the long-term operation of any system you deploy</span>
              </div>
            </div>
          </div>
          <div className='des-text-container'>
            <h3>Wireless communication</h3>
            <div className='des-text'>
              <div className='list-icon-container'>
                <img alt='list' src={ListIconImage} className='list-icon' />
              </div>
              <div>
                <span className='highlighted-text'>Here’s how we can help: </span>
                <span>We’re versed in mesh networks, Xbee/Zigbee, Bluetooth and Wifi – today’s industry standards.</span>
                {/* <div className='image-container'>
                  <img alt="Wireless" src={WirelessImage} className='details-image-small' width="301" height="274" />
                </div> */}
              </div>
            </div>
          </div>
          <div className='des-text-container'>
            <h3>Battery or low-power design</h3>
            <div className='des-text'>
              <div className='list-icon-container'>
                <img alt='list' src={ListIconImage} className='list-icon' />
              </div>
              <div>
                <span className='highlighted-text'>Here’s how we think: </span>
                <span>We can specialize your product’s efficiency to ensure the lowest power consumption or optimize battery life</span>
              </div>
            </div>
          </div>
          <div className='des-text-container'>
            <h3>Unit Testing</h3>
            <div className='des-text'>
              <div className='list-icon-container'>
                <img alt='list' src={ListIconImage} className='list-icon' />
              </div>
              <div>
                <span className='highlighted-text'>Here’s what’s important: </span>
                <span>Without a test system, you cannot guarantee the reliability of your product. We develop in-depth testing environments to prevent all of those corner cases</span>
              </div>
            </div>
          </div>
          <div className='des-text-container'>
            <h3>Programming Environment</h3>
            <div className='des-text'>
              <div className='list-icon-container'>
                <img alt='list' src={ListIconImage} className='list-icon' />
              </div>
              <div>
                <span className='highlighted-text'>Choose your favorite IDE: </span>
                <span>Microsoft Visual Studio, Atmel Studio, MPLab X, Visual Studio Code, Eclipse, Simulink, LabView…</span>
              </div>
            </div>
          </div>

        </div>
      );
    }

    return null;
  }
}

HardwareDesignComponent.propTypes = {
  subItem: PropTypes.object.isRequired
};
