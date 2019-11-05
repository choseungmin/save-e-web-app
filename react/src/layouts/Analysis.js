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
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

// context API
import { useAnalysis } from '../contexts/analysisModule';

//routes
import routes from "routes.js";

import styles from "assets/jss/material-dashboard-pro-react/layouts/analysisStyle.js";

//axios
import axios from 'axios';

var ps;

const useStyles = makeStyles(styles);

const Analysis = (props) => {
  const { ...rest} = props;
  //context api
  const {
    getLoginUserInfo,
    setAnalysisSchoolList,
    setAnalysisDateList,
    getAnalysisSchoolList,
    getAnalysisDateList
  } = props;
  // states and functions
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [miniActive, setMiniActive] = React.useState(false);
  // const [image, setImage] = React.useState(require("assets/img/sidebar-2.jpg"));
  const [image, setImage] = React.useState(null);
  const [color, setColor] = React.useState("blue");
  const [bgColor, setBgColor] = React.useState("white");
  // const [hasImage, setHasImage] = React.useState(false);
  const [fixedClasses, setFixedClasses] = React.useState("dropdown");
  const [logo, setLogo] = React.useState(require("assets/img/ninewatt/ninewatt_logo.png"));
  const [test, setTest] = React.useState(null);
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
    initFunc();

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
  },[]);
  // functions for changeing the states from components
  const handleImageClick = image => {
    setImage(image);
  };
  const handleColorClick = color => {
    setColor(color);
  };
  const handleBgColorClick = bgColor => {
    switch (bgColor) {
      case "white":
        setLogo(require("assets/img/logo.svg"));
        break;
      default:
        setLogo(require("assets/img/logo-white.svg"));
        break;
    }
    setBgColor(bgColor);
  };
  const handleFixedClick = () => {
    if (fixedClasses === "dropdown") {
      setFixedClasses("dropdown show");
    } else {
      setFixedClasses("dropdown");
    }
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getRoute = () => {
    return window.location.pathname !== "/analysisF/full-screen-maps";
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
            props={"aaa"}
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
  const initFunc = async () => {
    console.log('initFunc Run !!');

    await getLoginUserInfo().then(response => {
      console.log(response);
    })

    await getAnalysisSchoolList().then((response) => {
      setAnalysisSchoolList(response.result);
    });
    await getAnalysisDateList().then((response) => {
      setAnalysisDateList(response.result);
    });

  }

  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={routes}
        logoText={"Creative Tim2"}
        logo={logo}
        image={image}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={color}
        bgColor={bgColor}
        miniActive={miniActive}
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
        {/* On the /maps/full-screen-maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
        {getRoute() ? (
          <div className={classes.content}>
            <div className={classes.container}>
              <Switch>
                {getRoutes(routes)}
                <Redirect from="/analysis" to="/analysis/dashboard" />
              </Switch>
            </div>
          </div>
        ) : (
          <div className={classes.map}>
            <Switch>
              {getRoutes(routes)}
              <Redirect from="/analysis" to="/analysis/dashboard" />
            </Switch>
          </div>
        )}
        {getRoute() ? <Footer fluid /> : null}
        {/*<FixedPlugin
          handleImageClick={handleImageClick}
          handleColorClick={handleColorClick}
          handleBgColorClick={handleBgColorClick}
          color={color}
          bgColor={bgColor}
          bgImage={image}
          handleFixedClick={handleFixedClick}
          fixedClasses={fixedClasses}
          sidebarMinimize={sidebarMinimize.bind(this)}
          miniActive={miniActive}
        />*/}
      </div>
    </div>
  );
}

export default useAnalysis(
  ({ state, actions }) => ({
    getLoginUserInfo: actions.getLoginUserInfo,
    setAnalysisSchoolList: actions.setAnalysisSchoolList,
    setAnalysisDateList: actions.setAnalysisDateList,
    getAnalysisSchoolList: actions.getAnalysisSchoolList,
    getAnalysisDateList: actions.getAnalysisDateList,
  })
)(Analysis);
