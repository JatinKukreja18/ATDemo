import HomeIcon from '@material-ui/icons/Home';
import MemoryIcon from '@material-ui/icons/Memory';
import SettingsIcon from '@material-ui/icons/Settings';
import PhoneCallbackIcon from '@material-ui/icons/PhoneCallback';

import { DEFAULT, SERVICES, PROJECTS, INQUIRY } from '../../router/routes.const';

export const MENU_ITEMS = [
  {
    id: 1,
    text: 'HOME',
    icon: HomeIcon,
    path: DEFAULT,
    classes: ''
  },
  {
    id: 2,
    text: 'SERVICES',
    icon: MemoryIcon,
    path: SERVICES,
    classes: ''
  },
  {
    id: 3,
    text: 'PROJECTS',
    icon: SettingsIcon,
    path: PROJECTS,
    classes: ''
  },
  {
    id: 4,
    text: 'CONTACT US',
    icon: PhoneCallbackIcon,
    path: INQUIRY,
    classes: ''
  }
];