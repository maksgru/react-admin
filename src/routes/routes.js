import UserPage from "../pages/UserPage";
import UsersChart from "../pages/UsersChart";

const routes = [
  {
    path: '/users/:id',
    exact: true,
    component: UserPage,
    protected: true
  },
  {
    path: 'charts/users',
    exact: true,
    component: UsersChart,
    protected: false
  }
];
export default routes;