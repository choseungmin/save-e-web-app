import React from "react";

// @material-ui/icons
import AssessmentOutlined from "@material-ui/icons/AssessmentOutlined";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";

// context API
import {useDashboard} from "../../../contexts/dashboardModule";
import SiteMap from "./SiteMap";



const ServiceRanking = (props) => {

  const {
    //props
    selectedSchoolList,
    selectedDate,
    classes,
    //state
    serviceRanking,
    //actions
    selectDashboardServiceRanking,
  } = props;

  React.useEffect(() => {
    if(selectedSchoolList !== null && selectedDate !== '') {
      selectDashboardServiceRanking(selectedSchoolList, selectedDate);
    }

  },[selectedSchoolList, selectedDate]);


  return (
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
                tableData={
                  serviceRanking && serviceRanking.length >0
                    ? serviceRanking.map((v, i) => {
                      return [i+1, v.siteName, v.pwrQty, v.pwrPerClass]
                    })
                    : []
                  }
                colgroup={[10,30,30,30]}
                height={"330px"}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <SiteMap
                serviceRanking={serviceRanking}
                classes={classes}
              />
            </GridItem>
          </GridContainer>
        </CardBody>
      </Card>
    </GridItem>
  )
};

export default useDashboard(
  ({ state, actions }) => ({
    //state
    serviceRanking: state.serviceRanking,
    //actions
    selectDashboardServiceRanking: actions.selectDashboardServiceRanking,
  })
)(ServiceRanking);