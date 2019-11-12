import axios from 'axios';

const getLoginUserInfo = async () => {
  try {
    const response = await axios.post('/api/analysis/getLoginUserInfo', {});

    if(response.data) {
      return response.data;
    } else {
      return null;
    }

  } catch (e) {
    console.error(e);
  }
};

const selectAnalysisTargetList = async (selectedSchoolList) => {
  try {
    const response = await axios.post('/api/analysis/selectAnalysisTargetList', {sclDiv: selectedSchoolList});
    return response;
  } catch (e) {
    console.error(e);
  }
};

const getAnalysisSchoolList = async(param) => {
  try {
    const response = await {
      data: [
        {value: '1', name: '초등학교'},
        {value: '2', name: '중학교'},
        {value: '3', name: '고등학교'},
      ]};

    if(response.data) {
      return response.data;
    } else {
      return null;
    }

  } catch(e) {
    console.error(e);
  }
};

const getAnalysisDateList = async(param) => {
  try {
    //TODO 추후 api 수정할것 !
    console.warn('TODO 추후 api 수정할것 !')
    const response = await axios.post('/api/analysis/selectTargetDate');
    /*const response = {data: {}};
    response.data = [
      {value: '201910', name: '2019.10'},
      {value: '201909', name: '2019.09'},
      {value: '201908', name: '2019.08'},
      {value: '201907', name: '2019.07'},
      {value: '201906', name: '2019.06'},
    ];*/
    if(response.data) {
      return response.data;
    } else {
      return [];
    }

  } catch(e) {
    console.error(e);
  }
};

export {
  getLoginUserInfo,
  getAnalysisSchoolList,
  getAnalysisDateList,
  selectAnalysisTargetList
};
