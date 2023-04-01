import {Login} from '../pages/Login';
import {Register} from '../pages/Register';

import Home from '../pages/Home';

import { Navigate } from 'react-router-dom';

export const appRoutes = [
  { path: '/signup', element: <Register /> },
  { path: '/login', element: <Login /> },

  // {
  //   path: '/dashboard',
  //   element: </>,
  //   children: [
  //     { path: '', element: <Navigate to="overview" /> },
  //     { path: 'overview', element: </> },
  //     { path: 'interview', element: < /> },
     
     
  //   ],
  // },

  { path: '/', element: <Home /> },
];
