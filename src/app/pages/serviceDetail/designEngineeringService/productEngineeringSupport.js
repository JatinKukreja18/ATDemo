import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ListIconImage from '../../../../assets/custom-tick.svg'; 

export default class ProductEngineeringSupportComponent extends Component {
  render() {
    const { subItem } = this.props;
    if (subItem) {
      return (
        <div id={subItem.id} data-title={subItem.displayText} className='subItem-container'>
          <h2 className='des-title'>{subItem.displayText}</h2>
          <div className='des-text-container'>
            <div className='des-text'>
              <div className='list-icon-container'>
                <img alt='list' src={ListIconImage} className='list-icon'/>
              </div>
              <div>
                <span>Whether your business is around the corner or across the globe, we are committed to helping you, our customer, build the best product for your market.</span>
              </div>
            </div>  
            <div className='des-text'>
              <div className='list-icon-container'>
                <img alt='list' src={ListIconImage} className='list-icon'/>
              </div>
              <span className='highlighted-text'>Here are some of the ways we do that:</span>
            </div>
            <div className='des-text'>
              <div className='list-icon-container' style={{visibility: 'hidden'}}>
                <img alt='list' src={ListIconImage} className='list-icon'/>
              </div>
              <div>
                <ol>
                  <li>Educate you to better understand your product</li>
                  <li>Train your engineers and techs to perform a front-line assessment</li>
                  <li>Configure and provide remote, technology-based troubleshooting</li>
                  <li>Provide on-site support for difficult issues or engineering enhancements</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      );  
    }

    return null;
  }
}

ProductEngineeringSupportComponent.propTypes = {
  subItem: PropTypes.object.isRequired
};
