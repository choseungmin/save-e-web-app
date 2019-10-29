import {
  successColor,
  tooltip,
  cardTitle,
  grayColor,
  whiteColor
} from "assets/jss/material-dashboard-pro-react.js";
import {infoColor} from "../../../material-dashboard-pro-react";

const analysisCommonStyle = {
  cardFooterItems: {
    "& div" : {
      display: 'inline-block',
      paddingLeft: '10px',
      paddingRight: '10px',
    },
    "& .percent": {
      fontSize: "30px",
      fontWeight: "500"
    },
    "& .arrowUp":{
      padding: "0px",
      width: "27px",
      "& span": {
        fontSize: "25px"
      }
    },
    "& .arrowDown":{
      padding: "0px",
      width: "27px",
      "& span": {
        fontSize: "25px",
        top: "13px"
      }
    },
    /*"& svg": {
      width: '20px !important',
      height: '36px !important'
    }*/
  },
  cardTitle: {
    ...cardTitle,
    marginTop: "0px",
    marginBottom: "3px",
    fontWeight: "500"
  },
  whiteText: {
    color: `${whiteColor} !IMPORTANT`
  },
  displayBlock: {
    display: 'block'
  },
  displayInlineBlock: {
    display: 'inline-block !IMPORTANT'
  },
  fontWeight500: {
    fontWeight: '500 !IMPORTANT'
  },
  schoolButtonBox: {
    display: "inline-block",
    minWidth: "126px",
    "button":{
      marginRight: "5px",
    },
    "& .totalButton":{
      marginRight: "20px"
    },
    "& .defaultButton": {
      backgroundColor: "#f1f3fa",
      "& .MuiButton-label": {
        color: "#999"
      }
    },
  }
};

export default analysisCommonStyle;
