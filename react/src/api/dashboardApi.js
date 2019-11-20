import axios from 'axios';

const selectDashboardHeaderSummary = async (selectedSchoolList, selectedDate) => {
  try {
    const param = {sclDiv: selectedSchoolList, tgtDate: selectedDate};
    const response = await axios.post('/api/dashboard/selectDashboardHeaderSummary', param);
    if(response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch (e) {
    console.error(e);
  }
};

const selectDashboardHeaderSummaryTotal = async (selectedSchoolList, selectedDate) => {
  try {
    const param = {sclDiv: selectedSchoolList, tgtDate: selectedDate};
    const response = await axios.post('/api/dashboard/selectDashboardHeaderSummaryTotal', param);
    if(response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch (e) {
    console.error(e);
  }
};

const selectDashboardServiceRanking = async (selectedSchoolList, selectedDate) => {
  try {
    const param = {sclDiv: selectedSchoolList, tgtDate: selectedDate};
    const response = await axios.post('/api/dashboard/selectDashboardServiceRanking', param);
    if(response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch (e) {
    console.error(e);
  }
};

const selectDashboardChart = async (selectedSchoolList, selectedDate) => {
  try {
    const param = {sclDiv: selectedSchoolList, tgtDate: selectedDate};
    const response = await axios.post('/api/dashboard/selectDashboardChart', param);
    if(response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch (e) {
    console.error(e);
  }
};



export {
  selectDashboardHeaderSummary,
  selectDashboardHeaderSummaryTotal,
  selectDashboardServiceRanking,
  selectDashboardChart,
};
