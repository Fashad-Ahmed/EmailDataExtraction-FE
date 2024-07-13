import DashboardLayout from '@/components/layouts/dashboard';
import Login from '@/pages/auth/login';
import Dashboard from '@/pages/dashboard';
import ProductManagement from '@/pages/product-management';
import { STORAGE_KEYS } from '@/utils/constants/storage.constant';
import localforage from 'localforage';
import { redirect, RouteObject } from 'react-router-dom';

type Routes = RouteObject;

async function authCheck() {
  const accessToken = await localforage.getItem(STORAGE_KEYS.AUTH.AUTH_TOKEN);
  if (!accessToken) {
    return redirect('/auth/sign-in');
  }
  return true;
}

async function signInCheck() {
  const accessToken = await localforage.getItem(STORAGE_KEYS.AUTH.AUTH_TOKEN);
  if (accessToken) {
    return redirect('/dashboard');
  }
  return true;
}

export const routes: Routes[] = [
  {
    path: '/',
    element: <DashboardLayout />,
    children: getRoutes(),
  },
  {
    path: '/auth/sign-in',
    // loader: signInCheck,
    element: <Login />,
  },
];

// [
//   {
//     path: '/',
//     element: <DashboardLayout />,
//     children: [
//       {
//         path: '/',
//         element: <DashboardLayout />,
//         loader: authCheck,
//         children: getRoutes(),
//       },
//       {
//         path: '/auth/sign-in',
//         loader: signInCheck,
//         element: <Login />,
//       },
//     ],
//   },
// ];

function getRoutes() {
  return [
    // {
    //   path: '/auth/sign-in',
    //   // loader: signInCheck,
    //   element: <Login />,
    // },
    {
      path: 'dashboard',
      element: <Dashboard />,
    },

    {
      path: 'product-management',
      element: <ProductManagement />,
    },
  ];
}
