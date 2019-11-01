import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import ReactHighcharts from "react-highcharts";
import HighchartsMore from "highcharts-more";

// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
// import ContentCopy from "@material-ui/icons/ContentCopy";
import Store from "@material-ui/icons/Store";
// import InfoOutline from "@material-ui/icons/InfoOutline";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
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
import Danger from "components/Typography/Danger.js";
import White from  "components/Typography/White.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Muted from "components/Typography/Muted.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";

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
import extendedStyles from "assets/jss/material-dashboard-pro-react/views/extendedFormsStyle.js";

import priceImage1 from "assets/img/card-2.jpeg";
import priceImage2 from "assets/img/card-3.jpeg";
import priceImage3 from "assets/img/card-1.jpeg";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
// import FormControl from "@material-ui/core/FormControl/FormControl";
import FormControl from "@material-ui/core/FormControl";

HighchartsMore(ReactHighcharts.Highcharts);


const us_flag = require("assets/img/flags/US.png");
const de_flag = require("assets/img/flags/DE.png");
const au_flag = require("assets/img/flags/AU.png");
const gb_flag = require("assets/img/flags/GB.png");
const ro_flag = require("assets/img/flags/RO.png");
const br_flag = require("assets/img/flags/BR.png");

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
