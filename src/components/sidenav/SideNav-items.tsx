
import { Icon } from '@/components/Icon';
import { ICONS } from './icons';
import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon name={ICONS.home} className="w-5 h-5" />,
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <Icon name={ICONS.folder} className="w-5 h-5" />,
    submenu: true,
    subMenuItems: [
      { title: 'All', path: '/projects' },
      { title: 'Recent', path: '/projects/recent' },
    ],
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <Icon name={ICONS.mail} className="w-5 h-5" />,
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <Icon name={ICONS.settings} className="w-5 h-5" />,
    submenu: true,
    subMenuItems: [
      { title: 'Account', path: '/settings/account' },
      { title: 'Privacy', path: '/settings/privacy' },
    ],
  },
  {
    title: 'Help',
    path: '/help',
    icon: <Icon name={ICONS["help-circle"]} className="w-5 h-5" />,
  },
];
