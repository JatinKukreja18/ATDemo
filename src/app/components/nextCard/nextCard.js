import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import './nextCard.scss';

export default class DummyCardComponent extends Component {

  render() {
    const { item } = this.props;
    const { displayText, backgroundImage, classes } = item;
    const cssClasses = classes ? `am-next-card ${classes}`: 'am-next-card';
    return (
      <Card className={cssClasses} style={{backgroundImage: 'url("'+backgroundImage+'")'}} >
        <CardContent className='am-next-card-content'>
           <h3 className='am-next-card-header'>{displayText}</h3>
        </CardContent>
      </Card>
    );
  }
}


