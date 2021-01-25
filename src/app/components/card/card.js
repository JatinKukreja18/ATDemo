import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import './card.scss';

export default class CardComponent extends Component {

  render() {
    const { item, linkClickHandler, index } = this.props;
    const { displayText, id, backgroundImage, subList, classes } = item;
    let html;
    if (subList && Array.isArray(subList)) {
      const subListHtml = subList.map((subItem) => {
        const clickHandler = linkClickHandler ? linkClickHandler.bind(this, id, subItem.id, index) : null;
        return <li key={subItem.id} className='list-item' onClick={clickHandler}>{subItem.displayText}</li>
      });

      html = <ul className='list'> {subListHtml}</ul>;
    }
    const cssClasses = classes ? `am-card ${classes}` : 'am-card';
    const itemClickHandler = linkClickHandler ? linkClickHandler.bind(this, id, index) : null;
    return (
      <Card className={cssClasses} style={{ backgroundImage: 'url("' + backgroundImage + '")' }}>
        <CardContent className='am-card-content'>
          <h1 className='am-card-header' onClick={itemClickHandler}>{displayText}</h1>
          {html}
        </CardContent>
      </Card>
    );
  }
}


