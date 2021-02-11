import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BaseMenuComponent from '../menu.base';
import SocialMediaComponent from '../../socialMedia/socialMedia';
import CopyrightComponent from '../../copyright/copyright';
import Logo from '../../../../assets/logo.svg';

import { withRouter, matchPath } from "react-router-dom";
import { MENU_ITEMS } from '../menu.const';

import '../menu.scss';

class DesktopMenuComponent extends BaseMenuComponent {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      console.log('has nagivated');
      window.sessionStorage.setItem('navigated', true)
    }
  }
  renderMenuList = () => {
    const { selected } = this.state;

    return MENU_ITEMS.map((menuItem, index) => {
      let Icon = menuItem.icon;
      const matchedPath = matchPath(this.props.location.pathname, {
        path: menuItem.path,
        exact: false,
        strict: false
      })
      return (
        <ListItem button key={menuItem.id} className='menu-list-item' selected={matchedPath} onClick={this.setSelectedMenu.bind(this, menuItem)}>
          <ListItemIcon className='menu-list-item-icon'><Icon /></ListItemIcon>
          <ListItemText primary={menuItem.text} className='menu-list-item-text' />
        </ListItem>
      );
    });
  }

  renderSocialMediaSection = () => {
    return (
      <div className='social-media-container'>
        <SocialMediaComponent />
      </div>
    );
  }

  renderCopyRightSection = () => {
    return (<CopyrightComponent />);
  }

  render() {

    return (
      <Drawer className='drawer' style={this.props.style} variant="permanent" classes={{ paper: 'drawer-paper' }} anchor="left">
        <div className='menu-logo-container'>
          <img src={Logo} className='menu-logo' alt='AM Tech Logo' onClick={this.setSelectedMenu.bind(this, MENU_ITEMS[0])} />
        </div>
        <div className='menu-list-container'>
          <List className='menu-list'>
            {this.renderMenuList()}
          </List>
        </div>
        <div className='menu-footer-container'>
          {this.renderSocialMediaSection()}
          {this.renderCopyRightSection()}
        </div>
      </Drawer>
    );
  }
}

export default withRouter(DesktopMenuComponent);