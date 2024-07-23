// import localforage from 'localforage';
import { RouteObject } from 'react-router-dom';

// import { STORAGE_KEYS } from '@/utils/constants/storage.constant';

import DashboardLayout from '@/components/layouts/dashboard';
import Login from '@/pages/auth/login';
import Dashboard from '@/pages/dashboard-management';

import ProductManagement from '@/pages/product-management';
import CreateOrEditProducts from '@/pages/products/create-edit';
import ViewProductsDetail from '@/pages/products/view';
import Products from '@/pages/products';

import CategoryManagement from '@/pages/category-management';
import CreateOrEditCategory from '@/pages/category-management/create-edit';
import ViewCategoryDetail from '@/pages/category-management/view';

type Routes = RouteObject;

// async function authCheck() {
//   const accessToken = await localforage.getItem(STORAGE_KEYS.AUTH.AUTH_TOKEN);
//   if (!accessToken) {
//     return redirect('/auth/sign-in');
//   }
//   return true;
// }

// async function signInCheck() {
//   const accessToken = await localforage.getItem(STORAGE_KEYS.AUTH.AUTH_TOKEN);
//   if (accessToken) {
//     return redirect('/dashboard');
//   }
//   return true;
// }

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
    {
      path: 'dashboard',
      element: <Dashboard />,
    },

    {
      path: 'product-management',
      element: <ProductManagement />,
    },

    {
      path: 'products',
      element: <Products />,
    },
    {
      path: 'product-management/create/:productId?',
      element: <CreateOrEditProducts />,
    },
    {
      path: 'product-management/view/:productId',
      element: <ViewProductsDetail />,
    },

    {
      path: 'category-management',
      element: <CategoryManagement />,
    },

    {
      path: 'category-management/create/:categoryId?',
      element: <CreateOrEditCategory />,
    },
    {
      path: 'category-management/view/:categoryId',
      element: <ViewCategoryDetail />,
    },
  ];
}
