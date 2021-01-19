import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

import ProjectImage from '../../../assets/services.gif';

import "./projects.scss";

// Left Section with with static data
export default class ProjectLeftSectionComponent extends Component {

  render() {
    return (
      <div className='first-section'>
        <div className='projects-content'>
          <Card className='image-card'>
            <CardMedia className='project-img' image={ProjectImage} />
          </Card>
        </div>
        <div className='projects-content'>
          <div className='heading'>
            Past Projects
          </div>
          <div className='text'>
            Example of Completed Projects
          </div>
        </div>
      </div>
    );
  }
}