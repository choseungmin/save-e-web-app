import React from "react";
// react plugin for creating charts
import ReactHighcharts from "react-highcharts";
import HighchartsMore from "highcharts-more";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import OfflineBoltOutlined from "@material-ui/icons/OfflineBoltOutlined";


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";

import SchoolSelectButton from "views/Analysis/SchoolSelectButton.js";

// context API
import { useAnalysis } from '../../contexts/analysisModule';

import {
  columnChart,
  columnLIneChart,
  bubbleChart,
  barChart,
  splineChart
} from "charts/Analysis/analysisCharts.js"

import styles from "assets/jss/material-dashboard-pro-react/views/analysis/dashboardStyle.js";

HighchartsMore(ReactHighcharts.Highcharts);

const useStyles = makeStyles({ ...styles });

const DataAnalysis = (props) => {
  const classes = useStyles();

  React.useEffect(() => {

  });

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <SchoolSelectButton/>
        </GridItem>
        <br/>
        <br/>
        <br/>

        <GridItem xs={12} sm={12} md={12} lg={12}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={12} lg={8}>
              <Card>
                <CardHeader className={classes.textRight} color="info" icon>
                  <CardIcon color="info">
                    <OfflineBoltOutlined/>
                  </CardIcon>
                  <div style={{textAlign: "left", margin: "5px 0px 13px 56px"}}>
                    <h6 className={classes.cardCategory}>
                      School Analysis는 학교별 에너지 데이터와 초/중/고등학교 정보공시제 기반의 학교 주요 정보를 비교하여
                      <br/>
                      에너지 관점에서 학교의 현 수준을 파악하고, 운영상의 Benchmarking 용도로 제공되고 있습니다.
                    </h6>
                  </div>
                </CardHeader>
              </Card>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} lg={6}>
          <Card>
            <CardHeader color="info" icon>
            </CardHeader>
            <CardBody>
              <ReactHighcharts
                highcharts={ReactHighcharts.Highcharts}
                config={columnChart()}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={6}>
          <Card>
            <CardHeader color="info" icon>
            </CardHeader>
            <CardBody>
              <ReactHighcharts
                highcharts={ReactHighcharts.Highcharts}
                config={columnLIneChart()}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={6}>
          <Card>
            <CardHeader color="info" icon>
            </CardHeader>
            <CardBody>
              <ReactHighcharts
                highcharts={ReactHighcharts.Highcharts}
                config={bubbleChart()}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={6}>
          <Card>
            <CardHeader color="info" icon>
            </CardHeader>
            <CardBody>
              <ReactHighcharts
                highcharts={ReactHighcharts.Highcharts}
                config={barChart()}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={6}>
          <Card>
            <CardHeader color="info" icon>
            </CardHeader>
            <CardBody>
              <ReactHighcharts
                highcharts={ReactHighcharts.Highcharts}
                config={splineChart()}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
export default useAnalysis(
  ({ state, actions }) => ({
    //state
    analysisDateList: state.analysisDateList,
  })
)(DataAnalysis);
