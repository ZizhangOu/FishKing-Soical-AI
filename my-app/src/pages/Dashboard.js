import React, { useState } from 'react';
import BottomNav from './components/BottomNavBar';


function Dashboard() {
  const [activeTab, setActiveTab] = useState('home');

  const onChangeTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow">

      </div>
      <BottomNav activeTab={activeTab} onChangeTab={onChangeTab} />
    </div>
  );
}

  

  export default Dashboard;



  