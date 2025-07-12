"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle, faAngleDown, faPowerOff } from '@fortawesome/free-solid-svg-icons';

// TODO: Replace with actual user data from context/auth
const user = {
  name: 'John Doe',
  role: 'Administrator',
};

export function HeaderNav({ onBurgerClick }: { onBurgerClick: () => void }) {
  const [profileOpen, setProfileOpen] = useState(false);

  const handleMenuClick = () => {
    onBurgerClick();
  };

  const handleLogout = () => {
    // TODO: Integrate with actual logout logic
    // e.g., call signOut(), clear tokens, redirect, etc.
    // For now, just close the profile dropdown
    setProfileOpen(false);
  };

  return (
    <div className="flex items-center justify-between h-[64px] p-4 border-b border-gray-300 bg-white z-50 relative md:ml-60">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          className="p-2"
          aria-label="Toggle sidenav"
          onClick={handleMenuClick}
        >
          <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
        </Button>
      </div>
      <div className="relative">
        <Button
          variant="ghost"
          className="flex items-center gap-2"
          onClick={() => setProfileOpen((open) => !open)}
        >
          <FontAwesomeIcon icon={faUserCircle} className="w-6 h-6 text-gray-500" />
          <span className="hidden md:inline text-gray-700 dark:text-gray-300 font-medium">{user.name}</span>
          <FontAwesomeIcon icon={faAngleDown} className="w-4 h-4 ml-1 text-gray-500" />
        </Button>
        {profileOpen && (
          <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-900 rounded-md shadow-lg z-50 border">
            <div className="px-4 py-3 border-b">
              <div className="font-semibold text-md">{user.name}</div>
              <div className="italic text-xs text-gray-400">{user.role}</div>
            </div>
            <div className="py-2">
              <Button
                variant="ghost"
                className="flex items-center gap-2 w-full text-red-500 justify-start"
                onClick={handleLogout}
              >
                <FontAwesomeIcon icon={faPowerOff} className="w-4 h-4" />
                Logout
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HeaderNav;
