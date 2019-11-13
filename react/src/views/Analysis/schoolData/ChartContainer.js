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

import SearchInfoButton from "views/Analysis/SearchInfoButton.js";

// context API
import { useSchoolData } from '../../../contexts/schoolDataModule';

import {
  totalBillPerClassChart,
  columnLIneChart,
  bubbleChart,
  barChart,
  splineChart
} from "charts/Analysis/schoolDataCharts.js"
import {useDashboard} from "../../../contexts/dashboardModule";

const ChartContainer = (props) => {

  const {
    //props
    selectedSchoolList,
    selectedDate,
    classes,

    //state
    totalBillPerClassList,

    //actions
    selectTotalBillPerClass
  } = props;

  React.useEffect(() => {
    selectTotalBillPerClass(selectedSchoolList, selectedDate)
  },[selectedSchoolList, selectedDate]);

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12} lg={6}>
        <Card>
          <CardHeader color="info" icon>
          </CardHeader>
          <CardBody>
            <ReactHighcharts
              highcharts={ReactHighcharts.Highcharts}
              config={totalBillPerClassChart(totalBillPerClassList)}
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
  )
};

export default useSchoolData(
  ({ state, actions }) => ({
    //state
    totalBillPerClassList: state.totalBillPerClassList,
    //actions
    selectTotalBillPerClass: actions.selectTotalBillPerClass,
  })
)(ChartContainer);