import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import ReactHighcharts from "react-highcharts";
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
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts";

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

const chartData = {

  title: {
    text: 'Solar Employment Growth by Sector, 2010-2016'
  },

  subtitle: {
    text: 'Source: thesolarfoundation.com'
  },

  yAxis: {
    title: {
      text: 'Number of Employees'
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 2010
    }
  },

  series: [{
    name: 'Installation',
    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
  }, {
    name: 'Manufacturing',
    data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
  }, {
    name: 'Sales & Distribution',
    data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
  }, {
    name: 'Project Development',
    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
  }, {
    name: 'Other',
    data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }

}

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
                config={chartData}
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
                config={chartData}
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
                config={chartData}
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
                config={chartData}
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
