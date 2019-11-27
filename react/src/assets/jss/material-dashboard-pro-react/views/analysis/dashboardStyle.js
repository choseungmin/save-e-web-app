import {
  roseColor,
  successColor,
  infoColor,
  tooltip,
  cardTitle,
  grayColor,
} from "assets/jss/material-dashboard-pro-react.js";
import analysisCommonStyle from "assets/jss/material-dashboard-pro-react/views/analysis/analysisCommonStyle.js";

import hoverCardStyle from "assets/jss/material-dashboard-pro-react/hoverCardStyle.js";

const dashboardStyle = {
  ...analysisCommonStyle,
  ...hoverCardStyle,
  tooltip,
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  },
  cardProductTitle: {
    ...cardTitle,
    marginTop: "0px",
    marginBottom: "3px",
    textAlign: "center"
  },
  cardCategory: {
    color: grayColor[0],
    fontSize: "14px",
    paddingTop: "10px",
    marginBottom: "0",
    marginTop: "0",
    margin: "0"
  },
  cardProductDesciprion: {
    textAlign: "center",
    color: grayColor[0]
  },
  rankTable: {
    width: '100%',
    "& thead th": {
      fontWeight: "500",
    },
    "& th, td": {
      textAlign: "center"
    },
  },
  fullWidth: {
    width: "100%"
  },
  stats: {
    color: grayColor[0],
    fontSize: "12px",
    lineHeight: "22px",
    display: "inline-flex",
    "& svg": {
      position: "relative",
      top: "4px",
      width: "16px",
      height: "16px",
      marginRight: "3px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      top: "4px",
      fontSize: "16px",
      marginRight: "3px"
    }
  },
  targetCount: {
    "& .totalCount": {
      fontWeight: "500"
    }
  },
  textCenter: {
    textAlign: "center"
  },
  textRight: {
    textAlign: "right"
  },
  totalTitleIcon: {
    height: '27px',
    paddingTop: '7px'
  },
  productStats: {
    paddingTop: "7px",
    paddingBottom: "7px",
    margin: "0"
  },
  selectCategoryLabel: {
    position: "absolute"
  },
  successText: {
    color: successColor[0]
  },
  infoText: {
    color: infoColor[0]
  },
  roseText: {
    color: roseColor[0]
  },
  upArrowCardCategory: {
    width: 14,
    height: 14
  },
  underChartIcons: {
    width: "17px",
    height: "17px"
  },
  price: {
    color: "inherit",
    "& h4": {
      marginBottom: "0px",
      marginTop: "0px"
    }
  },
  mapMakrer: {
    "& .map-marker": {
      background: "#fff",
      borderRadius: "100%",
      border: "1px solid red",
      width: "20px",
      height: "20px",
      paddingLeft: "5px",
    }
  },
  chartSortBtn: {
    position: 'absolute',
    top: '0px',
    right: '50px',
    zIndex: '2'
  },
  chartTitle: {
    textAlign: "center",
    "& p": {
      marginTop: "-10px"
    }
  }

};

export default dashboardStyle;
