import {
  roseColor,
  successColor,
  infoColor,
  tooltip,
  cardTitle,
  grayColor,
  blackColor
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
    marginBottom: "15px",
    "& svg": {
      color: infoColor[0],
      height: "35px",
      width: "35px",
      marginTop: "-11px",
      marginBottom: "-12px",
      marginRight: "20px"
    },
    "& span": {
      paddingBottom: "10px"
    }
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
  saveTitle: {
    lineHeight: "25px",
    fontSize: "16px",
    color: blackColor
  },
  rankTable: {
    "& thead th": {
      fontWeight: "500"
    }
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
  borderTop: {
    borderTop: "1px solid #dddddd"
  },
  borderBottom: {
    borderBottom: "1px solid #dddddd"
  },
  tableComment: {
    marginLeft: "15px",
    padding: "0px",
  },
  headerSummaryTotal: {
    paddingTop: "26px",
    textAlign: "right",
  }
};

export default dashboardStyle;
