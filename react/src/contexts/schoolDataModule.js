import React, { Component, createContext } from 'react';
import createUseConsumer from './lib/createUseConsumer';
import {
  selectTotalBillPerClass,
  selectSexRatio,
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
    sexRatioList: [],
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
    selectSexRatio: async (selectedSchoolList, selectedDate) => {
      await selectSexRatio(selectedSchoolList, selectedDate).then((result) => {
        if(result &&result.length>0) {
          this.setState(() => ({sexRatioList: [...result]}));
        } else {
          this.setState(() => ({sexRatioList: []}));
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
