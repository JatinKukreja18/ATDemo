import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import Header from "../../../components/header/header";
import { DEFAULT, SERVICES } from '../../../router/routes.const';
import { Table, Thead as TableHead, Tbody as TableBody, Tr as TableRow, Th as TableHeadCell, Td as TableCell } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import DetailsImage from '../../../../assets/compressed/breadboarding.jpg';
import ListIconImage from '../../../../assets/custom-tick.svg';
import './developmentProcess.scss';

export default class DevelopmentProcessServiceComponent extends Component {

  rows = [
    { phase: '0', phaseName: 'Consultation', whatHappens: 'Develop the scope of work and requirements', who: 'Customer + AM Tech' },
    { phase: 'I', phaseName: 'Define the Specifications', whatHappens: 'Architecting: make an exhaustive list of everything that needs to be developed', who: 'Customer + AM Tech' },
    { phase: 'II', phaseName: 'Design and Development', whatHappens: 'Write the code and design schematics', who: 'AM Tech' },
    { phase: 'III', phaseName: 'Build a Prototype', whatHappens: 'Build a Prototype', who: 'AM Tech' },
    { phase: 'IIIA', phaseName: 'Produce Prototype Versions', whatHappens: 'If different builds are required, we will make sure all feature sets are available to you', who: 'AM Tech' },
    { phase: 'IV', phaseName: 'Initial Production', whatHappens: 'Create a manufacturing protocol to ensure repeatability, a test bench and a short product test run', who: 'AM Tech, or the Customer' },
    { phase: 'V', phaseName: 'Volume Production', whatHappens: 'We will produce as many products as you require', who: 'AM Tech, or the Customer' }
  ];

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

  render() {
    const { service, backButtonClickHandler } = this.props;
    if (service) {
      return (
        <div className='service-details-container'>
          <Header className='service-details-header' title={service.displayText} breadcrumbs={this.getBreadcrumbs()} rootEl='#service-details-dialog-content' />
          <Container className='details-content'>
            <div className='back-button-container'>
              <Button className='back-button' startIcon={<KeyboardArrowLeftIcon className='am-icon' />} onClick={backButtonClickHandler.bind(this)}>
                Back
              </Button>
            </div>
            <div className='image-container'>
              <img alt={service.displayText} src={DetailsImage} className='details-image' />
            </div>
            <div className='subItem-container'>
              <div className='dp-title'>
                <div className='list-icon-container'>
                  <img alt='list' src={ListIconImage} className='list-icon' />
                </div>
                <div className='dp-title-text'>
                  <span className="highlighted-text">We work with our customer to reach </span>
                  <span className="text">the best possible solution. We use a proven engineering model and can jump in at any phase, depending on where you need help.</span>
                </div>
              </div>
              <div className='dp-table-container'>
                <TableContainer component={Paper} className='dp-table'>
                  <Table >
                    <TableHead>
                      <TableRow>
                        <TableHeadCell align="right" className='table-head'>Phase</TableHeadCell>
                        <TableHeadCell className='table-head'>Phase Name</TableHeadCell>
                        <TableHeadCell className='table-head'>What happens</TableHeadCell>
                        <TableHeadCell className='table-head'>Who participates</TableHeadCell>
                      </TableRow>
                    </TableHead>
                    <TableBody className='table-body'>
                      {this.rows.map((row) => (
                        <TableRow key={row.phase} className='table-row'>
                          <TableCell align="right" className='table-cell'> {row.phase} </TableCell>
                          <TableCell className='table-cell'>{row.phaseName}</TableCell>
                          <TableCell className='table-cell'>{row.whatHappens}</TableCell>
                          <TableCell className='table-cell'>{row.who}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </Container>
        </div>
      );
    }

    return null;
  }
}

DevelopmentProcessServiceComponent.propTypes = {
  service: PropTypes.object.isRequired,
  backButtonClickHandler: PropTypes.func
};
