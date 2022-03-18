import AdminHomePage from '../../containers/AdminHomePage';

export const API_ENDPOINT = "http://localhost:3000";

export const STATUSES = [
  {
    value: 0,
    label: "READY",
  },
  {
    value: 1,
    label: "IN PROGRESS",
  },
  {
    value: 2,
    label: "COMPLETED",
  },
];
export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
};
export const ADMIN_ROUTES = [
  {
    path: '/',
    name: 'Trang quản trị',
    index: true,
    element: AdminHomePage,
  },
  {
    path: '/task-board',
    name: 'Quản lý công việc',
    element: AdminHomePage,
  }
]