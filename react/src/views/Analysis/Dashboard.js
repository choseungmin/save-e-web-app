import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import AccessTime from "@material-ui/icons/AccessTime";
import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";
import OfflineBoltOutlined from "@material-ui/icons/OfflineBoltOutlined";
import AssessmentOutlined from "@material-ui/icons/AssessmentOutlined";


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Muted from "components/Typography/Muted.js";

import SchoolSelectButton from "views/Analysis/SchoolSelectButton.js";

// context API
import { useAnalysis } from '../../contexts/analysisModule';
import {useDashboard} from "../../contexts/dashboardModule";

import {
  dailySalesChart,
} from "variables/charts";

import styles from "assets/jss/material-dashboard-pro-react/views/analysis/dashboardStyle.js";
import extendedStyles from "assets/jss/material-dashboard-pro-react/views/extendedFormsStyle.js";
import SummaryHeader from "./dashboard/SummaryHeader";
import ServiceRanking from "./dashboard/ServiceRanking";

var mapData = {
  AU: 760,
  BR: 550,
  CA: 120,
  DE: 1300,
  FR: 540,
  GB: 690,
  GE: 200,
  IN: 200,
  RO: 600,
  RU: 300,
  US: 2920
};

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
          <SchoolSelectButton/>
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
        <GridItem xs={12} sm={12} md={4}>
          <Card chart className={classes.cardHover}>
            <CardHeader color="info" className={classes.cardHeaderHover}>
              <ChartistGraph
                className="ct-chart-white-colors"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="Refresh"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button simple color="info" justIcon>
                    <Refresh className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Change Date"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="transparent" simple justIcon>
                    <Edit className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
              </div>
              <h4 className={classes.cardTitle}>시간별 전기 사용량 (2018.08)</h4>
              <p className={classes.cardCategory}>
                전기사용량은 12시에 가장 많았음
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> 최근 업데이트 시간 표시
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart className={classes.cardHover}>
            <CardHeader color="info" className={classes.cardHeaderHover}>
              <ChartistGraph
                className="ct-chart-white-colors"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="Refresh"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button simple color="info" justIcon>
                    <Refresh className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Change Date"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="transparent" simple justIcon>
                    <Edit className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
              </div>
              <h4 className={classes.cardTitle}>시간별 전기 사용량 (2018.08)</h4>
              <p className={classes.cardCategory}>
                전기사용량은 12시에 가장 많았음
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> 최근 업데이트 시간 표시
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart className={classes.cardHover}>
            <CardHeader color="info" className={classes.cardHeaderHover}>
              <ChartistGraph
                className="ct-chart-white-colors"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="Refresh"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button simple color="info" justIcon>
                    <Refresh className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Change Date"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="transparent" simple justIcon>
                    <Edit className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
              </div>
              <h4 className={classes.cardTitle}>시간별 전기 사용량 (2018.08)</h4>
              <p className={classes.cardCategory}>
                전기사용량은 12시에 가장 많았음
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> 최근 업데이트 시간 표시
              </div>
            </CardFooter>
          </Card>
        </GridItem>
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
