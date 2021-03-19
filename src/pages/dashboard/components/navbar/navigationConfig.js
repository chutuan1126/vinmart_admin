import React from 'react';
import { colors } from '@material-ui/core';
import {
  BarChart,
  CalendarToday,
  Chat,
  Code,
  Dashboard,
  Error,
  Folder,
  Home,
  ListAlt,
  LockOpen,
  Mail,
  PresentToAll,
  People,
  Person,
  Receipt,
  Settings,
  ViewModule
} from '@material-ui/icons';

import { Label } from 'components';

export default [
  {
    title: null,
    pages: [
      {
        title: 'Overview',
        href: '/overview',
        icon: Home
      },
      {
        title: 'Dashboards',
        href: '/dashboards',
        icon: Dashboard,
        children: [
          {
            title: 'Default',
            href: '/dashboards/default'
          },
          {
            title: 'Analytics',
            href: '/dashboards/analytics'
          }
        ]
      },
      {
        title: 'Management',
        href: '/management',
        icon: BarChart,
        children: [
          {
            title: 'Customers',
            href: '/management/customers'
          },
          {
            title: 'Customer Details',
            href: '/management/customers/1/summary'
          },
          {
            title: 'Projects',
            href: '/management/projects'
          },
          {
            title: 'Orders',
            href: '/management/orders'
          },
          {
            title: 'Order Details',
            href: '/management/orders/1'
          }
        ]
      },
      {
        title: 'Social Feed',
        href: '/social-feed',
        icon: People
      },
      {
        title: 'Profile',
        href: '/profile',
        icon: Person,
        children: [
          {
            title: 'Timeline',
            href: '/profile/1/timeline'
          },
          {
            title: 'Connections',
            href: '/profile/1/connections'
          },
          {
            title: 'Projects',
            href: '/profile/1/projects'
          },
          {
            title: 'Reviews',
            href: '/profile/1/reviews'
          }
        ]
      },
      {
        title: 'Project',
        href: '/projects',
        icon: Folder,
        children: [
          {
            title: 'Browse',
            href: '/projects'
          },
          {
            title: 'Create',
            href: '/projects/create'
          },
          {
            title: 'Overview',
            href: '/projects/1/overview'
          },
          {
            title: 'Files',
            href: '/projects/1/files'
          },
          {
            title: 'Activity',
            href: '/projects/1/activity'
          },
          {
            title: 'Subscribers',
            href: '/projects/1/subscribers'
          }
        ]
      },
      {
        title: 'Invoice',
        href: '/invoices/1',
        icon: Receipt
      },
      {
        title: 'Kanban Board',
        href: '/kanban-board',
        icon: ListAlt
      },
      {
        title: 'Mail',
        href: '/mail',
        icon: Mail,
        label: () => (
          <Label
            color={colors.red[500]}
            shape="rounded"
          >
            2
          </Label>
        )
      },
      {
        title: 'Chat',
        href: '/chat',
        icon: Chat,
        label: () => (
          <Label
            color={colors.red[500]}
            shape="rounded"
          >
            4
          </Label>
        )
      },
      {
        title: 'Calendar',
        href: '/calendar',
        icon: CalendarToday,
        label: () => <Label color={colors.green[500]}>New</Label>
      },
      {
        title: 'Settings',
        href: '/settings',
        icon: Settings,
        children: [
          {
            title: 'General',
            href: '/settings/general'
          },
          {
            title: 'Subscription',
            href: '/settings/subscription'
          },
          {
            title: 'Notifications',
            href: '/settings/notifications'
          },
          {
            title: 'Security',
            href: '/settings/security'
          }
        ]
      },
      {
        title: 'Errors',
        href: '/errors',
        icon: Error,
        children: [
          {
            title: 'Error 401',
            href: '/errors/error-401'
          },
          {
            title: 'Error 404',
            href: '/errors/error-404'
          },
          {
            title: 'Error 500',
            href: '/errors/error-500'
          }
        ]
      }
    ]
  },
  {
    title: 'Support',
    pages: [
      {
        title: 'Presentation',
        href: '/presentation',
        icon: PresentToAll
      },
      {
        title: 'Getting started',
        href: '/getting-started',
        icon: Code
      },
      {
        title: 'Changelog',
        href: '/changelog',
        icon: ViewModule,
        label: () => <Label color={colors.blue['500']}>v1.2.0</Label>
      }
    ]
  }
];
