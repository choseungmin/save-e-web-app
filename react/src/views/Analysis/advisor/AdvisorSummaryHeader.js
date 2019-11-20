import React, {Fragment} from "react";


// @material-ui/core components
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import AssignmentOutlined from "@material-ui/icons/AssignmentOutlined";
import OfflineBoltOutlined from "@material-ui/icons/OfflineBoltOutlined";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";
import SearchInfoButton from "views/Analysis/SearchInfoButton.js";

// context API
import {useDashboard} from "../../../contexts/dashboardModule";


const AdvisorSummaryHeader = (props) => {

  const {
    //props
    selectedSchoolList,
    selectedDate,
    classes,

    //state
    headerSummaryInfo,

    //actions
    selectDashboardHeaderSummary,
  } = props;

  React.useEffect(() => {
    if(selectedSchoolList !== null && selectedDate !== '') {
      selectDashboardHeaderSummary(selectedSchoolList, selectedDate);
    }

  },[selectedSchoolList, selectedDate]);

  console.log('headerSummaryInfo', headerSummaryInfo)

  return (
    <Fragment>
      <GridItem xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardHeader className={classes.textRight} color="info" icon>
            <CardIcon color="info">
              <OfflineBoltOutlined/>
            </CardIcon>
            <h6 className={classes.cardCategory}>최근 1년간 전기요금</h6>
            <h4 className={`${classes.cardTitle}`}>5,000,000원</h4>
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
      <GridItem xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardHeader className={classes.textRight} color="info" icon>
            <CardIcon color="info">
              <Icon>highlight</Icon>
            </CardIcon>
            <h6 className={classes.cardCategory}>최근 1년간 전기 사용량</h6>
            <h4 className={`${classes.cardTitle}`}>5,000,000kWh</h4>
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
      <GridItem xs={12} sm={12} md={4} lg={3}>
        <Card>
          <CardHeader className={classes.textRight} color="info" icon>
            <CardIcon color="info">
              <Icon>trending_up</Icon>
            </CardIcon>
            <h5 className={`${classes.cardCategory} ${classes.fontWeight500} ${classes.saveTitle}`}>9WATT 관리시<br/>줄일 수 있는 절감액</h5>
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
    </Fragment>
  )
};

export default useDashboard(
  ({ state, actions }) => ({
    //state
    headerSummaryInfo: state.headerSummaryInfo,
    //actions
    selectDashboardHeaderSummary: actions.selectDashboardHeaderSummary,
  })
)(AdvisorSummaryHeader);