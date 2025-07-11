
'use client';

import React from 'react';
import { SideNavItem, SideNavItemType } from './SideNavItem';
import { Icon } from '../ui/icon';
import { faEnvelope, faQuestionCircle, faUser, faGauge, faUsers, faTruck, faMoneyBill, faRectangleList, faChartColumn, faTrophy, faBarcode, faListNumeric, faMapLocation, faHandshake, faMobile, faNewspaper, faAnchor, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const ICONS = {
  dashboard: faGauge,
  users: faUsers,
  inquiries: faEnvelope,
  bookings: faTruck,
  payments: faMoneyBill,
  subscriptions: faRectangleList,
  reports: faChartColumn,
  rewards: faTrophy,
  promos: faBarcode,
  subscriptionPlans: faListNumeric,
  routes: faMapLocation,
  partners: faHandshake,
  metrics: faMobile,
  resources: faNewspaper,
  faqs: faQuestionCircle,
  administrators: faAnchor,
  loadUser: faUser,
  chevronRight: faChevronRight,
};


const SIDENAV_ITEMS: SideNavItemType[] = [
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

const SideNav = () => {
  return (
    <div className="md:w-60 bg-white h-screen flex-1 fixed border-r border-zinc-200 hidden md:flex">
      <div className="flex flex-col space-y-6 w-full">
        <div className="flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 border-b border-zinc-200 h-12 w-full">
          <span className="h-7 w-7 bg-zinc-300 rounded-lg" />
          <span className="font-bold text-xl hidden md:flex">Logo</span>
        </div>

        <div className="flex flex-col space-y-2 md:px-6">
          {SIDENAV_ITEMS.map((item, idx) => {
            return <SideNavItem key={idx} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
