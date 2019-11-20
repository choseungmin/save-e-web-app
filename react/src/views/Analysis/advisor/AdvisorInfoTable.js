import React, {Fragment} from "react";

// @material-ui/icons
import AssessmentOutlined from "@material-ui/icons/AssessmentOutlined";
import Favorite from "@material-ui/icons/Favorite";
import Clear from "@material-ui/icons/Clear";
import Dvr from "@material-ui/icons/Dvr";
import Description from "@material-ui/icons/Description";
import EventNote from "@material-ui/icons/EventNote";


// core components
import Table from "components/Table/Table.js";


// context API
import {useAdvisor} from "../../../contexts/advisorModule";

import {nextDateFormat} from "util/commonUtil.js"

const AdvisorInfoTable = (props) => {



  const {
    //props
    selectedSchoolList,
    selectedDate,
    classes,

    //state
    advisorInfoList,

    //actions
    selectAdvisorInfoTable,
  } = props;

  React.useEffect(() => {
    if(selectedSchoolList !== null && selectedDate !== '') {
      selectAdvisorInfoTable(selectedSchoolList, selectedDate);
    }

  },[selectedSchoolList, selectedDate]);

  return (
    <Table
      className={classes.rankTable}
      tableHead={["학교명", "계약전력", "전기요금제", "검침일", "송전일자", <div>절감보고서<br/>다운로드</div>, "Actions"]}
      colgroup={[17,13,17,13,17,13,10]}

      tableData={
        advisorInfoList && advisorInfoList.length >0
          ? advisorInfoList.map((v) => {
            return [
              v.siteName,
              v.cntrPwr+' kWh',
              v.cntrKnd,
              v.readingDate+ '일',
              nextDateFormat(v.transmissionDate),
              <a target={"_blank"} href={"https://ninewatt-report.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%8E%E1%85%A5%E1%86%AB%E1%84%80%E1%85%AE%E1%84%8B%E1%85%AF%E1%86%AF%E1%84%8E%E1%85%A9%E1%84%83%E1%85%B3%E1%86%BC%E1%84%92%E1%85%A1%E1%86%A8%E1%84%80%E1%85%AD+%E1%84%8B%E1%85%A6%E1%84%82%E1%85%A5%E1%84%8C%E1%85%B5%E1%84%87%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5%E1%86%A8+%E1%84%87%E1%85%A9%E1%84%80%E1%85%A9%E1%84%89%E1%85%A5.pdf"}><EventNote style={{color:"#f44638", cursor:"pointer"}}/></a>,
              <Fragment><Favorite style={{color:"#03bcd4"}}/><Dvr style={{color:"#fe9f15"}}/><Clear style={{color:"#f44638"}}/></Fragment>]
          })
          : []
      }

      // tableData={[
      //   [ "** 초등학교", "200 kW", "교육용(을)고압A", "30일", "1997.03.01",<AssessmentOutlined/>, <Fragment><Favorite style={{color:"#03bcd4"}}/><Dvr style={{color:"#fe9f15"}}/><Clear style={{color:"#f44638"}}/></Fragment> ],
      //   [ "** 초등학교", "200 kW", "교육용(을)고압A", "30일", "1997.03.01",<AssessmentOutlined/>, <Fragment><Favorite style={{color:"#03bcd4"}}/><Dvr style={{color:"#fe9f15"}}/><Clear style={{color:"#f44638"}}/></Fragment> ],
      //   [ "** 초등학교", "200 kW", "교육용(을)고압A", "30일", "1997.03.01",<AssessmentOutlined/>, <Fragment><Favorite style={{color:"#03bcd4"}}/><Dvr style={{color:"#fe9f15"}}/><Clear style={{color:"#f44638"}}/></Fragment> ],
      //   [ "** 초등학교", "200 kW", "교육용(을)고압A", "30일", "1997.03.01",<AssessmentOutlined/>, <Fragment><Favorite style={{color:"#03bcd4"}}/><Dvr style={{color:"#fe9f15"}}/><Clear style={{color:"#f44638"}}/></Fragment> ],
      //   [ "** 초등학교", "200 kW", "교육용(을)고압A", "30일", "1997.03.01",<AssessmentOutlined/>, <Fragment><Favorite style={{color:"#03bcd4"}}/><Dvr style={{color:"#fe9f15"}}/><Clear style={{color:"#f44638"}}/></Fragment> ],
      //   [ "** 초등학교", "200 kW", "교육용(을)고압A", "30일", "1997.03.01",<AssessmentOutlined/>, <Fragment><Favorite style={{color:"#03bcd4"}}/><Dvr style={{color:"#fe9f15"}}/><Clear style={{color:"#f44638"}}/></Fragment> ],
      //   [ "** 초등학교", "200 kW", "교육용(을)고압A", "30일", "1997.03.01",<AssessmentOutlined/>, <Fragment><Favorite style={{color:"#03bcd4"}}/><Dvr style={{color:"#fe9f15"}}/><Clear style={{color:"#f44638"}}/></Fragment> ],
      //   [ "** 초등학교", "200 kW", "교육용(을)고압A", "30일", "1997.03.01",<AssessmentOutlined/>, <Fragment><Favorite style={{color:"#03bcd4"}}/><Dvr style={{color:"#fe9f15"}}/><Clear style={{color:"#f44638"}}/></Fragment> ],
      //   [ "** 초등학교", "200 kW", "교육용(을)고압A", "30일", "1997.03.01",<AssessmentOutlined/>, <Fragment><Favorite style={{color:"#03bcd4"}}/><Dvr style={{color:"#fe9f15"}}/><Clear style={{color:"#f44638"}}/></Fragment> ],
      //   [ "** 초등학교", "200 kW", "교육용(을)고압A", "30일", "1997.03.01",<AssessmentOutlined/>, <Fragment><Favorite style={{color:"#03bcd4"}}/><Dvr style={{color:"#fe9f15"}}/><Clear style={{color:"#f44638"}}/></Fragment> ],
      // ]}
    />
  )
};

export default useAdvisor(
  ({ state, actions }) => ({
    //state
    advisorInfoList: state.advisorInfoList,
    //actions
    selectAdvisorInfoTable: actions.selectAdvisorInfoTable,
  })
)(AdvisorInfoTable);