import React, { useState } from 'react';
import BottomNav from '../components/BottomNavBar';
import TinderCard from 'react-tinder-card';
import './App.css';

const db = [
  {
    name: 'Richard Hendricks',
    url: 'https://i.imgur.com/MWAcQRM.jpeg'
  },
  {
    name: 'Erlich Bachman',
    url: 'https://i.imgur.com/Lnt9K7l.jpeg'
  },
  {
    name: 'Monica Hall',
    url: 'https://i.imgur.com/Q9WPlWA.jpeg'
  },
  {
    name: 'Jared Dunn',
    url: 'https://i.imgur.com/Gg6BpGn.jpeg'
  },
  {
    name: 'Dinesh Chugtai',
    url: 'https://i.imgur.com/clq9lGO.jpeg'
  },
  {
    name: 'Erlich Bachman',
    url: 'https://i.imgur.com/Lnt9K7l.jpeg'
  },
  {
    name: 'Monica Hall',
    url: 'https://i.imgur.com/Q9WPlWA.jpeg'
  },
  {
    name: 'Jared Dunn',
    url: 'https://i.imgur.com/Gg6BpGn.jpeg'
  },
  {
    name: 'Dinesh Chugtai',
    url: 'https://i.imgur.com/clq9lGO.jpeg'
  }
  
]


function Dashboard() {
  const [activeTab, setActiveTab] = useState('home');

  const onChangeTab = (tab) => {
    setActiveTab(tab);
  };

  const characters = db
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (

    <div className="flex flex-col h-screen">
      <div className="flex-grow">
      <div>
      <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
      <h1>React Tinder Card</h1>
      <div className='cardContainer'>
        {characters.map((character) =>
          <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        )}
      </div>
      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
    </div>
      </div>
      <BottomNav activeTab={activeTab} onChangeTab={onChangeTab} />
    </div>
  );
}

  

  export default Dashboard;

