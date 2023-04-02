import {Login} from '../pages/Login';
import {Register} from '../pages/Register';

import Home from '../pages/Home';
import Profile from '../pages/Profile';

import Recommend from '../pages/Recommend';
import BottomNavBar from '../components/BottomNavBar';
import DatingPreferences from '../pages/DatingPreferences';

import { Navigate } from 'react-router-dom';
import Star from '../pages/Star';

export const appRoutes = [
  { path: '/signup', element: <Register /> },
  { path: '/login', element: <Login /> },
  { path: '/profile', element: <Profile /> },

  { path: '/Recommend', element: <Recommend /> },
  { path: '/star', element: <Star/> },
  { path: '/DatingPreferences', element: <DatingPreferences/>},


  {
    path: '/BottomNav',
    element: <BottomNavBar/>,
    children: [
      { path: '', element: <Navigate to="profile" /> },
      { path: 'profile', element: <Profile /> },
      { path: 'Recommend', element: <Recommend/>},
  
     
     
    ],
  },

  { path: '/', element: <Home /> },
];
