import PricingPage from "./views/Pages/PricingPage";
import TimelinePage from "./views/Pages/Timeline";
import LoginPage from "./views/Pages/LoginPage";
import RegisterPage from "./views/Pages/RegisterPage";
import LockScreenPage from "./views/Pages/LockScreenPage";
import UserProfile from "./views/Pages/UserProfile";
import ErrorPage from "./views/Pages/ErrorPage";
import Buttons from "./views/Components/Buttons";
import GridSystem from "./views/Components/GridSystem";
import Panels from "./views/Components/Panels";
import SweetAlert from "./views/Components/SweetAlert";
import Notifications from "./views/Components/Notifications";
import Icons from "./views/Components/Icons";
import Typography from "./views/Components/Typography";
import RegularForms from "./views/Forms/RegularForms";
import ExtendedForms from "./views/Forms/ExtendedForms";
import ValidationForms from "./views/Forms/ValidationForms";
import Wizard from "./views/Forms/Wizard";
import RegularTables from "./views/Tables/RegularTables";
import ExtendedTables from "./views/Tables/ExtendedTables";
import ReactTables from "./views/Tables/ReactTables";
import GoogleMaps from "./views/Maps/GoogleMaps";
import FullScreenMap from "./views/Maps/FullScreenMap";
import VectorMap from "./views/Maps/VectorMap";
import Widgets from "./views/Widgets/Widgets";
import Charts from "./views/Charts/Charts";
import Calendar from "./views/Calendar/Calendar";

// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import DateRange from "@material-ui/icons/DateRange";
import GridOn from "@material-ui/icons/GridOn";
import Image from "@material-ui/icons/Image";
import Place from "@material-ui/icons/Place";
import Timeline from "@material-ui/icons/Timeline";
import WidgetsIcon from "@material-ui/icons/Widgets";

const pages = {
    collapse: true,
    name: "Pages",
    icon: Image,
    state: "pageCollapse",
    views: [
      {
        path: "/pricing-page",
        name: "Pricing Page",
        mini: "PP",
        component: PricingPage,
        layout: "/auth"
      },
      {
        path: "/timeline-page",
        name: "Timeline Page",
        mini: "T",
        component: TimelinePage,
        layout: "/analysis"
      },
      {
        path: "/login-page",
        name: "Login Page",
        mini: "L",
        component: LoginPage,
        layout: "/auth"
      },
      {
        path: "/register-page",
        name: "Register Page",
        mini: "R",
        component: RegisterPage,
        layout: "/auth"
      },
      {
        path: "/lock-screen-page",
        name: "Lock Screen Page",
        mini: "LS",
        component: LockScreenPage,
        layout: "/auth"
      },
      {
        path: "/user-page",
        name: "User Profile",
        mini: "UP",
        component: UserProfile,
        layout: "/analysis"
      },
      {
        path: "/error-page",
        name: "Error Page",
        mini: "E",
        component: ErrorPage,
        layout: "/auth"
      }
    ]
  };

const components =   {
  collapse: true,
  name: "Components",
  icon: Apps,
  state: "componentsCollapse",
  views: [
    {
      collapse: true,
      name: "Multi Level Collapse",
      mini: "MC",
      state: "multiCollapse",
      views: [
        {
          path: "/buttons",
          name: "Buttons",
          mini: "B",
          component: Buttons,
          layout: "/analysis"
        }
      ]
    },
    {
      path: "/buttons",
      name: "Buttons",
      mini: "B",
      component: Buttons,
      layout: "/analysis"
    },
    {
      path: "/grid-system",
      name: "Grid System",
      mini: "GS",
      component: GridSystem,
      layout: "/analysis"
    },
    {
      path: "/panels",
      name: "Panels",
      mini: "P",
      component: Panels,
      layout: "/analysis"
    },
    {
      path: "/sweet-alert",
      name: "Sweet Alert",
      mini: "SA",
      component: SweetAlert,
      layout: "/analysis"
    },
    {
      path: "/notifications",
      name: "Notifications",
      mini: "N",
      component: Notifications,
      layout: "/analysis"
    },
    {
      path: "/icons",
      name: "Icons",
      mini: "I",
      component: Icons,
      layout: "/analysis"
    },
    {
      path: "/typography",
      name: "Typography",
      mini: "T",
      component: Typography,
      layout: "/analysis"
    }
  ]
};

const forms =   {
  collapse: true,
  name: "Forms",
  icon: "content_paste",
  state: "formsCollapse",
  views: [
    {
      path: "/regular-forms",
      name: "Regular Forms",
      mini: "RF",
      component: RegularForms,
      layout: "/analysis"
    },
    {
      path: "/extended-forms",
      name: "Extended Forms",
      mini: "EF",
      component: ExtendedForms,
      layout: "/analysis"
    },
    {
      path: "/validation-forms",
      name: "Validation Forms",
      mini: "VF",
      component: ValidationForms,
      layout: "/analysis"
    },
    {
      path: "/wizard",
      name: "Wizard",
      mini: "W",
      component: Wizard,
      layout: "/analysis"
    }
  ]
};

const tables =   {
  collapse: true,
  name: "Tables",
  icon: GridOn,
  state: "tablesCollapse",
  views: [
    {
      path: "/regular-tables",
      name: "Regular Tables",
      mini: "RT",
      component: RegularTables,
      layout: "/analysis"
    },
    {
      path: "/extended-tables",
      name: "Extended Tables",
      mini: "ET",
      component: ExtendedTables,
      layout: "/analysis"
    },
    {
      path: "/react-tables",
      name: "React Tables",
      mini: "RT",
      component: ReactTables,
      layout: "/analysis"
    }
  ]
};

const maps =   {
  collapse: true,
  name: "Maps",
  icon: Place,
  state: "mapsCollapse",
  views: [
    {
      path: "/google-maps",
      name: "Google Maps",
      mini: "GM",
      component: GoogleMaps,
      layout: "/analysis"
    },
    {
      path: "/full-screen-maps",
      name: "Full Screen Map",
      mini: "FSM",
      component: FullScreenMap,
      layout: "/analysis"
    },
    {
      path: "/vector-maps",
      name: "Vector Map",
      mini: "VM",
      component: VectorMap,
      layout: "/analysis"
    }
  ]
};

const widgets =   {
  path: "/widgets",
  name: "Widgets",
  icon: WidgetsIcon,
  component: Widgets,
  layout: "/analysis"
};

const charts =   {
  path: "/charts",
  name: "Charts",
  icon: Timeline,
  component: Charts,
  layout: "/analysis"
};

const calendar =   {
  path: "/calendar",
  name: "Calendar",
  icon: DateRange,
  component: Calendar,
  layout: "/analysis"
};

export {
  pages,
  components,
  forms,
  tables,
  maps,
  widgets,
  charts,
  calendar
}