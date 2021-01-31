import { Dashboard, NotFound404 } from 'pages';

export const appRoutes = [
  {
    name: 'Dashboard',
    title: 'Dashboard',
    exact: true,
    path: '/',
    component: Dashboard
  },
  {
    name: 'NotFound404',
    title: 'Halaman tidak ditemukan',
    exact: true,
    path: '*',
    component: NotFound404
  }
];
