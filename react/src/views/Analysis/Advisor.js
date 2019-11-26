import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import AssignmentOutlined from "@material-ui/icons/AssignmentOutlined";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import SearchInfoButton from "views/Analysis/SearchInfoButton.js";

// context API
import { useAnalysis } from '../../contexts/analysisModule';

import styles from "assets/jss/material-dashboard-pro-react/views/analysis/advisorStyle.js";
import extendedStyles from "assets/jss/material-dashboard-pro-react/views/extendedFormsStyle.js";
import AdvisorInfoTable from "./advisor/AdvisorInfoTable";
import AdvisorSummaryHeader from "./advisor/AdvisorSummaryHeader";

const useStyles = makeStyles({ ...extendedStyles, ...styles });

const Advisor = (props) => {
  const classes = useStyles();

  const {
    //state
    analysisDateList,
    selectedSchoolList,
    selectedDate,
    //actions
    setSelectedDate
  } = props;


  React.useEffect(() => {
    //advisor는 항상 최근 달을 사용 해야함
    if(selectedDate !== analysisDateList[0].value) {
      setSelectedDate(analysisDateList[0].value);
    }
  },[selectedSchoolList, selectedDate]);

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <SearchInfoButton/>
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6} lg={4}>
                  <Card>
                    <CardHeader color="info" icon>
                      <h4 className={`${classes.cardIconTitle} ${classes.fontWeight500}`}>
                        <AssignmentOutlined/>
                        <span>에너지 현황 및 관리 Potential</span>
                      </h4>
                    </CardHeader>
                  </Card>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </GridItem>
        <br/>
        <br/>
        <br/>
        <AdvisorSummaryHeader
          selectedSchoolList={selectedSchoolList}
          selectedDate={selectedDate}
          classes={classes}
        />
      </GridContainer>
      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <CardHeader color="info" icon>
              <h4 className={`${classes.cardIconTitle} ${classes.fontWeight500}`}>
                <AssignmentOutlined/>
                <span>학교별 에너지 절감방법</span>
              </h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={10} lg={6} className={`${classes.borderTop} ${classes.tableComment}`}>
                  <p>9watt는 아이들이 불편해 하지 않는 방법으로 에너지를 줄일 수 있는 노하우를 보유하고 있습니다.</p>
                  <p><b>학교별로 줄일수 있는 에너지양은 서로 다릅니다. 지금 확인해보세요.</b></p>
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <GridContainer justify="space-between">
                <GridItem xs={12} sm={12} md={12}>
                  <AdvisorInfoTable
                    selectedSchoolList={selectedSchoolList}
                    selectedDate={selectedDate}
                    classes={classes}
                  />
                </GridItem>
              </GridContainer>
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
    analysisDateList: state.analysisDateList,
    selectedSchoolList: state.selectedSchoolList,
    selectedDate: state.selectedDate,
    //actions
    setSelectedDate: actions.setSelectedDate
  })
)(Advisor);
