import React, { Component, createContext } from 'react';
import createUseConsumer from './lib/createUseConsumer';
import {
  selectTotalBillPerClass,
  selectTotalBillByStudent,
  selectTotalBillBySexRatio,
  selectSexRatio,
  selectTotalBillByArea,
} from '../api/schoolDataApi';

import {
  selectAdvisorInfoTable,
} from '../api/advisorApi';

const Context = createContext();

const {
  Provider,
  Consumer: AdvisorConsumer
} = Context;

class AdvisorProvider extends Component {
  state = {
    advisorInfoList: [],
  };
  actions = {
    selectAdvisorInfoTable: async (selectedSchoolList, selectedDate) => {
      await selectAdvisorInfoTable(selectedSchoolList, selectedDate).then((result) => {
        if(result &&result.length>0) {
          this.setState(() => ({advisorInfoList: [...result]}));
        } else {
          this.setState(() => ({advisorInfoList: []}));
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

const useAdvisor = createUseConsumer(AdvisorConsumer);

export {
  AdvisorProvider,
  AdvisorConsumer,
  useAdvisor,
};
