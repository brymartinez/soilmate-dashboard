
import { Icon } from '@/components/ui/icon';
import { ICONS } from './icons';
import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <Icon name={ICONS.dashboard} className="w-5 h-5" />,
  },
  {
    title: 'Users',
    path: '/users',
    icon: <Icon name={ICONS.users} className="w-5 h-5" />,
  },
  {
    title: 'Inquiries',
    path: '/inquiries',
    icon: <Icon name={ICONS.inquiries} className="w-5 h-5" />,
  },
  {
    title: 'Bookings',
    path: '/bookings',
    icon: <Icon name={ICONS.bookings} className="w-5 h-5" />,
  },
  {
    title: 'Payments',
    path: '/payments',
    icon: <Icon name={ICONS.payments} className="w-5 h-5" />,
  },
  {
    title: 'Subscriptions',
    path: '/subscriptions',
    icon: <Icon name={ICONS.subscriptions} className="w-5 h-5" />,
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <Icon name={ICONS.reports} className="w-5 h-5" />,
  },
  {
    title: 'Rewards',
    path: '/rewards',
    icon: <Icon name={ICONS.rewards} className="w-5 h-5" />,
  },
  {
    title: 'Promos',
    path: '/promos',
    icon: <Icon name={ICONS.promos} className="w-5 h-5" />,
  },
];
