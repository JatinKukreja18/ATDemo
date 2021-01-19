import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";
import { withRouter } from 'react-router-dom';
import Card from '../../components/card/card';
import ProjectDetailsPage from '../projectDetail';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import IconButton from '@material-ui/core/IconButton';
import Zoom from '@material-ui/core/Zoom';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { PROJECT_LIST } from "./projects.const";
import { CAROUSEL_CONFIG } from "../../App.const";

import "./projects.scss";

const DIRECTIONS = {
  LEFT: 'left',
  RIGHT: 'right'
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} timeout={500} />;
});


// Right Section with carousel
class ProjectRightSectionComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projectId: '',
      subId: '',
      detailsOpen: false,
      currentCard: 0,
      direction: DIRECTIONS.RIGHT
    };
  }

  openDialog = () => {
    this.setState({
      detailsOpen: true
    });
  }

  closeDialog = () => {
    this.setState({
      detailsOpen: false
    });
  }

  onAnimationEnd = (event) => {
    event.target.classList.add("hidden");
  }

  onPrevClickHandler = () => {
    this.setState({
      currentCard: this.state.currentCard === 0 ? 0 : this.state.currentCard - 1,
      direction: DIRECTIONS.LEFT
    });
  }

  onNextClickHandler = () => {
    const newCardNumber = this.state.currentCard === PROJECT_LIST.length - 1 ? this.state.currentCard : this.state.currentCard + 1;
    this.setState({
      currentCard: newCardNumber,
      direction: DIRECTIONS.RIGHT
    });
  }

  linkClickHandler = (projectId, subId) => {
    this.setState({
      projectId: projectId,
      subId: subId ? subId: ''
    },() => {
      this.openDialog();
    });
  }

  renderMobileView = ()  => {
    return (
      <div className='second-section'>
      <Carousel {...CAROUSEL_CONFIG}>
        {
          PROJECT_LIST.map( (item, i) => {
            return (
              <div key={i} className={`carousel-item`}>
                <Card item={item} linkClickHandler={this.linkClickHandler}/>
              </div>
            );
          })
        }
      </Carousel>

      </div>
    )
  }

  renderDesktopView = () => {
    const {currentCard, direction} = this.state;
    return (
      <div className='second-section'>
        <div className='carousel-item-container'>
          {
            PROJECT_LIST.map( (item, i) => {
              let classes = '';
              if (i === currentCard) {
                classes = 'active';
              } else if (i < currentCard) { // prev card
                classes = 'old';
              } else { // next card
                classes = 'new';
              }

              classes = `${classes} ${direction}`;
              let props = {};
              if (i < currentCard) {
                props = direction === DIRECTIONS.RIGHT ? {
                  onAnimationEnd: this.onAnimationEnd
                } : {
                  onAnimationStart: this.onAnimationEnd
                }
              }
             
              return (
                <div key={i} id={`c-item-${i}`}  className={`carousel-item ${classes}`} {...props}>
                  <Card item={item} linkClickHandler={this.linkClickHandler}/>
                </div>
              );
            })
          }
          <div className='carousel-item' style={{visibility: 'hidden'}}>
            <Card item={{}}/>
          </div>
        </div>
        <div className='arrow-buttons-container'>
          <div className='prev-btn-container'>
            <IconButton variant="contained" className='arrow-buttons prev-btn' onClick={this.onPrevClickHandler} disabled={currentCard===0}>
              <KeyboardArrowLeft />
            </IconButton>
          </div>
          <div className='next-btn-container'>
            <IconButton variant="contained" className='arrow-buttons next-btn' onClick={this.onNextClickHandler} disabled={currentCard===PROJECT_LIST.length - 1}>
              <KeyboardArrowRight />
            </IconButton>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { isMobile } = this.props;
    const { detailsOpen, projectId, subId } = this.state; 
    return (
      <>
      {isMobile ? this.renderMobileView() : this.renderDesktopView()}
      <Dialog open={detailsOpen} fullScreen scroll={'paper'} onClose={this.closeDialog} TransitionComponent={Transition}>
        <DialogContent id='project-details-dialog-content' className='am-details-dialog'>
        {
          projectId ? <ProjectDetailsPage isMobile={isMobile} projectId={projectId} subId={subId} closeDialog={this.closeDialog} /> : null
        }
        </DialogContent>
      </Dialog>
      </>
    );
  }
}

// withRouter adds history object to props. It is High Order Component
export default withRouter(ProjectRightSectionComponent);