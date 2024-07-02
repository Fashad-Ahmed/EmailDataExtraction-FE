import DashboardLayout from '@/components/layouts/dashboard';
import Dashboard from '@/pages/Dashboard';
import ProductManagement from '@/pages/ProductManagement';
import { RouteObject } from 'react-router-dom';

type Routes = RouteObject;

export const routes: Routes[] = [
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },

      {
        path: 'product-management',
        element: <ProductManagement />,
      },
    ],
  },
];
