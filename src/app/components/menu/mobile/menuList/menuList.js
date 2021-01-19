import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';

import {MENU_ITEMS} from '../../menu.const';

import './menuList.scss';

export default class MobileMenuListComponent extends Component {

  renderMenuList = () => {
    const { selected, setSelectedMenu } = this.props;

    return MENU_ITEMS.map((menuItem, index) => {
      let Icon = menuItem.icon;
      if ( selected === menuItem.id ) {
        return (
          <IconButton key={menuItem.id} className='menu-item selected-button'>
            <Icon className="menu-icon"/>
            <span className='menu-text'>{menuItem.text}</span>
          </IconButton> 
        );
      } else {
        return (
          <IconButton key={menuItem.id} className='menu-item' onClick={setSelectedMenu.bind(this, menuItem)}>
            <Icon className="menu-icon"/>
            <span className='menu-text'>{menuItem.text}</span>
          </IconButton>
        );
      }
    });
  }

  render() {
    return (
      <div className='menu-backdrop'>
        <Paper elevation={3} className='menu-list-paper'>
          {this.renderMenuList()}
        </Paper>
      </div>
    );
  }
}