import React from 'react';

import {
 
  HomeIcon,
  InboxIcon,
  UsersIcon,
  UserCircleIcon,
  StarIcon,
 

} from '@heroicons/react/24/outline';
function BottomNavBar({  }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: HomeIcon,href:"/"}, 
    { id: 'profile', label: 'Profile', icon:  UsersIcon ,href:"profile"}, 

{id: 'recommend', label: 'Recommend', icon:  InboxIcon,href:"/recommend"},
{ id: 'star', label: 'Star', icon:  StarIcon,href:"/star"},
{id: 'chat', label: 'chat', icon:  InboxIcon,href:"/chat"}

  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-300">
      <ul className="flex justify-between mx-4 py-3">
        {tabs.map((tab) => (
          <a
            key={tab.id}
            href={tab.href}
            className={`flex flex-col items-center`}
          
          >
            <span className="mdi mdi-24px mdi-home-outline" />
            <tab.icon className="h-5 w-5" />
            <span className="text-xs">{tab.label}</span>
          </a>
        ))}
      </ul>
    </nav>
  );
}

export default BottomNavBar;
