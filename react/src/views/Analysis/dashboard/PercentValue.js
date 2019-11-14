import React from "react";
import Icon from "@material-ui/core/Icon/Icon";

const PercentValue = (props) => {

  const {

    classes,
    headerSummaryInfo,
    name,

  } = props;

  const ratioPerPastValue = (data, name) => {
    if(!data[0]) return 0;
    return Math.abs(Math.round(100 - (data[0][name] / data[1][name]) * 100));
  };

  const incrementArrow = (data, name) => {
    if(!data[0]) return '';
    if(data[0][name] > data[1][name]) {
      return (
        <div className="arrowUp">
          <Icon>keyboard_arrow_up</Icon>
        </div>
      );
    } else {
      return (
        <div className="arrowDown">
          <Icon>keyboard_arrow_down</Icon>
        </div>
      );
    }
  };

  const textColor = (data) => {
    if(!data[0]) return '';
    if(data[0][name] > data[1][name]) {
      return classes.roseText;
    } else {
      return classes.infoText;

    }
  };

  return (
    <div className={`${classes.stats} ${textColor(headerSummaryInfo, name)} percent`}>
      { incrementArrow(headerSummaryInfo, name) }
      { ratioPerPastValue(headerSummaryInfo, name) } %
    </div>
  )

}

export default PercentValue
