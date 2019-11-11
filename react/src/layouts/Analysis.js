import React from "react";
import cx from "classnames";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import AnalysisNavbar from "components/Navbars/AnalysisNavbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";

// context API
import { useAnalysis } from '../contexts/analysisModule';

//routes
import routes from "routes.js";

import styles from "assets/jss/material-dashboard-pro-react/layouts/analysisStyle.js";

var ps;

const useStyles = makeStyles(styles);

const Analysis = (props) => {
  const { ...rest} = props;
  //context api
  const {
    //action
    selectedSchoolList,
    getLoginUserInfo,
    selectAnalysisTargetList,
    setAnalysisSchoolList,
    setAnalysisDateList,
    getAnalysisSchoolList,
    getAnalysisDateList
  } = props;
  // states and functions
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [miniActive, setMiniActive] = React.useState(false);
  const [color, setColor] = React.useState("blue");
  const [bgColor, setBgColor] = React.useState("white");
  const [logo, setLogo] = React.useState(require("assets/img/ninewatt/ninewatt_logo.png"));
  const [loginUserInfo, setLoginUserInfo] = React.useState(null);
  // styles
  const classes = useStyles();
  const mainPanelClasses =
    classes.mainPanel +
    " " +
    cx({
      [classes.mainPanelSidebarMini]: miniActive,
      [classes.mainPanelWithPerfectScrollbar]:
        navigator.platform.indexOf("Win") > -1
    });
  // ref for main panel div
  const mainPanel = React.createRef();
  // effect instead of componentDidMount, componentDidUpdate and componentWillUnmount
  React.useEffect(() => {

    if(!loginUserInfo) {
      analysisInitFunc();
    }
    analysisUpdateFunc();


    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);

    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  },[selectedSchoolList]);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getActiveRoute = routes => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };
  const getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/analysis") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  const sidebarMinimize = () => {
    setMiniActive(!miniActive);
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };

  const analysisInitFunc = async () => {

    await getLoginUserInfo().then(response => {
      setLoginUserInfo(response);
    });

    await getAnalysisSchoolList().then((response) => {
      setAnalysisSchoolList(response);
    });
    await getAnalysisDateList().then((response) => {
      setAnalysisDateList(response);
    });
  };

  const analysisUpdateFunc = async () => {
    await selectAnalysisTargetList(selectedSchoolList).then(response => {
      if(!!response)
      console.log('TODO 추후 제거',response.data);
    });
  };



  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={routes}
        logo={logo}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={color}
        bgColor={bgColor}
        miniActive={miniActive}
        loginUserInfo={loginUserInfo}
        {...rest}
      />
      <div className={mainPanelClasses} ref={mainPanel}>
        <AnalysisNavbar
          sidebarMinimize={sidebarMinimize.bind(this)}
          miniActive={miniActive}
          brandText={getActiveRoute(routes)}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />
        <div className={classes.content}>
          <div className={classes.container}>
            <Switch>
              {getRoutes(routes)}
              <Redirect from="/analysis" to="/analysis/dashboard" />
            </Switch>
          </div>
        </div>
        <Footer fluid />
      </div>
    </div>
  );
}

export default useAnalysis(
  ({ state, actions }) => ({
    //state
    selectedSchoolList: state.selectedSchoolList,
    //action
    getLoginUserInfo: actions.getLoginUserInfo,
    selectAnalysisTargetList: actions.selectAnalysisTargetList,
    setAnalysisSchoolList: actions.setAnalysisSchoolList,
    setAnalysisDateList: actions.setAnalysisDateList,
    getAnalysisSchoolList: actions.getAnalysisSchoolList,
    getAnalysisDateList: actions.getAnalysisDateList,
  })
)(Analysis);
