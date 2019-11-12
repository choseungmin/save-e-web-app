import React, {Fragment} from "react";

// react plugin for creating charts
import ReactHighcharts from "react-highcharts";

// core components
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import GridItem from "components/Grid/GridItem.js";

// @material-ui/core components
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import AccessTime from "@material-ui/icons/AccessTime";
import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";

import {
  columnChart,
} from "charts/Analysis/dashboardCharts.js"
import {useDashboard} from "../../../contexts/dashboardModule";

const UsageCharts =(props) => {

  const {
    //props
    selectedSchoolList,
    selectedDate,
    classes,

    //state
    dashboardChart,

    //actions
    selectDashboardChart,
  } = props;

  React.useEffect(() => {
    //api call
    selectDashboardChart(selectedSchoolList, selectedDate);

  }, [selectedSchoolList, selectedDate]);

  const getMaxValue = (chart,name) => {
    if(null == chart) return '';

    let max = {
      value: 0,
      category: ''
    };

    chart[name].map((v,i) => {
      if(v.value > max.value) {
        max = v;
      }
    });

    return max.category;
  };

  return(
    <Fragment>
    <GridItem xs={12} sm={12} md={4}>
      <Card chart className={classes.cardHover}>
        <CardHeader color="info" className={classes.cardHeaderHover}>
          <ReactHighcharts
            highcharts={ReactHighcharts.Highcharts}
            config={columnChart(dashboardChart, 'hourChart', 'column')}
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
          <h4 className={classes.cardTitle}>시간별 전기 사용량 ({selectedDate})</h4>
          <p className={classes.cardCategory}>
            전기사용량은 { getMaxValue(dashboardChart, 'hourChart') }시에 가장 많았음
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
            <ReactHighcharts
              highcharts={ReactHighcharts.Highcharts}
              config={columnChart(dashboardChart, 'dayChart', 'line')}
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
            <h4 className={classes.cardTitle}>시간별 전기 사용량 ({selectedDate})</h4>
            <p className={classes.cardCategory}>
              전기사용량은 { getMaxValue(dashboardChart,'dayChart') }에 가장 많았음
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
            <ReactHighcharts
              highcharts={ReactHighcharts.Highcharts}
              config={columnChart(dashboardChart, 'monthChart', 'line')}
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
            <h4 className={classes.cardTitle}>시간별 전기 사용량 ({`${parseInt(selectedDate)-100} ~ ${selectedDate}`})</h4>
            <p className={classes.cardCategory}>
              전기사용량은 { getMaxValue(dashboardChart,'monthChart').substring(4,6) }월에 가장 많았음
            </p>
          </CardBody>
          <CardFooter chart>
            <div className={classes.stats}>
              <AccessTime /> 최근 업데이트 시간 표시
            </div>
          </CardFooter>
        </Card>
      </GridItem>
    </Fragment>
  )

};

export default useDashboard(
  ({ state, actions }) => ({
    //state
    dashboardChart: state.dashboardChart,
    //actions
    selectDashboardChart: actions.selectDashboardChart,
  })
)(UsageCharts);
