import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Header from '../../components/header/header';
import { DEFAULT } from '../../router/routes.const';
import { animated } from 'react-spring/renderprops'

import './inquiries.scss';

export default class InquiriesComponent extends Component {

  state = {
    name: '',
    email: '',
    request: ''
  };

  fieldUpdateHandler = (event) => {
    const el = event.target;
    this.setState({ [el.name]: el.value });
  }

  onFormSubmit = (event) => {
    event.stopPropagation();
    event.preventDefault();
  }
  renderForm = () => {
    const { name, email, request } = this.state;
    return (
      <div className='form-container'>
        <Typography variant='h5' className='inquiries-title'>Contact Us</Typography>
        <Typography variant="subtitle1">
          Have a project on your mind? Drop your details here.
        </Typography>
        <form className='inquiries-form' onSubmit={this.onFormSubmit}>
          <FormControl fullWidth className='form-field'>
            <TextField autoFocus InputProps={{ className: 'form-input' }} InputLabelProps={{ className: 'form-label' }} label='Full Name' id="name" name='name' required value={name} onChange={this.fieldUpdateHandler} />
          </FormControl>
          <FormControl fullWidth className='form-field'>
            <TextField InputProps={{ className: 'form-input' }} InputLabelProps={{ className: 'form-label' }} label='Email' id="email" name='email' type='email' required value={email} onChange={this.fieldUpdateHandler} />
          </FormControl>
          <FormControl fullWidth className='form-field'>
            <TextField InputProps={{ className: 'form-input' }} InputLabelProps={{ className: 'form-label' }} label='Request' id="request" name='request' multiline rows={4} required value={request} onChange={this.fieldUpdateHandler} />
          </FormControl>
          <div className='action-buttons' style={{ marginTop: '20px' }}>
            <Button variant="contained" className='submit-button' type='submit' startIcon={<KeyboardArrowRightIcon />}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }

  getBreadcrumbs = () => {
    return (
      <Breadcrumbs aria-label="breadcrumb" className='breadcrumb-container'>
        <Link className="breadcrumb" to={DEFAULT}>Home</Link>
        <Typography className='breadcrumb'>Inquiries</Typography>
      </Breadcrumbs>
    );
  }

  renderMobileView = () => {
    return this.renderForm();
  }

  renderDesktopView = () => {
    return (
      <>
        <Header title='Contact Us' breadcrumbs={this.getBreadcrumbs()} />
        <Paper elevation={5} className='inquiries-paper'>
          <div className='contact-us-section'>
            {this.renderForm()}
          </div>
          <div className='right-img'>
          </div>
        </Paper>
      </>
    )
  }

  render() {
    const { isMobile } = this.props;
    return (
      // <Slide direction="right" in={true} timeout={1000}>
      <animated.div className='inquiries-container' style={{ ...this.props.style }}>
        {isMobile ? this.renderMobileView() : this.renderDesktopView()}
      </animated.div>
      // </Slide>
    );
  }
}