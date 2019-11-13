import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import AccessTime from "@material-ui/icons/AccessTime";
import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import SearchInfoButton from "views/Analysis/SearchInfoButton.js";

// context API
import { useAnalysis } from '../../contexts/analysisModule';

import {
  dailySalesChart,
} from "variables/charts";

import styles from "assets/jss/material-dashboard-pro-react/views/analysis/dashboardStyle.js";
import extendedStyles from "assets/jss/material-dashboard-pro-react/views/extendedFormsStyle.js";
import SummaryHeader from "./dashboard/SummaryHeader";
import ServiceRanking from "./dashboard/ServiceRanking";
import UsageCharts from "./dashboard/UsageCharts";

const useStyles = makeStyles({ ...extendedStyles, ...styles });

const Dashboard = (props) => {
  const classes = useStyles();

  const {
    selectedSchoolList,
    selectedDate
  } = props;

  React.useEffect(() => {

  },[selectedSchoolList, selectedDate]);

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <SearchInfoButton/>
        </GridItem>
        <br/>
        <br/>
        <br/>

        <SummaryHeader
          selectedSchoolList={selectedSchoolList}
          selectedDate={selectedDate}
          classes={classes}
        />

      </GridContainer>
      <GridContainer>

        <ServiceRanking
          selectedSchoolList={selectedSchoolList}
          selectedDate={selectedDate}
          classes={classes}
        />

      </GridContainer>
      <GridContainer>
        <UsageCharts
          selectedSchoolList={selectedSchoolList}
          selectedDate={selectedDate}
          classes={classes}
        />
      </GridContainer>
    </div>
  );
};

export default useAnalysis(
  ({ state, actions }) => ({
    //state
    selectedSchoolList: state.selectedSchoolList,
    analysisDateList: state.analysisDateList,
    selectedDate: state.selectedDate,
  })
)(Dashboard);
