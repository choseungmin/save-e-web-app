import React, { Component, createContext } from 'react';
import createUseConsumer from './lib/createUseConsumer';
import {
  selectTotalBillPerClass,
  selectTotalBillByStudent,
  selectSexRatio,
  selectTotalBillByArea,
} from '../api/schoolDataApi';

import {
  selectAnalysisTargetList,
} from '../api/analysisApi';

const Context = createContext();

const {
  Provider,
  Consumer: SchoolDataConsumer
} = Context;

class SchoolDataProvider extends Component {
  state = {
    totalBillPerClassList: [],
    totalBillByStudentList: [],
    sexRatioList: [],
    totalBillByAreaList: [],
  };
  actions = {
    selectTotalBillPerClass: async (selectedSchoolList, selectedDate) => {
      await selectTotalBillPerClass(selectedSchoolList, selectedDate).then((result) => {
        if(result &&result.length>0) {
          this.setState(() => ({totalBillPerClassList: [...result]}));
        } else {
          this.setState(() => ({totalBillPerClassList: []}));
        }
      });
    },
    selectTotalBillByStudent: async (selectedSchoolList, selectedDate) => {
      await selectTotalBillByStudent(selectedSchoolList, selectedDate).then((result) => {
        if(result &&result.length>0) {
            this.setState(() => ({totalBillByStudentList: [...result]}));
        } else {
          this.setState(() => ({totalBillByStudentList: []}));
        }
      });
    },
    selectSexRatio: async (selectedSchoolList, selectedDate) => {
      await selectSexRatio(selectedSchoolList, selectedDate).then((result) => {
        if(result &&result.length>0) {
          this.setState(() => ({sexRatioList: [...result]}));
        } else {
          this.setState(() => ({sexRatioList: []}));
        }
      });
    },
    selectTotalBillByArea: async (selectedSchoolList, selectedDate) => {
      await selectTotalBillByArea(selectedSchoolList, selectedDate).then((result) => {
        if(result &&result.length>0) {
          this.setState(() => ({totalBillByAreaList: [...result]}));
        } else {
          this.setState(() => ({totalBillByAreaList: []}));
        }
      });
    },
  };
  render() {
    const { state, actions } = this;
    const value = { state, actions };
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    );
  }
}

const useSchoolData = createUseConsumer(SchoolDataConsumer);

export {
  SchoolDataProvider,
  SchoolDataConsumer,
  useSchoolData,
};
