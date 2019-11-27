import React from "react";
// react plugin for creating charts
import ReactHighcharts from "react-highcharts";
import HighchartsMore from "highcharts-more";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import OfflineBoltOutlined from "@material-ui/icons/OfflineBoltOutlined";

import {dateFormat, prevDateFormat} from "util/commonUtil.js"

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
  totalBillByStudentChart,
  totalBillBySexRatioChart,
  sexRatioChart,
  totalBillByAreaChart
} from "charts/Analysis/schoolDataCharts.js"
import {useDashboard} from "../../../contexts/dashboardModule";
import {selectTotalBillByStudent} from "../../../api/schoolDataApi";

const ChartContainer = (props) => {

  const {
    //props
    selectedSchoolList,
    selectedDate,
    classes,

    //state
    totalBillPerClassList,
    totalBillByStudentList,
    totalBillBySexRatioList,
    sexRatioList,
    totalBillByAreaList,

    //actions
    selectTotalBillPerClass,
    selectTotalBillByStudent,
    selectTotalBillBySexRatio,
    selectSexRatio,
    selectTotalBillByArea,
  } = props;

  const [areaChartSort, setAreaChartSort] = React.useState(true);
  const [studentChartSort, setStudentChartSort] = React.useState(true);

  React.useEffect(() => {
    selectTotalBillPerClass(selectedSchoolList, selectedDate);
    selectTotalBillByStudent(selectedSchoolList, selectedDate);
    selectSexRatio(selectedSchoolList, selectedDate);
    selectTotalBillBySexRatio(selectedSchoolList, selectedDate);
    selectTotalBillByArea(selectedSchoolList, selectedDate);
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
            <div className={classes.chartTitle}>
              <h4 className={classes.cardTitle}>최근 1년간 학급 당 전기요금</h4>
              <p className={classes.cardCategory}>{`( ${prevDateFormat(selectedDate)} ~ ${dateFormat(selectedDate)})`}</p>
            </div>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12} lg={6}>
        <Card>
          <CardHeader color="info" icon>
          </CardHeader>
          <CardBody>
            <button
              onClick={() => {setStudentChartSort(!studentChartSort)}}
              className={classes.chartSortBtn}
            >sort</button>
            <ReactHighcharts
              highcharts={ReactHighcharts.Highcharts}
              config={totalBillByStudentChart(totalBillByStudentList, studentChartSort)}
            />
            <div className={classes.chartTitle}>
              <h4 className={classes.cardTitle}>최근 1년간 학생 당 전기요금</h4>
              <p className={classes.cardCategory}>{`( ${prevDateFormat(selectedDate)} ~ ${dateFormat(selectedDate)})`}</p>
            </div>
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
              config={totalBillBySexRatioChart(totalBillBySexRatioList)}
            />
            <div className={classes.chartTitle}>
              <h4 className={classes.cardTitle}>남녀성비에 따른 전기사용량</h4>
              <p className={classes.cardCategory}>{`( ${prevDateFormat(selectedDate)} ~ ${dateFormat(selectedDate)})`}</p>
            </div>
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
              config={sexRatioChart(sexRatioList)}
            />
            <div className={classes.chartTitle}>
              <h4 className={classes.cardTitle}>학교 별 남녀성비</h4>
            </div>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12} lg={6}>
        <Card>
          <CardHeader color="info" icon>
          </CardHeader>
          <CardBody>
            <button
              onClick={() => {setAreaChartSort(!areaChartSort)}}
              className={classes.chartSortBtn}
            >sort</button>
            <ReactHighcharts
              highcharts={ReactHighcharts.Highcharts}
              config={totalBillByAreaChart(totalBillByAreaList, areaChartSort)}
            />
            <div className={classes.chartTitle}>
              <h4 className={classes.cardTitle}>면적 당 연간 전기요금</h4>
              <p className={classes.cardCategory}>{`( ${prevDateFormat(selectedDate)} ~ ${dateFormat(selectedDate)})`}</p>
            </div>
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
    totalBillByStudentList: state.totalBillByStudentList,
    totalBillBySexRatioList: state.totalBillBySexRatioList,
    sexRatioList: state.sexRatioList,
    totalBillByAreaList: state.totalBillByAreaList,
    //actions
    selectTotalBillPerClass: actions.selectTotalBillPerClass,
    selectTotalBillByStudent: actions.selectTotalBillByStudent,
    selectTotalBillBySexRatio: actions.selectTotalBillBySexRatio,
    selectSexRatio: actions.selectSexRatio,
    selectTotalBillByArea: actions.selectTotalBillByArea,
  })
)(ChartContainer);