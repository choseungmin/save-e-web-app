import axios from 'axios';

const getLoginUserInfo = async () => {
  try {
    const response = await axios.post('/api/analysis/getLoginUserInfo', {});
    return response;
  } catch (e) {
    console.error(e);
  }
};

const getAnalysisSchoolList = async(param) => {
  try {
    const response = await {
      result: [
        {value: 'elementary', name: '초등학교'},
        {value: 'middle', name: '중학교'},
        {value: 'high', name: '고등학교'},
      ]};
    return response;
  } catch(e) {
    console.error(e);
  }
};

const getAnalysisDateList = async(param) => {
  try {
    //TODO 추후 api 수정할것 !
    console.warn('TODO 추후 api 수정할것 !')
    // const response = await axios.get('/posts/1');
    const response = {data: {}};
    response.data.result = [
      {value: '201910', name: '2019.10'},
      {value: '201909', name: '2019.09'},
      {value: '201908', name: '2019.08'},
      {value: '201907', name: '2019.07'},
      {value: '201906', name: '2019.06'},
    ];
    return response.data;
  } catch(e) {
    console.error(e);
  }
};

export {
  getLoginUserInfo,
  getAnalysisSchoolList,
  getAnalysisDateList,
};
