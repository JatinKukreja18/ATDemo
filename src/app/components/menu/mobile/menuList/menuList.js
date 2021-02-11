import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import { withRouter, matchPath } from "react-router-dom";

import { MENU_ITEMS } from '../../menu.const';

import './menuList.scss';

class MobileMenuListComponent extends Component {

  renderMenuList = () => {
    const { selected, setSelectedMenu } = this.props;

    return MENU_ITEMS.map((menuItem, index) => {
      let Icon = menuItem.icon;
      const matchedPath = matchPath(this.props.location.pathname, {
        path: menuItem.path,
        exact: false,
        strict: false
      })
      if (matchedPath) {
        return (
          <IconButton key={menuItem.id} className='menu-item selected-button'>
            <Icon className="menu-icon" />
            <span className='menu-text'>{menuItem.text}</span>
          </IconButton>
        );
      } else {
        return (
          <IconButton key={menuItem.id} className='menu-item' onClick={setSelectedMenu.bind(this, menuItem)}>
            <Icon className="menu-icon" />
            <span className='menu-text'>{menuItem.text}</span>
          </IconButton>
        );
      }
    });
  }

  render() {
    return (
      <div className='menu-backdrop' onClick={this.props.close}>
        <Paper elevation={3} className='menu-list-paper'>
          {this.renderMenuList()}
        </Paper>
      </div>
    );
  }
}
export default withRouter(MobileMenuListComponent)
