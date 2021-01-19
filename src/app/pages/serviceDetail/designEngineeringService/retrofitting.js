import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ListIconImage from '../../../../assets/custom-tick.svg'; 

export default class RetrofittingComponent extends Component {
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
                <span className='highlighted-text'>What we do with existing products: </span>
              </div>
            </div>  
            <div className='des-text'>
              <div className='list-icon-container' style={{visibility: 'hidden'}}>
                <img alt='list' src={ListIconImage} className='list-icon'/>
              </div>
              <div>
                <span><b>Retrofitting</b> is a process to make your old hardware work in new environments or with new standards. Although we cannot guarantee that a product can be retrofitted, we can do our best to design intermediaries, addons, reworks and even reverse engineer parts of an existing product to adapt it to a new life.</span>
              </div>
            </div>          
          </div>
        </div>
      );  
    }

    return null;
  }
}

RetrofittingComponent.propTypes = {
  subItem: PropTypes.object.isRequired
};
