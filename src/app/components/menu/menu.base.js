import { Component } from 'react';
import { MENU_ITEMS } from './menu.const';

class BaseMenuComponent extends Component {

  state = {
    menuOpen: false,
    selected: MENU_ITEMS[0].id
  };

  componentDidMount() {
    const { history } = this.props;
    if (history) {
      const path = history.location.pathname;
      const selectedMenuObject = MENU_ITEMS.find(menuItem => menuItem.path === path);
      if (selectedMenuObject) {
        this.setState({
          selected: selectedMenuObject.id
        });
      }
    }
  }

  setSelectedMenu = (menuItem) => {
    const { refreshHandler, history } = this.props;
    const shouldRefresh = this.state.selected === menuItem.id;
    this.setState({
      selected: menuItem.id
    }, () => {
      if (shouldRefresh && refreshHandler && typeof refreshHandler === 'function') {
        refreshHandler();
      } else {
        this.props.changingRoute(menuItem)
        history.push(menuItem.path);
      }
    });
  }

}

export default BaseMenuComponent;