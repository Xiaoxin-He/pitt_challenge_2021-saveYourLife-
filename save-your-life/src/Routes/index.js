import { lazy } from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const STATIC_ROUTES = [
  {
    name: 'Dashboard',
    link: 'dashboard',
    path: '/dashboard',
    component: lazy(() => import("../Pages/Dashboard")),
    icon: DashboardIcon,
  },
  {
    name: 'Data',
    link: 'data',
    path: '/data',
    component: lazy(() => import("../Pages/UserData")),
    icon: InfoIcon
  },
  {
    name: 'Warning',
    link: 'warning',
    path: '/warning',
    component: lazy(() => import("../Pages/Warning")),
    icon: (props) => (<div style={props.style}><LightbulbIcon></LightbulbIcon></div>)
  },
  {
    name: 'Plan',
    link: 'plan',
    path: '/plan',
    component: lazy(() => import("../Pages/Plan")),
    icon: CalendarTodayIcon
  }
];

export default STATIC_ROUTES;