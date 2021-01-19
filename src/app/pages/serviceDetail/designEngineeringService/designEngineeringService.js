import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Scrollspy from 'react-scrollspy';
import Container from '@material-ui/core/Container';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import Header from "../../../components/header/header";
import { DEFAULT, SERVICES } from '../../../router/routes.const';

import BreadboardingImage from '../../../../assets/compressed/breadboarding.jpg';

import './designEngineeringService.scss';

export default class DesignEngineeringServiceComponent extends Component {

  state = {
    title: '',
    subSectionIds: [],
    scrollActive: false
  };

  componentDidMount() {
    const { service, subId } = this.props;
    let title = '';
    let focusId;
    let subSectionIds = [];
    if (service) {
      let subSection;
      if (service.subList.length > 0) {
        subSectionIds = service.subList.map(subItem => subItem.id);
        if (subId) {
          subSection = service.subList.find(subItem => subItem.id === subId);
        }
      }
      if (subSection) {
        title = subSection.displayText;
        focusId = subSection.id;
      } else {
        title = service.displayText;
      }

    }
    this.setState({
      title: title,
      subSectionIds: subSectionIds
    }, () => {
      if (focusId) {
        setTimeout(() => {
          document.getElementById(focusId).scrollIntoView({ alignToTop: false, behavior: "smooth", block: "end", inline: "nearest" });
        }, 500);
      }
    });
    document.getElementById('service-details-dialog-content').addEventListener('scroll', this.scrollEventHandler);
  }

  scrollEventHandler = (event) => {
    const scrollActive = event.target.scrollTop > 50;
    this.setState({ scrollActive: scrollActive })
  }

  scrollToTop = () => {
    document.getElementById('service-details-dialog-content').scrollTo({ top: 0, behavior: 'smooth' });
  }

  updateTitle = (highLightedEl) => {
    const { service } = this.props;
    let title = highLightedEl ? highLightedEl.getAttribute("data-title") : service.displayText;
    this.setState({ title });
  }

  getScrollSpy = () => {
    const { subSectionIds } = this.state;
    const offset = -50 - (window.innerHeight / 2);
    // This scroll spy will help us identify the scroll position and update the title accordingly
    return (
      <Scrollspy items={subSectionIds} style={{ display: 'none' }} currentClassName='abc' rootEl='#service-details-dialog-content' onUpdate={this.updateTitle} offset={offset}>
        {
          subSectionIds.map(subSection => <li key={subSection}><a href={`#${subSection}`}>{subSection}</a></li>)
        }
      </Scrollspy>
    );
  }

  getBreadcrumbs = () => {
    const { service } = this.props;
    if (service) {
      return (
        <Breadcrumbs aria-label="breadcrumb" className='breadcrumb-container'>
          <Link className="breadcrumb" to={DEFAULT}>Home</Link>
          <Link className="breadcrumb" to={SERVICES} onClick={this.props.backButtonClickHandler}>Services</Link>
          <Typography className='breadcrumb'>{service.displayText}</Typography>
        </Breadcrumbs>
      );
    }
  }

  renderScrollTop = () => {

    return this.state.scrollActive ? <IconButton variant='outlined' onClick={this.scrollToTop} className='scroll-top-button'>
      <KeyboardArrowUpIcon fontSize='large' />
    </IconButton> : null
  }

  render() {
    const { service, backButtonClickHandler } = this.props;
    const { title } = this.state;
    if (title) {
      return (
        <div className='service-details-container'>
          { this.getScrollSpy()}
          <Header className='service-details-header' title={title} breadcrumbs={this.getBreadcrumbs()} rootEl='#service-details-dialog-content' />
          <Container className='details-content' >
            <div className='back-button-container'>
              <Button className='back-button' startIcon={<KeyboardArrowLeftIcon className='am-icon' />} onClick={backButtonClickHandler.bind(this)}>
                Back
              </Button>
            </div>
            <div className='image-container'>
              <img alt={service.displayText} src={BreadboardingImage} className='details-image' />
            </div>
            {
              service.subList.map((subItem) => {
                const SubSectionComponent = subItem.component;
                return (
                  <SubSectionComponent key={subItem.id} subItem={subItem} />
                );
              })
            }
            {this.renderScrollTop()}
          </Container>
        </div>
      );
    }

    return null;
  }

  componentWillUnmount() {
    document.getElementById('service-details-dialog-content').removeEventListener('scroll', this.scrollEventHandler);
  }
}

DesignEngineeringServiceComponent.propTypes = {
  service: PropTypes.object.isRequired,
  backButtonClickHandler: PropTypes.func
};