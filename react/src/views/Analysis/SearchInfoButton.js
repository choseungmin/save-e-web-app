import React from 'react';
import {makeStyles} from "@material-ui/core";

import styles from "assets/jss/material-dashboard-pro-react/views/analysis/schoolSelectButtonStyle.js";
import {useAnalysis} from "../../contexts/analysisModule";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";

const useStyles = makeStyles({ ...styles });

const SearchInfoButton = (props) => {

  const {
    analysisSchoolList,
    analysisDateList,
    selectedSchoolList,
    setSelectedSchoolList,
    setSelectedDate,
    selectedDate
  } = props;
  const classes = useStyles();

  const schoolList = [...analysisSchoolList];
  const dateList = [...analysisDateList];

  React.useEffect(() => {
    if(selectedDate === '' && analysisDateList.length > 0) {
      setSelectedDate(analysisDateList[0].value);
    }

  },[selectedDate, analysisDateList]);

  const selectSchool = target => {
    if(target === 'all') {
      if(selectedSchoolList.length === 3) {
        setSelectedSchoolList([])
      } else {
        setSelectedSchoolList(schoolList.map((v) => {return v.value}))
      }
    } else {
      if(selectedSchoolList.filter((v) => {return v === target}).length > 0) {
        const list = selectedSchoolList.filter((v) => {return v !== target})
        setSelectedSchoolList([...list])
      } else {
        setSelectedSchoolList([...selectedSchoolList, target]);
      }
    }
  };

  const getSchoolButtonColor = target => {
    if(target === 'all') {
      return selectedSchoolList.length === 3 ? "info" : null;
    } else {
      return selectedSchoolList.filter(v => {return v === target}).length > 0 ? 'info' : null;
    }
  };
  const getSchoolButtonClass = target => {
    if(target === 'all') {
      return `${classes.marginRight} totalButton`;
    } else {
      if(selectedSchoolList.filter((v) => {return v === target}).length > 0) {
        return `${classes.marginRight}`;
      } else {
        return `${classes.marginRight} defaultButton`;
      }
    }
  }

  const selectDateName = name => {
    dateList.map((v,i) => {
      if(v.name === name.replace('.','')) {
        // setDateSelect(v);
        setSelectedDate(v.value)
      }
      return null;
    });
  };

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12} lg={12}>
        <div className={classes.schoolButtonBox} style={{marginRight: "39px"}}>
          <Button
            onClick={() => selectSchool('all')}
            color={getSchoolButtonColor('all') }
            className={getSchoolButtonClass('all')}>
            전체
          </Button>
          <Button
            onClick={() => selectSchool('1')}
            color="info"
            size="sm"
            className={getSchoolButtonClass('1')}>
            초등학교
          </Button>
          <Button
            onClick={() => selectSchool('2')}
            color="info"
            size="sm"
            className={getSchoolButtonClass('2')}>
            중학교
          </Button>
          <Button
            onClick={() => selectSchool('3')}
            color="info"
            size="sm"
            className={getSchoolButtonClass('3')}>
            고등학교
          </Button>
        </div>
        <div className={classes.schoolButtonBox}>
          <CustomDropdown
            onClick={name => {selectDateName(name)}}
            dropup
            className="defaultButton"
            buttonText={`${selectedDate.substring(0,4)}.${selectedDate.substring(4,6)}`}
            hoverColor="info"
            dropPlacement="top"
            buttonProps={{
              round: false,
              fullWidth: true,
              size: "sm"
            }}
            dropdownHeader="날짜 선택"
            dropdownList={
              dateList.map((v,i) =>{return `${v.name.substring(0,4)}.${v.name.substring(4,6)}` })
            }
          />
        </div>
      </GridItem>
    </GridContainer>
  )
}
export default useAnalysis(
  ({ state, actions }) => ({
    //state
    analysisSchoolList: state.analysisSchoolList,
    analysisDateList: state.analysisDateList,
    selectedSchoolList: state.selectedSchoolList,
    selectedDate: state.selectedDate,
    //actions
    setSelectedSchoolList: actions.setSelectedSchoolList,
    setSelectedDate: actions.setSelectedDate,
  })
)(SearchInfoButton);
