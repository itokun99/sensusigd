import { Dashboard, Laporan } from 'pages';

export const appRoutes = [
  {
    name: 'Laporan',
    title: 'Laporan',
    exact: true,
    path: '/laporan',
    component: Laporan
  },
  {
    name: 'Dashboard',
    title: 'Dashboard',
    exact: true,
    path: '/',
    component: Dashboard
  }
];
