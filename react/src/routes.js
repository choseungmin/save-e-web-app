import Dashboard from "views/Analysis/Dashboard.js";
import SchoolData from "views/Analysis/SchoolData.js";
import Advisor from "views/Analysis/Advisor";

// @material-ui/icons
import Business from "@material-ui/icons/Business";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SupervisedUserCircleOutlined from "@material-ui/icons/SupervisedUserCircle";

//routes-temp.js
import {
  pages,
  components,
  forms,
  tables,
  maps,
  widgets,
  charts,
  calendar
} from "routes-temp";


var dashRoutes = [
  {
    path: "/dashboard",
    name: "Energy Dashboard",
    icon: DashboardIcon,
    component: Dashboard,
    layout: "/analysis"
  },
  {
    path: "/dataAnalysis",
    name: "School Data Analysis",
    icon: Business,
    component: SchoolData,
    layout: "/analysis"
  },
  {
    path: "/advisor",
    name: "Energy Save Advisor",
    icon: SupervisedUserCircleOutlined,
    component: Advisor,
    layout: "/analysis"
  },
  // pages,
  // components,
  // forms,
  // tables,
  // maps,
  // widgets,
  // charts,
  // calendar

];
export default dashRoutes;
