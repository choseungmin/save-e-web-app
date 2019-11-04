import Buttons from "views/Components/Buttons.js";
import Calendar from "views/Calendar/Calendar.js";
import Charts from "views/Charts/Charts.js";
import Dashboard from "views/Analysis/Dashboard.js";
import DataAnalysis from "views/Analysis/DataAnalysis.js";
import Advisor from "views/Analysis/Advisor";
import ErrorPage from "views/Pages/ErrorPage.js";
import ExtendedForms from "views/Forms/ExtendedForms.js";
import ExtendedTables from "views/Tables/ExtendedTables.js";
import FullScreenMap from "views/Maps/FullScreenMap.js";
import GoogleMaps from "views/Maps/GoogleMaps.js";
import GridSystem from "views/Components/GridSystem.js";
import Icons from "views/Components/Icons.js";
import LockScreenPage from "views/Pages/LockScreenPage.js";
import LoginPage from "views/Pages/LoginPage.js";
import Notifications from "views/Components/Notifications.js";
import Panels from "views/Components/Panels.js";
import PricingPage from "views/Pages/PricingPage.js";
import ReactTables from "views/Tables/ReactTables.js";
import RegisterPage from "views/Pages/RegisterPage.js";
import RegularForms from "views/Forms/RegularForms.js";
import RegularTables from "views/Tables/RegularTables.js";
import SweetAlert from "views/Components/SweetAlert.js";
import TimelinePage from "views/Pages/Timeline.js";
import Typography from "views/Components/Typography.js";
import UserProfile from "views/Pages/UserProfile.js";
import ValidationForms from "views/Forms/ValidationForms.js";
import VectorMap from "views/Maps/VectorMap.js";
import Widgets from "views/Widgets/Widgets.js";
import Wizard from "views/Forms/Wizard.js";

// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import Business from "@material-ui/icons/Business";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DateRange from "@material-ui/icons/DateRange";
import GridOn from "@material-ui/icons/GridOn";
import Image from "@material-ui/icons/Image";
import Place from "@material-ui/icons/Place";
import SupervisedUserCircleOutlined from "@material-ui/icons/SupervisedUserCircle";
import Timeline from "@material-ui/icons/Timeline";
import WidgetsIcon from "@material-ui/icons/Widgets";

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
    component: DataAnalysis,
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
