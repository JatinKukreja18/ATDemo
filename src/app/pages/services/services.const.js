import DesignEngineeringServicesComponent from '../serviceDetail/designEngineeringService/designEngineeringService';
import HardwareDesignComponent from '../serviceDetail/designEngineeringService/hardwareDesign';
import FirmwareDesignComponent from '../serviceDetail/designEngineeringService/firmwareDesign';
import RetrofittingComponent from '../serviceDetail/designEngineeringService/retrofitting';
import ProductEngineeringSupportComponent from '../serviceDetail/designEngineeringService/productEngineeringSupport';
import DocumentationComponent from '../serviceDetail/designEngineeringService/documentation';
import DevelopmentProcessComponent from '../serviceDetail/developmentProcess/developmentProcess';
import IndustrialSolutionsComponent from '../serviceDetail/industrialSolutions/industrialSolutions';
import ManufacturingServicesComponent from '../serviceDetail/manufacturingServices/manufacturingServices';
import BackgroundImage from '../../../assets/compressed/amtech-operations.jpg';
import { SERVICES } from "../../router/routes.const";

// Note:- The id and the end url in the link should have the same text
// All the fields given in the JSON object are mandatory

export const SERVICE_LIST = [
  {
    id: 'design-engineering-services',
    displayText: 'Design Engineering Services',
    backgroundImage: BackgroundImage,
    link: `${SERVICES}/design-engineering-services`,
    detailsComponent: DesignEngineeringServicesComponent,
    subList: [
      {
        id: 'hardware-design',
        displayText: 'Hardware Design',
        link: `${SERVICES}/design-engineering-services#hardware-design`,
        component: HardwareDesignComponent
      },
      {
        id: 'firmware-design',
        displayText: 'Firmware Design',
        link: `${SERVICES}/design-engineering-services#firmware-design`,
        component: FirmwareDesignComponent
      },
      {
        id: 'retrofitting',
        displayText: 'Retrofitting',
        link: `${SERVICES}/design-engineering-services#retrofitting`,
        component: RetrofittingComponent
      },
      {
        id: 'product-engineering-support',
        displayText: 'Product Engineering Support',
        link: `${SERVICES}/design-engineering-services#product-engineering-support`,
        component: ProductEngineeringSupportComponent
      },
      {
        id: 'documentation',
        displayText: 'Documentation',
        link: `${SERVICES}/design-engineering-services#documentation`,
        component: DocumentationComponent
      }
    ]
  },
  {
    id: 'development-process',
    displayText: 'Development Process',
    backgroundImage: BackgroundImage,
    link: `${SERVICES}/development-process`,
    detailsComponent: DevelopmentProcessComponent,
    subList: [
      {
        id: 'work-with-you',
        displayText: 'We work with you to give you the best possible solution',
        link: `${SERVICES}/development-process`
      },
      {
        id: 'jump-in-design',
        displayText: 'Ability to jump in wherever you are in your design phase',
        link: `${SERVICES}/development-process`
      },
      {
        id: 'confidentiality',
        displayText: 'Confidentiality (we like NDAs)',
        link: `${SERVICES}/development-process`
      }
    ]
  },
  {
    id: 'industrial-solutions',
    displayText: 'Industrial Solutions',
    backgroundImage: BackgroundImage,
    link: `${SERVICES}/industrial-solutions`,
    detailsComponent: IndustrialSolutionsComponent,
    subList: [
      {
        id: 'understanding-requirements',
        displayText: 'Understanding requirements',
        link: `${SERVICES}/industrial-solutions`
      },
      {
        id: 'repeatability',
        displayText: 'Repeatability',
        link: `${SERVICES}/industrial-solutions`
      },
      {
        id: 'bom',
        displayText: 'BOM implementation and sourcing',
        link: `${SERVICES}/industrial-solutions`
      },
      {
        id: 'tooling',
        displayText: 'Tooling',
        link: `${SERVICES}/industrial-solutions`
      }
    ]
  },
  {
    id: 'manufacturing-services',
    displayText: 'Manufacturing Services',
    backgroundImage: BackgroundImage,
    link: `${SERVICES}/manufacturing-services`,
    detailsComponent: ManufacturingServicesComponent,
    subList: [
      {
        id: 'new-existing-services',
        displayText: 'Manufacture new or existing designs',
        link: `${SERVICES}/manufacturing-services`
      },
      {
        id: 'scm',
        displayText: 'Supply Chain Management',
        link: `${SERVICES}/manufacturing-services`
      },
      {
        id: 'turn-key-assembly',
        displayText: 'Turn-key assembly',
        link: `${SERVICES}/manufacturing-services`
      }
    ]
  }

];