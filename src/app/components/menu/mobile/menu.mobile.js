import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withRouter } from "react-router-dom";
import {MENU_ITEMS} from '../menu.const';
import BaseComponent from '../menu.base';
import MobileMenuListComponent from './menuList/menuList';
import Logo from '../../../../assets/logo.svg';
import '../menu.scss';

class MobileMenuComponent extends BaseComponent {

  showMenu = (event) => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  hideMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  render() {

    const { menuOpen, selected } = this.state;
    return (
      <>
        <AppBar position="fixed" className="menu-header">
          <Toolbar className='menu-toolbar'>
            <Typography variant='body1' className='menu-logo-container' >
              <img src={Logo} className='menu-logo' alt='AM Tech Logo' onClick={this.setSelectedMenu.bind(this, MENU_ITEMS[0])}/>
            </Typography>
            <div className="menu-button-container">
              <IconButton aria-label="menu" aria-haspopup="true" onClick={this.showMenu} className='menu-icon'>
                <MenuIcon fontSize='large' />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <Toolbar/>
        {
          menuOpen ? (
            <MobileMenuListComponent selected={selected} setSelectedMenu={this.setSelectedMenu}/>
          ) : null
        }
      </>
    );
  }
}

export default withRouter(MobileMenuComponent);