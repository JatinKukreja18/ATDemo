import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListIconImage from '../../../../assets/custom-tick.svg';

export default class HardwareDesignComponent extends Component {
  render() {
    const { subItem } = this.props;
    if (subItem) {
      return (
        <div id={subItem.id} data-title={subItem.displayText} className='subItem-container'>
          <h2 className='des-title no-top-margin'>{subItem.displayText}</h2>
          <div className='des-text-container'>
            <h3>Custom Printed Circuit Board (PCB) Design and Layout</h3>
            <div className='des-text'>
              <div className='list-icon-container'>
                <img alt='list' src={ListIconImage} className='list-icon' />
              </div>
              <div>
                <span>We do in-house design for anywhere from 1 to 16-layer circuit boards
                      of any size and generate designs for your prefered platform.</span>
              </div>
            </div>
          </div>
          <div className='des-text-container'>
            <h3>Rapid Prototyping</h3>
            <div className='des-text'>
              <div className='list-icon-container'>
                <img alt='list' src={ListIconImage} className='list-icon' />
              </div>
              <div>
                <span className='highlighted-text'>Here’s what we do: </span>
                <span className='text'>
                  We take your concept and find or build parts - either customized or commercial off-the-shelf components.
                  <br />
                  We then develop a working prototype that you can use to plan your next steps,
                  use for experimentation, testing, marketing or to seek funding for your venture
                </span>
              </div>
            </div>
          </div>

          <div className='des-text-container'>
            <div className='des-text'>
              <div className='list-icon-container'>
                <img alt='list' src={ListIconImage} className='list-icon' />
              </div>
              <div>
                <span className='highlighted-text'>Here’s How We Do it: </span>
                <span>We use one or both of the following approaches: </span>
                <ol>
                  <li>Draw complete schematics, design for size, power, communication, high-frequency, high-density or any of your constraints</li>
                  <li>Lay out a board with a schematic or concept that you have already designed</li>
                </ol>
              </div>
            </div>
          </div>
          <div className='des-text-container'>
            <h3>Circuit board enclosures or housings</h3>
            <div className='des-text'>
              <div className='list-icon-container'>
                <img alt='list' src={ListIconImage} className='list-icon' />
              </div>
              <div>
                <span className='highlighted-text'>
                  Here’s how we solve it:
                </span>
                <br />
                <span>
                  We work with your design files and make it fit into an existing housing,
                  redesign the shape of the circuit board or build a new housing model from
                  scratch using a design program such as AutoCAD or Fusion360.
                </span>
              </div>
            </div>
          </div>
          <div className='des-text-container'>
            <h3>Simulation</h3>
            <div className='des-text'>
              <div className='list-icon-container'>
                <img alt='list' src={ListIconImage} className='list-icon' />
              </div>
              <div>
                <span>We simulate circuit designs to cut down on manufacturing time
                and to limit the number of potential hardware revisions
                </span>
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
