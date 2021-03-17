/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

import AuthLayout from 'pages/auth';

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/auth/login" />
  },
  {
    path: '/auth',
    component: AuthLayout,
    routes: [
      {
        path: '/auth/login',
        exact: true,
        component: lazy(() => import('container/login'))
      },
      {
        path: '/auth/register',
        exact: true,
        component: lazy(() => import('container/register'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
];

export default routes;
