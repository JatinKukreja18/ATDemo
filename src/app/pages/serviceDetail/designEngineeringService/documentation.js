import React, {Component} from 'react';
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
            <div className='des-text'>
              <div className='list-icon-container'>
                <img alt='list' src={ListIconImage} className='list-icon'/>
              </div>
              <div>
                <span className='highlighted-text'>At the very core of our beliefs: </span>
                <span>document every step and decision down to the lowest level. Do you want to ensure a transferable knowledge and demonstrate the raw value of your asset?</span>
              </div>
            </div>  
            <div className='des-text'>
              <div className='list-icon-container'>
                <img alt='list' src={ListIconImage} className='list-icon'/>
              </div>
              <div>
                <span className='highlighted-text'>We can provide: </span>
                <span>detailed code documentation and architecture specifications, giving you full ownership of your product.</span>
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
