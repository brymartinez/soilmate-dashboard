'use client';

import React, { useState } from 'react';
import { SideNavItem } from './types';
import { Icon } from '@/components/Icon';
import { ICONS } from './icons';

import { usePathname } from 'next/navigation';

export const SideNavItemComponent = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div className="w-full text-[#67707F] font-normal">
      <div
        onClick={toggleSubMenu}
        className={`flex items-center space-x-2 p-2 rounded-md hover:bg-zinc-100 cursor-pointer ${item.path === pathname ? 'bg-zinc-100' : ''
          }`}
      >
        {item.icon}
        <span className="text-base flex-1">{item.title}</span>
        {item.submenu && (
          <Icon name={subMenuOpen ? ICONS["chevron-down"] : ICONS["chevron-right"]} className="w-4 h-4" />
        )}
      </div>

      {subMenuOpen && item.submenu && (
        <div className="my-2 ml-12 flex flex-col space-y-4">
          {item.subMenuItems?.map((subItem, idx) => {
            return (
              <a
                key={idx}
                href={subItem.path}
                className={`${subItem.path === pathname ? 'font-bold' : ''
                  }`}
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

export default SideNavItemComponent;
