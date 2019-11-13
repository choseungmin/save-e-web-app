import React, {Fragment} from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import AssignmentOutlined from "@material-ui/icons/AssignmentOutlined";
import OfflineBoltOutlined from "@material-ui/icons/OfflineBoltOutlined";
import AssessmentOutlined from "@material-ui/icons/AssessmentOutlined";
import Favorite from "@material-ui/icons/Favorite";
import Clear from "@material-ui/icons/Clear";
import Dvr from "@material-ui/icons/Dvr";


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import SearchInfoButton from "views/Analysis/SearchInfoButton.js";

// context API
import { useAnalysis } from '../../contexts/analysisModule';

import styles from "assets/jss/material-dashboard-pro-react/views/analysis/advisorStyle.js";
import extendedStyles from "assets/jss/material-dashboard-pro-react/views/extendedFormsStyle.js";

const useStyles = makeStyles({ ...extendedStyles, ...styles });

const Advisor = (props) => {
  const classes = useStyles();


  React.useEffect(() => {

  });

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
                <GridItem xs={12} sm={12} md={12}>
                  <Table
                    className={classes.rankTable}
                    tableHead={["학교명", "계약전력", "전기요금제", "검침일", "송전일자", <div>절감보고서<br/>다운로드</div>, "Actions"]}
                    tableData={[
                      [ "** 초등학교", "200 kW", "교육용(을)고압A", "30일", "1997.03.01",<AssessmentOutlined/>, <Fragment><Favorite style={{color:"#03bcd4"}}/><Dvr style={{color:"#fe9f15"}}/><Clear style={{color:"#f44638"}}/></Fragment> ],
                      [ "** 초등학교", "200 kW", "교육용(을)고압A", "30일", "1997.03.01",<AssessmentOutlined/>, <Fragment><Favorite style={{color:"#03bcd4"}}/><Dvr style={{color:"#fe9f15"}}/><Clear style={{color:"#f44638"}}/></Fragment> ],
                      [ "** 초등학교", "200 kW", "교육용(을)고압A", "30일", "1997.03.01",<AssessmentOutlined/>, <Fragment><Favorite style={{color:"#03bcd4"}}/><Dvr style={{color:"#fe9f15"}}/><Clear style={{color:"#f44638"}}/></Fragment> ],
                      [ "** 초등학교", "200 kW", "교육용(을)고압A", "30일", "1997.03.01",<AssessmentOutlined/>, <Fragment><Favorite style={{color:"#03bcd4"}}/><Dvr style={{color:"#fe9f15"}}/><Clear style={{color:"#f44638"}}/></Fragment> ],
                      [ "** 초등학교", "200 kW", "교육용(을)고압A", "30일", "1997.03.01",<AssessmentOutlined/>, <Fragment><Favorite style={{color:"#03bcd4"}}/><Dvr style={{color:"#fe9f15"}}/><Clear style={{color:"#f44638"}}/></Fragment> ],
                      [ "** 초등학교", "200 kW", "교육용(을)고압A", "30일", "1997.03.01",<AssessmentOutlined/>, <Fragment><Favorite style={{color:"#03bcd4"}}/><Dvr style={{color:"#fe9f15"}}/><Clear style={{color:"#f44638"}}/></Fragment> ],
                      [ "** 초등학교", "200 kW", "교육용(을)고압A", "30일", "1997.03.01",<AssessmentOutlined/>, <Fragment><Favorite style={{color:"#03bcd4"}}/><Dvr style={{color:"#fe9f15"}}/><Clear style={{color:"#f44638"}}/></Fragment> ],
                      [ "** 초등학교", "200 kW", "교육용(을)고압A", "30일", "1997.03.01",<AssessmentOutlined/>, <Fragment><Favorite style={{color:"#03bcd4"}}/><Dvr style={{color:"#fe9f15"}}/><Clear style={{color:"#f44638"}}/></Fragment> ],
                      [ "** 초등학교", "200 kW", "교육용(을)고압A", "30일", "1997.03.01",<AssessmentOutlined/>, <Fragment><Favorite style={{color:"#03bcd4"}}/><Dvr style={{color:"#fe9f15"}}/><Clear style={{color:"#f44638"}}/></Fragment> ],
                      [ "** 초등학교", "200 kW", "교육용(을)고압A", "30일", "1997.03.01",<AssessmentOutlined/>, <Fragment><Favorite style={{color:"#03bcd4"}}/><Dvr style={{color:"#fe9f15"}}/><Clear style={{color:"#f44638"}}/></Fragment> ],
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
export default useAnalysis(
  ({ state, actions }) => ({
    analysisDateList: state.analysisDateList,
  })
)(Advisor);
