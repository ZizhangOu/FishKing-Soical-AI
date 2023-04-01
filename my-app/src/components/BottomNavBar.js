import React from 'react';

function BottomNavBar({ activeTab, onChangeTab }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: 'home' },
{ id: 'category', label: 'Category', icon: 'tag' },
{ id: 'cart', label: 'Cart', icon: 'shopping-cart' },
{ id: 'profile', label: 'Profile', icon: 'user' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-300">
      <ul className="flex justify-between mx-4 py-5">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={`flex flex-col items-center ${
              activeTab === tab.id ? 'text-blue-500' : 'text-gray-500'
            }`}
            onClick={() => onChangeTab(tab.id)}
          >
            <span className="mdi mdi-24px mdi-home-outline" />
            <span className="text-xs">{tab.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default BottomNavBar;
