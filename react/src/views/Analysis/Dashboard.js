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

import {
  dailySalesChart,
} from "variables/charts";

import styles from "assets/jss/material-dashboard-pro-react/views/analysis/dashboardStyle.js";
import extendedStyles from "assets/jss/material-dashboard-pro-react/views/extendedFormsStyle.js";

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
    // console.log("dashboard userEffect")
    // console.log(selectedSchoolList, selectedDate)
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
        <GridItem xs={12} sm={12} md={12} lg={10}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <div className={classes.targetCount}>
                <div className="totalCount">전체 학교 수 30</div>
                <Muted>( 데이터 수집 29개 학교 / 미수집 1개 학교 )</Muted>
              </div>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={3}>
              <Card>
                <CardHeader className={classes.textRight} color="info" icon>
                  <CardIcon color="info">
                    <OfflineBoltOutlined/>
                  </CardIcon>
                  <h6 className={classes.cardCategory}>탄소 배출량</h6>
                  <h4 className={`${classes.cardTitle}`}>200,000 tCO2</h4>
                </CardHeader>
                <CardFooter className={`${classes.displayInlineBlock} ${classes.cardFooterItems}`} stats >
                  <div className={`${classes.stats} ${classes.roseText} percent`}>
                    <div className="arrowDown">
                      <Icon>keyboard_arrow_down</Icon>
                    </div>
                    20%
                  </div>
                  <div className={classes.stats}>
                    전월동월대비<br/>(2019.09)
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={3}>
              <Card>
                <CardHeader className={classes.textRight} color="info" icon>
                  <CardIcon color="info">
                    <Icon>highlight</Icon>
                  </CardIcon>
                  <h6 className={classes.cardCategory}>탄소 배출량</h6>
                  <h4 className={`${classes.cardTitle}`}>200,000 tCO2</h4>
                </CardHeader>
                <CardFooter className={`${classes.displayInlineBlock} ${classes.cardFooterItems}`} stats >
                  <div className={`${classes.stats} ${classes.infoText} percent`}>
                    {/*<ArrowUpward className={classes.upArrowCardCategory} />*/}
                    <div className="arrowUp">
                      <Icon>keyboard_arrow_up</Icon>
                    </div>
                    20%
                  </div>
                  <div className={classes.stats}>
                    전월동월대비<br/>(2019.09)
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={3}>
              <Card>
                <CardHeader className={classes.textRight} color="info" icon>
                  <CardIcon color="info">
                    <Icon>trending_up</Icon>
                  </CardIcon>
                  <h6 className={classes.cardCategory}>탄소 배출량</h6>
                  <h4 className={`${classes.cardTitle}`}>200,000 tCO2</h4>
                </CardHeader>
                <CardFooter className={`${classes.displayInlineBlock} ${classes.cardFooterItems}`} stats >
                  <div className={`${classes.stats} ${classes.infoText} percent`}>
                    {/*<ArrowUpward className={classes.upArrowCardCategory} />*/}
                    <div className="arrowUp">
                      <Icon>keyboard_arrow_up</Icon>
                    </div>
                    20%
                  </div>
                  <div className={classes.stats}>
                    전월동월대비<br/>(2019.09)
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={3}>
              <Card>
                <CardHeader className={classes.textRight} color="info" icon>
                  <CardIcon color="info">
                    <Icon>settings_input_svideo</Icon>
                  </CardIcon>
                  <h6 className={classes.cardCategory}>탄소 배출량</h6>
                  <h4 className={`${classes.cardTitle}`}>200,000 tCO2</h4>
                </CardHeader>
                <CardFooter className={`${classes.displayInlineBlock} ${classes.cardFooterItems}`} stats >
                  <div className={`${classes.stats} ${classes.infoText} percent`}>
                    {/*<ArrowUpward className={classes.upArrowCardCategory} />*/}
                    <div className="arrowUp">
                      <Icon>keyboard_arrow_up</Icon>
                    </div>
                    20%
                  </div>
                  <div className={classes.stats}>
                    전월동월대비<br/>(2019.09)
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={2}>
          <Card color="info">
            <CardHeader color="info" icon>
              <p className={`${classes.cardCategory} ${classes.textCenter}`}>
                <span className={`${classes.whiteText}  ${classes.fontWeight500}`}>
                  <Icon className={`${classes.totalTitleIcon}`}>assignment_turned_in</Icon>
                  TOTAL
                </span>
              </p>
            </CardHeader>
            <CardFooter className={`${classes.textCenter} ${classes.displayBlock}`} stats>
              <p className={`${classes.stats} ${classes.textCenter} ${classes.whiteText} ${classes.fontWeight500}`}>
                9WATT 관리 시<br/>줄일 수 있는 연간 전기요금
              </p>
              <h3 className={`${classes.cardTitle} ${classes.whiteText}`}>
                500,000,000 원
              </h3>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <CardHeader color="info" icon>
              <CardIcon color="info">
                <AssessmentOutlined/>
              </CardIcon>
              <h4 className={`${classes.cardIconTitle} ${classes.fontWeight500}`}>
                전기 사용 랭킹
              </h4>
            </CardHeader>
            <CardBody>
              <GridContainer justify="space-between">
                <GridItem xs={12} sm={12} md={6}>
                  <Table
                    className={classes.rankTable}
                    tableHead={["순위", "학교명", "학급당 전기사용량(kwh)", "학교전체 전기사용량(kwh)"]}
                    tableData={[
                      ["1위", "** 초등학교", "200 ( 전체학급 : 10 )", "100,00 (연면적 : 15,000㎥)"],
                      ["2위", "** 초등학교", "200 ( 전체학급 : 10 )", "100,00 (연면적 : 15,000㎥)"],
                      ["3위", "** 초등학교", "200 ( 전체학급 : 10 )", "100,00 (연면적 : 15,000㎥)"],
                      ["4위", "** 초등학교", "200 ( 전체학급 : 10 )", "100,00 (연면적 : 15,000㎥)"],
                      ["5위", "** 초등학교", "200 ( 전체학급 : 10 )", "100,00 (연면적 : 15,000㎥)"],
                    ]}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <VectorMap
                    map={"world_mill"}
                    backgroundColor="transparent"
                    zoomOnScroll={false}
                    containerStyle={{
                      width: "100%",
                      height: "280px"
                    }}
                    containerClassName="map"
                    regionStyle={{
                      initial: {
                        fill: "#e4e4e4",
                        "fill-opacity": 0.9,
                        stroke: "none",
                        "stroke-width": 0,
                        "stroke-opacity": 0
                      }
                    }}
                    series={{
                      regions: [
                        {
                          values: mapData,
                          scale: ["#AAAAAA", "#444444"],
                          normalizeFunction: "polynomial"
                        }
                      ]
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
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
}
export default useAnalysis(
  ({ state, actions }) => ({
    //state
    selectedSchoolList: state.selectedSchoolList,
    analysisDateList: state.analysisDateList,
    selectedDate: state.selectedDate,
  })
)(Dashboard);
