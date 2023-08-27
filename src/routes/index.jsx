import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import MainLayout from '../layouts/main';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
import DashboardLayout from '../layouts/dashboard';
// import TestLayout from '../layouts/test';
// guards
// import GuestGuard from '../../guards/GuestGuard';
// import AuthGuard from '../guards/AuthGuard';
// import RoleBasedGuard from '../guards/RoleBasedGuard';
// config
// import { PATH_AFTER_LOGIN } from '../constants/configs';
// components

// import { PATHS } from './paths';

// ----------------------------------------

import Loadable from '../components/micro/Loadable';

export default function Router() {
  return useRoutes([
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: (
            // <GuestGuard>
            <Login />
            // </GuestGuard>
          ),
        },
      ],
    },

    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to='/404' replace /> },
      ],
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        // { element: <Navigate to='/' replace />, index: true },
        { path: '', element: <HomePage />, index: true },
        // { path: "about-us", element: <About /> },
        // { path: "contact-us", element: <Contact /> },
        // { path: "faqs", element: <Faqs /> },
      ],
    },

    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: '', element: <PageDashboard /> },
        // { path: "about-us", element: <About /> },
        // { path: "contact-us", element: <Contact /> },
        // { path: "faqs", element: <Faqs /> },
      ],
    },

    { path: '*', element: <Navigate to='/404' replace /> },
  ]);
}

// IMPORT COMPONENTS

// Authentication
const Login = Loadable(lazy(() => import('../pages/auth/Login')));

const HomePage = Loadable(lazy(() => import('../pages/others/Home')));
const PageDashboard = Loadable(lazy(() => import('../pages/others/Dashboard')));
const NotFound = Loadable(lazy(() => import('../pages/others/404')));
// const BlankPage = Loadable(lazy(() => import('../pages/test/Blank')));
