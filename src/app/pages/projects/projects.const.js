import AutomatedPowerControlComponent from '../projectDetail/automatedPowerControl/automatedPowerControl';
import CleanRoomControlComponent from '../projectDetail/cleanRoomControl/cleanRoomControl';
import CustomIntegratedDisplayComponent from '../projectDetail/customIntegratedDisplay/customIntegratedDisplay';
import MidiControlledReactiveLightingComponent from '../projectDetail/midiControlledReactiveLighting/midiControlledReactiveLighting';
import BackgroundImage from '../../../assets/compressed/amtech-operations.jpg';
import { PROJECTS } from "../../router/routes.const";

// Note:- The id and the end url in the link should have the same text
// All the fields given in the JSON object are mandatory

export const PROJECT_LIST = [
  {
    id: 'clean-room-control',
    displayText: 'Clean Room Control and Monitoring System',
    backgroundImage: BackgroundImage,
    link: `${PROJECTS}/clean-room-control`,
    detailsComponent: CleanRoomControlComponent,
    subList: [
      {
        id: 'automated-airspeed-control',
        displayText: 'Automated airspeed control',
        link: `${PROJECTS}/clean-room-control`
      },
      {
        id: 'filtration-monitoring',
        displayText: 'Filtration monitoring',
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
    backgroundImage: BackgroundImage,
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
    backgroundImage: BackgroundImage,
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
        displayText: 'UL Compliance',
        link: `${PROJECTS}/automated-power-control`
      }
    ]
  },
  {
    id: 'midi-controlled-reactive-lighting',
    displayText: 'PROTOTYPE: MIDI-Controlled Reactive Lighting',
    backgroundImage: BackgroundImage,
    link: `${PROJECTS}/midi-controlled-reactive-lighting`,
    detailsComponent: MidiControlledReactiveLightingComponent,
    subList: [
      {
        id: 'fun-concept',
        displayText: 'Fun concept design project',
        link: `${PROJECTS}/midi-controlled-reactive-lighting`
      },
      {
        id: 'stage-lighting',
        displayText: 'Interactive stage performance lighting',
        link: `${PROJECTS}/midi-controlled-reactive-lighting`
      },
      {
        id: 'concerts',
        displayText: 'Makes exciting concerts',
        link: `${PROJECTS}/midi-controlled-reactive-lighting`
      }
    ]
  }
];