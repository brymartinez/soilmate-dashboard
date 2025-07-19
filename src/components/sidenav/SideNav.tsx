
'use client';

import React from 'react';
import { SideNavItem, SideNavItemType } from './SideNavItem';
import { Icon } from '../ui/icon';
import { faEnvelope, faQuestionCircle, faUser, faGauge, faUsers, faTruck, faMoneyBill, faRectangleList, faChartColumn, faTrophy, faBarcode, faListNumeric, faMapLocation, faHandshake, faMobile, faNewspaper, faAnchor, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

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

const SideNav = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="md:w-60 bg-white h-full fixed top-0 left-0 z-40 border-r border-zinc-200 block">
      <div className="flex flex-col w-full">
        <div className="flex flex-row items-center gap-2 font-bold uppercase text-lg select-none p-4 border-b border-gray-300 h-[64px] w-full">
          <Image src="/soilmate-logo.png" width={20} height={20} alt="Soilmate Logo" className="object-contain w-5 h-5 mr-2" />
          <span className="text-green-400">Soil</span>
          <span className="text-yellow-500">Mate</span>
        </div>

        <div className="flex flex-col space-y-2 md:px-6 pt-4">
          {SIDENAV_ITEMS.map((item, idx) => {
            return <SideNavItem key={idx} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
