'use client';

import React, { ReactNode, useState } from 'react';
import { Icon } from '@/components/ui/icon';
import { usePathname } from 'next/navigation';
import { ICONS } from './SideNav';

export type SideNavItemType = {
  title: string;
  path: string;
  icon?: ReactNode;
  submenu?: boolean;
  subMenuItems?: SideNavItemType[];
};

export const SideNavItem = ({ item }: { item: SideNavItemType }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div className="w-full font-normal text-primary">
      <div
        onClick={toggleSubMenu}
        className={`flex items-center space-x-2 p-2 rounded-md hover:bg-zinc-100 cursor-pointer ${item.path === pathname ? '!text-green-500' : ''}`}
      >
        {item.icon}
        <span className="text-base flex-1">{item.title}</span>
        <Icon name={ICONS.chevronRight} className="w-4 h-4" />
      </div>

      {subMenuOpen && item.submenu && (
        <div className="my-2 ml-12 flex flex-col space-y-4">
          {item.subMenuItems?.map((subItem, idx) => {
            return (
              <a
                key={idx}
                href={subItem.path}
                className={`${subItem.path === pathname ? 'font-bold' : ''}`}
              >
                <span>{subItem.title}</span>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SideNavItem;
