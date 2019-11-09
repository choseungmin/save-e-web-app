import React, {Fragment} from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
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

import styles from "assets/jss/material-dashboard-pro-react/views/analysis/dashboardStyle.js";
import extendedStyles from "assets/jss/material-dashboard-pro-react/views/extendedFormsStyle.js";
import {useAnalysis} from "../../../contexts/analysisModule";
import {useDashboard} from "../../../contexts/dashboardModule";
import {comma} from "util/commonUtil.js"


const useStyles = makeStyles({ ...extendedStyles, ...styles });

const SummaryHeader = (props) => {

  const {
    //props
    selectedSchoolList,
    selectedDate,

    //state
    headerSummaryInfo,

    //actions
    selectDashboardHeaderSummary
  } = props;

  const classes = useStyles();

  React.useEffect(() => {
    console.log("SummaryHeader Init!!", props)
    if(selectedSchoolList!=null && selectedDate != '') {
      selectDashboardHeaderSummary(selectedSchoolList, selectedDate);
    }

  },[selectedSchoolList, selectedDate]);

  return (
    <Fragment>
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
                <h6 className={classes.cardCategory}>이번달 전기요금</h6>
                <h4 className={`${classes.cardTitle}`}>
                  {
                    headerSummaryInfo[0]
                    ? comma(headerSummaryInfo[0].totalBill)
                    : 0
                  }
                  {' 원'}
                </h4>
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
                <h6 className={classes.cardCategory}>전기 사용량</h6>
                <h4 className={`${classes.cardTitle}`}>
                  {
                    headerSummaryInfo[0]
                    ? comma(headerSummaryInfo[0].pwrQty)
                    : 0
                  }
                  {' kWh'}
                </h4>
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
                <h6 className={classes.cardCategory}>최대 수요</h6>
                <h4 className={`${classes.cardTitle}`}>
                  {
                    headerSummaryInfo[0]
                    ? comma(headerSummaryInfo[0].maxPower)
                    : 0
                  }
                  {' kW'}
                </h4>
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
                <h4 className={`${classes.cardTitle}`}>
                  {
                    headerSummaryInfo[0]
                    ? comma(Math.round(headerSummaryInfo[0].pwrQty*0.000469))
                    : 0
                  }
                  {' tCO2'}
                </h4>
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
    </Fragment>
  )
};

export default useDashboard(
  ({ state, actions }) => ({
    //state
    headerSummaryInfo: state.headerSummaryInfo,
    //actions
    selectDashboardHeaderSummary: actions.selectDashboardHeaderSummary
  })
)(SummaryHeader);