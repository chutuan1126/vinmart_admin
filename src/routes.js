import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

import AuthLayout from 'layouts/auth';
import DashboardLayout from 'layouts/dashboard';

const routes = [
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
        component: () => <Redirect to="/auth/login" />
      }
    ]
  },{
    route: '*',
    component: DashboardLayout,
    routes: [
      {
        path: '/overview',
        exact: true,
        component: lazy(() => import('container/overview'))
      },
      {
        path: '/dashboards/analytics',
        exact: true,
        component: lazy(() => import('container/dashboards/analytics'))
      },
      {
        path: '/dashboards/default',
        exact: true,
        component: lazy(() => import('container/dashboards/analytics'))
      },
      {
        path: '/calendar',
        exact: true,
        component: lazy(() => import('container/dashboards/analytics'))
      },
      {
        path: '/changelog',
        exact: true,
        component: lazy(() => import('container/dashboards/analytics'))
      },
      {
        path: '/chat',
        exact: true,
        component: lazy(() => import('container/dashboards/analytics'))
      },
      {
        path: '/chat/:id',
        exact: true,
        component: lazy(() => import('container/dashboards/analytics'))
      },
      {
        path: '/invoices/:id',
        exact: true,
        component: lazy(() => import('container/dashboards/analytics'))
      },
      {
        path: '/kanban-board',
        exact: true,
        component: lazy(() => import('container/dashboards/analytics'))
      },
      {
        path: '/mail',
        exact: true,
        component: lazy(() => import('container/dashboards/analytics'))
      },
      {
        path: '/management/customers',
        exact: true,
        component: lazy(() => import('container/dashboards/analytics'))
      },
      {
        path: '/management/customers/:id',
        exact: true,
        component: lazy(() => import('container/dashboards/analytics'))
      },
      {
        path: '/management/customers/:id/:tab',
        exact: true,
        component: lazy(() => import('container/dashboards/analytics'))
      },
      {
        path: '/management/projects',
        exact: true,
        component: lazy(() => import('container/dashboards/analytics'))
      },
      {
        path: '/management/orders',
        exact: true,
        component: lazy(() => import('container/dashboards/analytics'))
      },
      {
        path: '/management/orders/:id',
        exact: true,
        component: lazy(() => import('container/dashboards/analytics'))
      },
      {
        path: '/presentation',
        exact: true,
        component: lazy(() => import('container/dashboards/analytics'))
      },
      {
        path: '/profile/:id',
        exact: true,
        component: lazy(() => import('container/dashboards/analytics'))
      },
      {
        path: '/profile/:id/:tab',
        exact: true,
        component: lazy(() => import('container/dashboards/analytics'))
      },
      {
        path: '/projects/create',
        exact: true,
        component: lazy(() => import('container/dashboards/analytics'))
      },
      {
        path: '/projects/:id',
        exact: true,
        component: lazy(() => import('container/dashboards/analytics'))
      },
      {
        path: '/projects/:id/:tab',
        exact: true,
        component: lazy(() => import('container/dashboards/analytics'))
      },
      {
        path: '/projects',
        exact: true,
        component: lazy(() => import('container/dashboards/analytics'))
      },
      {
        path: '/settings',
        exact: true,
        component: lazy(() => import('container/dashboards/analytics'))
      },
      {
        path: '/settings/:tab',
        exact: true,
        component: lazy(() => import('container/dashboards/analytics'))
      },
      {
        path: '/social-feed',
        exact: true,
        component: lazy(() => import('container/dashboards/analytics'))
      },
      {
        path: '/getting-started',
        exact: true,
        component: lazy(() => import('container/dashboards/analytics'))
      },
      {
        component: () => <Redirect to="/overview" />
      }
    ]
  }
];

export default routes;
