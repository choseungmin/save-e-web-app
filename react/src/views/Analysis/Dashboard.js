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

const useStyles = makeStyles({ ...extendedStyles, ...styles });

const Dashboard = (props) => {
  const {
    analysisSchoolList,
    analysisDateList,
    selectedSchoolList,
    setSelectedSchoolList
  } = props;
  const classes = useStyles();

  const schoolList = [...analysisSchoolList];
  const dateList = [...analysisDateList];
  const [schoolSelect, setSchoolSelect] = React.useState(analysisSchoolList[0]);
  const [dateSelect, setDateSelect] = React.useState({value: '-', name: '-'});

  React.useEffect(() => {
    console.log('dashboard useEffect')
    if(dateSelect.value == '-' && analysisDateList.length > 0) {
      setDateSelect(analysisDateList[0]);
    }

  });

  const selectSchool = target => {
    if(target == 'all') {
      if(selectedSchoolList.length == 3) {
        setSelectedSchoolList([])
      } else {
        setSelectedSchoolList(schoolList.map((v) => {return v.value}))
      }
    } else {
      if(selectedSchoolList.filter((v) => {return v == target}).length > 0) {
        const list = selectedSchoolList.filter((v) => {return v != target})
        setSelectedSchoolList([...list])
      } else {
        setSelectedSchoolList([...selectedSchoolList, target]);
      }
    }
  };

  const getSchoolButtonColor = target => {
    if(target == 'all') {
      return selectedSchoolList.length == 3 ? "info" : null;
    } else {
      return selectedSchoolList.filter(v => {return v == target}).length > 0 ? 'info' : null;
    }
  };
  const getSchoolButtonClass = target => {
    if(target == 'all') {
      return `${classes.marginRight} totalButton`;
    } else {
      if(selectedSchoolList.filter((v) => {return v == target}).length > 0) {
        return `${classes.marginRight}`;
      } else {
        return `${classes.marginRight} defaultButton`;
      }
    }
  }

  const selectSchoolName = name => {
    schoolList.map((v,i) => {
      if(v.name == name) {
        setSchoolSelect(v);
      }
    })
  };
  const selectDateName = name => {
    dateList.map((v,i) => {
      if(v.name == name) {
        setDateSelect(v);
      }
    })
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <GridContainer>
            <GridItem xs={12} sm={8} md={10} lg={12}>
              <div className={classes.schoolButtonBox} style={{marginRight: "39px"}}>
                <Button
                  onClick={() => selectSchool('all')}
                  color={getSchoolButtonColor('all') }
                  className={getSchoolButtonClass('all')}>
                  전체
                </Button>
                <Button
                  onClick={() => selectSchool('elementary')}
                  color={getSchoolButtonColor('elementary')}
                  size="sm"
                  className={getSchoolButtonClass('elementary')}>
                  초등학교
                </Button>
                <Button
                  onClick={() => selectSchool('middle')}
                  color={getSchoolButtonColor('middle')}
                  size="sm"
                  className={getSchoolButtonClass('middle')}>
                  중학교
                </Button>
                <Button
                  onClick={() => selectSchool('high')}
                  color="info"
                  size="sm"
                  className={getSchoolButtonClass('high')}>
                  고등학교
                </Button>
              </div>
              <div className={classes.schoolButtonBox}>
                <CustomDropdown
                  onClick={name => {selectDateName(name)}}
                  dropup
                  className="defaultButton"
                  buttonText={dateSelect.name}
                  hoverColor="info"
                  dropPlacement="top"
                  buttonProps={{
                    round: false,
                    fullWidth: true,
                    // style: { marginBottom: "0" },
                    // color: "default",
                    size: "sm"
                  }}
                  dropdownHeader="날짜 선택"
                  dropdownList={
                    dateList.map((v,i) =>{return v.name})
                  }
                />
              </div>
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={2}>

            </GridItem>
          </GridContainer>
        </GridItem>
        <br/>
        <br/>
        <br/>

        {/*<GridItem xs={12} sm={12} md={12} lg={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6} lg={3}>
              <FormControl
                fullWidth
                className={classes.selectFormControl}
              >
                <InputLabel
                  htmlFor="multiple-select"
                  className={`${classes.selectLabel} ${classes.selectCategoryLabel}`}
                >
                  학교 선택
                </InputLabel>
                <Select
                  multiple
                  value={multipleSelect}
                  onChange={handleMultiple}
                  MenuProps={{ className: classes.selectMenu }}
                  classes={{ select: classes.select }}
                  inputProps={{
                    name: "multipleSelect",
                    id: "multiple-select"
                  }}
                >
                  <MenuItem
                    disabled
                    classes={{
                      root: classes.selectMenuItem
                    }}
                  >
                    학교 선택
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelectedMultiple
                    }}
                    value="1"
                  >
                    초등학교
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelectedMultiple
                    }}
                    value="2"
                  >
                    중학교
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelectedMultiple
                    }}
                    value="3"
                  >
                    고등학교
                  </MenuItem>
                </Select>
              </FormControl>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={3}>
              <FormControl
                fullWidth
                className={classes.selectFormControl}
              >
                <InputLabel
                  htmlFor="simple-select"
                  className={`${classes.selectLabel} ${classes.selectCategoryLabel}`}
                >
                  날짜 선택
                </InputLabel>
                <Select
                  MenuProps={{
                    className: classes.selectMenu
                  }}
                  classes={{
                    select: classes.select
                  }}
                  value={simpleSelect}
                  onChange={handleSimple}
                  inputProps={{
                    name: "simpleSelect",
                    id: "simple-select"
                  }}
                >
                  <MenuItem
                    disabled
                    classes={{
                      root: classes.selectMenuItem
                    }}
                  >
                    날짜 선택
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected
                    }}
                    value="201910"
                  >
                    2019년 10월
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected
                    }}
                    value="201909"
                  >
                    2019년 09월
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected
                    }}
                    value="201908"
                  >
                    2019년 08월
                  </MenuItem>
                </Select>
              </FormControl>
            </GridItem>
          </GridContainer>
        </GridItem>*/}
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
                    {/*<ArrowUpward className={classes.upArrowCardCategory} />*/}
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
    number: state.number,
    analysisSchoolList: state.analysisSchoolList,
    analysisDateList: state.analysisDateList,
    selectedSchoolList: state.selectedSchoolList,
    //actions
    setSelectedSchoolList: actions.setSelectedSchoolList,
  })
)(Dashboard);
