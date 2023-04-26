import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Board from './pages/Board';
import Deadlines from './pages/Deadlines';
import CreateIssue from './pages/CreateIssue';
import Profile from './pages/Profile';

import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'board',
    element: <Board />
  },
  {
    path: 'calendar',
    element: <Calendar />
  },
  {
    path: 'deadlines',
    element: <Deadlines />
  },
  {
    path: 'createissue',
    element: <CreateIssue />
  },
  {
    path: 'profile',
    element: <Profile />
  },
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={router} />
);
