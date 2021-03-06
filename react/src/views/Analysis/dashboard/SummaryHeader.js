import React, {Fragment} from "react";

// @material-ui/core components
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import OfflineBoltOutlined from "@material-ui/icons/OfflineBoltOutlined";


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";
import Muted from "components/Typography/Muted.js";

import {useDashboard} from "../../../contexts/dashboardModule";
import {comma} from "util/commonUtil.js"
import PercentValue from "./PercentValue";



const SummaryHeader = (props) => {

  const {
    //props
    selectedSchoolList,
    selectedDate,
    classes,

    //state
    headerSummaryInfo,
    headerSummaryTotalInfo,
    analysisTargetList,
    serviceRanking,

    //actions
    selectDashboardHeaderSummary,
    selectDashboardHeaderSummaryTotal,
    selectAnalysisTargetList,
  } = props;

  React.useEffect(() => {
    if(selectedSchoolList!=null && selectedDate != '') {
      selectDashboardHeaderSummary(selectedSchoolList, selectedDate);
      selectDashboardHeaderSummaryTotal(selectedSchoolList, selectedDate);
      selectAnalysisTargetList(selectedSchoolList)
    }

  },[selectedSchoolList, selectedDate]);

  const dateFormat = (selectedDate) => {
    return `${selectedDate.substring(0,4)}.${selectedDate.substring(4,6)}`
  };

  const getSavingTotalBill =(headerSummaryTotalInfo) => {
    const matchDateTotalInfo = headerSummaryTotalInfo.filter(v => (v.tgtMonth == selectedDate.substring(4,6)));
    if(matchDateTotalInfo.length > 0) {
      return comma(matchDateTotalInfo[0].savingTotalBill);
    } else {
      return '-';
    }
  }

  return (
    <Fragment>
      <GridItem xs={12} sm={12} md={12} lg={10}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <div className={classes.targetCount}>
              <div className="totalCount">전체 학교 수 { serviceRanking ? serviceRanking.length : '-' }</div>
              <Muted>
                ( 데이터 수집 { serviceRanking ? serviceRanking.length - serviceRanking.filter((v) => {return v.pwrQty == null}).length : '-' }개 학교
                /
                미수집 { serviceRanking ? serviceRanking.filter((v) => {return v.pwrQty == null}).length : '-' }개 학교 )
              </Muted>
            </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardHeader className={classes.textRight} color="info" icon>
                <CardIcon color="info">
                  <OfflineBoltOutlined/>
                </CardIcon>
                <h6 className={classes.cardCategory}>이번달 전기요금</h6>
                <h4 className={`${classes.cardTitle}`}>
                  {
                    headerSummaryInfo[0]
                    ? comma(headerSummaryInfo[0].totalBill)
                    : '-'
                  }
                  {' 원'}
                </h4>
              </CardHeader>
              <CardFooter className={`${classes.displayInlineBlock} ${classes.cardFooterItems}`} stats >
                <PercentValue
                  classes={classes}
                  headerSummaryInfo={headerSummaryInfo}
                  name={'totalBill'}
                />
                <div className={classes.stats}>
                  전월대비<br/>({dateFormat(selectedDate)})
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
                <h6 className={classes.cardCategory}>전기 사용량</h6>
                <h4 className={`${classes.cardTitle}`}>
                  {
                    headerSummaryInfo[0]
                    ? comma(headerSummaryInfo[0].pwrQty)
                    : '-'
                  }
                  {' kWh'}
                </h4>
              </CardHeader>
              <CardFooter className={`${classes.displayInlineBlock} ${classes.cardFooterItems}`} stats >
                <PercentValue
                  classes={classes}
                  headerSummaryInfo={headerSummaryInfo}
                  name={'pwrQty'}
                />
                <div className={classes.stats}>
                  전월대비<br/>({dateFormat(selectedDate)})
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
                <h6 className={classes.cardCategory}>최대 수요</h6>
                <h4 className={`${classes.cardTitle}`}>
                  {
                    headerSummaryInfo[0]
                    ? comma(headerSummaryInfo[0].maxPower)
                    : '-'
                  }
                  {' kW'}
                </h4>
              </CardHeader>
              <CardFooter className={`${classes.displayInlineBlock} ${classes.cardFooterItems}`} stats >
                <PercentValue
                  classes={classes}
                  headerSummaryInfo={headerSummaryInfo}
                  name={'maxPower'}
                />
                <div className={classes.stats}>
                  전월대비<br/>({dateFormat(selectedDate)})
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
                <h4 className={`${classes.cardTitle}`}>
                  {
                    headerSummaryInfo[0]
                    ? comma(Math.round(headerSummaryInfo[0].pwrQty*0.000469))
                    : '-'
                  }
                  {' tCO2'}
                </h4>
              </CardHeader>
              <CardFooter className={`${classes.displayInlineBlock} ${classes.cardFooterItems}`} stats >
                <PercentValue
                  classes={classes}
                  headerSummaryInfo={headerSummaryInfo}
                  name={'pwrQty'}
                />
                <div className={classes.stats}>
                  전월대비<br/>({dateFormat(selectedDate)})
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
              {
                headerSummaryTotalInfo.length> 0
                  ? getSavingTotalBill(headerSummaryTotalInfo)
                  : '-'
              }
              {' 원'}
            </h3>
          </CardFooter>
        </Card>
      </GridItem>
    </Fragment>
  )
};

export default useDashboard(
  ({ state, actions }) => ({
    //state
    headerSummaryInfo: state.headerSummaryInfo,
    headerSummaryTotalInfo: state.headerSummaryTotalInfo,
    analysisTargetList: state.analysisTargetList,
    serviceRanking: state.serviceRanking, //ServiceRanking 에서 api call
    //actions
    selectDashboardHeaderSummary: actions.selectDashboardHeaderSummary,
    selectDashboardHeaderSummaryTotal: actions.selectDashboardHeaderSummaryTotal,
    selectAnalysisTargetList: actions.selectAnalysisTargetList,
  })
)(SummaryHeader);
