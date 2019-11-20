import React, {Fragment} from "react";

// @material-ui/icons
import AssessmentOutlined from "@material-ui/icons/AssessmentOutlined";
import Favorite from "@material-ui/icons/Favorite";
import Clear from "@material-ui/icons/Clear";
import Dvr from "@material-ui/icons/Dvr";


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
            return [v.siteName, v.cntrPwr+' kWh', v.cntrKnd, v.readingDate+ '일', nextDateFormat(v.transmissionDate), ,<AssessmentOutlined/>, <Fragment><Favorite style={{color:"#03bcd4"}}/><Dvr style={{color:"#fe9f15"}}/><Clear style={{color:"#f44638"}}/></Fragment>]
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