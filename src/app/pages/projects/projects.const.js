import AutomatedPowerControlComponent from '../projectDetail/automatedPowerControl/automatedPowerControl';
import CleanRoomControlComponent from '../projectDetail/cleanRoomControl/cleanRoomControl';
import CustomIntegratedDisplayComponent from '../projectDetail/customIntegratedDisplay/customIntegratedDisplay';
import MidiControlledReactiveLightingComponent from '../projectDetail/midiControlledReactiveLighting/midiControlledReactiveLighting';
import BackgroundImage from '../../../assets/compressed/amtech-operations.jpg';
import { PROJECTS } from "../../router/routes.const";
import ccsImage from '../../../assets/compressed/cleanRoomControlBoard.jpg';
import scrImage from '../../../assets/compressed/amtech-operations.jpg';
import pwrImage from '../../../assets/compressed/automatedPowerControl.jpg';
import midiImage from '../../../assets/compressed/midiControllerWorking.jpg';

// Note:- The id and the end url in the link should have the same text
// All the fields given in the JSON object are mandatory


export const PROJECT_LIST = [
  {
    id: 'clean-room-control',
    displayText: 'Clean Room Control and Monitoring System',
    backgroundImage: ccsImage,
    link: `${PROJECTS}/clean-room-control`,
    detailsComponent: CleanRoomControlComponent,
    subList: [
      {
        id: 'automated-airspeed-control',
        displayText: 'Automated air speed control',
        link: `${PROJECTS}/clean-room-control`
      },
      {
        id: 'filtration-monitoring',
        displayText: 'Air filtration monitoring',
        link: `${PROJECTS}/clean-room-control`
      },
      {
        id: 'compliance',
        displayText: 'Class I and Class II compliance',
        link: `${PROJECTS}/clean-room-control`
      }
    ]
  },
  {
    id: 'custom-integrated-display',
    displayText: 'Custom Integrated Display',
    backgroundImage: scrImage,
    link: `${PROJECTS}/custom-integrated-display`,
    detailsComponent: CustomIntegratedDisplayComponent,
    subList: [
      {
        id: 'visual-control',
        displayText: 'Visual control for the Clean Room Control and Monitoring System',
        link: `${PROJECTS}/custom-integrated-display`
      },
      {
        id: 'touch-screen',
        displayText: 'Touch screen and custom graphics',
        link: `${PROJECTS}/custom-integrated-display`
      }
    ]
  },
  {
    id: 'automated-power-control',
    displayText: 'Automated Power Control and Monitoring',
    backgroundImage: pwrImage,
    link: `${PROJECTS}/automated-power-control`,
    detailsComponent: AutomatedPowerControlComponent,
    subList: [
      {
        id: 'power-monitoring',
        displayText: 'Power monitoring for an energy utility',
        link: `${PROJECTS}/automated-power-control`
      },
      {
        id: 'hv-specifications',
        displayText: 'High power/high voltage specifications',
        link: `${PROJECTS}/automated-power-control`
      },
      {
        id: 'ul-compliance',
        displayText: 'Regulatory Compliance',
        link: `${PROJECTS}/automated-power-control`
      }
    ]
  },
  {
    id: 'midi-controlled-reactive-lighting',
    displayText: 'PROTOTYPE: MIDI-Controlled Reactive Lighting',
    backgroundImage: midiImage,
    link: `${PROJECTS}/midi-controlled-reactive-lighting`,
    detailsComponent: MidiControlledReactiveLightingComponent,
    subList: [
      {
        id: 'fun-concept',
        displayText: 'Proof of concept design project',
        link: `${PROJECTS}/midi-controlled-reactive-lighting`
      },
      {
        id: 'stage-lighting',
        displayText: 'Interactive stage performance lighting',
        link: `${PROJECTS}/midi-controlled-reactive-lighting`
      },
      // {
      //   id: 'concerts',
      //   displayText: 'Makes exciting concerts',
      //   link: `${PROJECTS}/midi-controlled-reactive-lighting`
      // }
    ]
  }
];